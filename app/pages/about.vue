<template>
    <div>
        <!-- 컴포넌트 방식 (Head/Title/Meta) - JSX같이 선언적으로 쓰는 스타일 -->
        <Head>
            <Title>About</Title>
            <Meta name="description" content="이 프로젝트는 Nuxt 학습용입니다" />
            <Meta property="og:title" content="About | Nuxt 찍먹" />
        </Head>

        <h2>About Page</h2>
        <p>이 페이지의 head 는 &lt;Head&gt; 컴포넌트로 선언함</p>
    </div>
</template>
