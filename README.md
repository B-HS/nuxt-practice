# Nuxt 찍먹 프로젝트
-   Vue는 알고있으니 nuxt 는 어떤맛인지 제대로 찍어먹어보자
-   아래에 배운점들을 nuxt document 의 메뉴 순서대로 하나씩 쓰고 감상을 적어보자
-   집중력이 딸려보이니 하루에 1-2시간씩 1주일정도 잡고 쭉 달려보자


# 1일차 - 기본컨셉
## Configuration
### Enviroment Variables
-   runtimeConfig object를 설정하면 .env 에서 끌어오기 가능
-   NUXT*PUBLIC* 의 prefix 값은 Client로 노출 되는데 나머지는 안되나봄 (아예 에러, 이건 좋다)
-   config 에 지정하다보니 타입도 자동완성해주는데 따로 ZOD로 맵핑안해놔도 되어서 좀 편한 것같다

### Enviroment Overrides
-   환경별로 rule이나 페이지 방식을 따로 줄수있나봄
-   개빡치는 caching 문제를 dev에서도 제대로 볼수있고... 반대로 사이드이펙트 거의없이 ISR로직들도 껐다 킬수있나봄
-   오호

### AppConfiguration
-   그냥 전역값을 여기서 싹다 세팅할수있는듯
-   중간에 주입도되나 해봤는데 주입되는듯한데 공식에서는 권장안하나봄 빌드시점에 결정된다하니 진짜 고정상수로만 사용하자

## Views
### app.vue
-   렌더링 진입점.
-   이전에 documents.tsx..같은 pages router같은느낌인데 사실 그냥 vue의 main.ts라고 보는게 더 정확할듯하다

### Components
-   말그대로 컴포넌트. 추후 Structure에서 보게되긴할텐데 nuxt는 next만큼 폴더 자유성이 없나보다

### pages
-   찐 페이지라우터. index.vue로 만들면 적당히 NuxtPage로 연동되는듯

### Layouts
-   이건 추후 Layouts로 더 심도있게 다뤄야할듯, Nextjs랑 좀 많이다름

## Assets
- public이 찐 static url, app은 그냥 번들할때 같이 끌어서 쓰는듯
- nextjs는 public 제대로 안해주더만.. 이건 그냥 assets에 넣고하면 잘 될듯하니 편하긴하네 

## Styling
- 쌩Vue랑 거의 다른거없고 nuxt.config.ts 에 전역으로 load 시킬수있는점정도 ? 

## Routing
### Pages
- index.vue 가 아니고 다른 파일 이름으로 들어가면 해당 폴더의 하위 path가 됨 
  - (contents 폴더에서 index.vue -> /contents, contents폴더에서 video.vue  -> /contents/video/)
- 페이지 이동은 `NuxtLink`사용 to 라는 properties로 가나봄
### Middleware
- nextjs 의 proxy랑 비슷
- 근데 진짜 middleware처럼 구조가 짜여짐
- to / from 도 제공해줌 
- SASS짤때 더 편할듯함
- definePageMeta 이걸로 페이지마다 정의도 가능하고 middleware/{}.global.ts 이러면 전역으로 그냥 다 적용되기도함

## 지금쯤 보는 페이지/미들웨어 렌더링 순서

현재 `pages/index.vue` 진입 시 실행 순서 (실제 console.log 출력 순):

```
[MW 1] global: 01-analytics.global   ← middleware/01-analytics.global.ts (전역, 알파벳 순)
[MW 2] global: 02-setup.global       ← middleware/02-setup.global.ts (전역, 알파벳 순)
[MW 3] named: auth                   ← definePageMeta.middleware 배열 [0]
[MW 4] named: logger                 ← definePageMeta.middleware 배열 [1]
[MW 5] anonymous(inline) middleware  ← definePageMeta.middleware 배열 [2] (인라인 함수)
─────────── 여기까지 통과해야 페이지 setup 시작 ───────────
[PAGE] index.vue setup 시작           ← <script setup> 실행 시작
[PAGE] AppConfig 사용                 ← useAppConfig() 호출
[PAGE] index.vue setup 끝
─────────── setup 끝나면 렌더 ───────────
app.vue → <NuxtLayout> → <NuxtPage>(index.vue)
```

### 핵심 규칙
- **Middleware는 페이지/레이아웃 렌더보다 항상 먼저** 실행됨 (navigation guard)
- **Global middleware** (`*.global.ts`) → **named/anonymous middleware** 순
- Global끼리는 **파일명 알파벳 순**이라 순서 통제하려면 `01-`, `02-` 같이 prefix 붙임
- definePageMeta.middleware 배열 안에서는 **선언 순서대로** 실행
- 어느 단계든 `navigateTo()` / `abortNavigation()` 리턴하면 뒤는 안 돌아가고 페이지도 안 그려짐
- 최초 SSR에서는 **서버 콘솔(터미널)** 에 찍히고, 클라이언트 라우팅 시에는 **브라우저 콘솔** 에 찍힘

### app.vue setup은 어디서?
- `app.vue`는 **앱 부팅 시 1번만** setup. 라우트 이동마다 다시 안 돌음
- 그래서 최초 진입 시: `app.vue setup` 은 **middleware 시작 전쯤** (Nuxt 부팅 → plugins → app.vue setup → middleware → page setup) 위치
- 클라 라우트 이동 시: `app.vue setup` 은 **안 찍힘** (이미 마운트되어 있음)

## SEO/Meta
- 기본적으로 UnHead를 사용한다함 (개꿀, 라이브러리 하나 가져갑니다)
### nuxt.config.ts
- app > head에 기본 SEO 설정이 된다함(그냥 설정에서 다 때려박는 느낌이 쎔, next는 그래도 자율성을 보장하는데 nuxt는 거의 규칙이 딱딱있네)
- 또 app > head 에 흔히 넣는 charset, viewport등도 넣을수있나봄
### useHead
- hook 형식으로 head를 넣을수있나봄
- 추후에 이게 Streaming가능한 header인지도 확인해봐야겠음
### useSeoMeta
- 또한 hook형식으로 SEO 태그들도 지원하나봄
- 좀편하긴하다 이건 next에서는 다 찾아서 넣어야했는데 ㅂㄷㅂㄷ ..

### Components
- 기본적으로 Head태그 안에 Title, Base, NoScript, Style, Meta 등 지원하나봄
- 다만 호불호가 좀 갈릴듯 난 useSeoMeta가 ssr도 지원하면 그냥 저걸로쓸듯

### etc.
- 뭐 reactive 하게 설정도 가능하고 
- callback 도 인자로 지원해주는듯하고 
- 또 여러가지 script, css도 헤더에 바로 붙일수있는듯
- 기본적인 기능이 다 있고 다른 부가기능도 튼실함

## Transition
- 이거 예전에 vue로 뭐만들때 본듯한데 ..
- 그냥 페이지 change 형식을 냅다 지원하는듯
- nuxt.config.ts에서 app -> pageTransition 에서 ㅜ믇rhk mode로 가능하나봄
- ㅇㅇ 확실함 page-enter/leave-active 이런식으로 넣는거보니 기억이 새롬새롬 남 

# 2일차 - 기본컨셉
## Data Fetching
## State Management
## Error Handling
## Server

# 3일차 - 기본컨셉
## Layers
## Prerendering
## Deployment
## Testing
## Upgrade Guide

# 4일차 - Structure

# 5일차 - Guide 정독 및 정리

# 6일차 - API 정독 및 쓸만한거 모아서 정리해두기 


