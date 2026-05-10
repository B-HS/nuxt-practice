## Nuxt 찍먹 프로젝트

-   Vue는 알고있으니 nuxt 는 어떤맛인지 제대로 찍어먹어보자
-   아래에 배운점들을 nuxt document 의 메뉴 순서대로 하나씩 쓰고 감상을 적어보자

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
