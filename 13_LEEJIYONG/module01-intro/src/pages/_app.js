/*
_app.js 파일은 모든 페이지에서 공통적으로 사용되는 기능을 정의하는 파일이다.
이 파일은 페이지 전체에 공통 기능을 정의하고, 페이지 전환시 공통 기능을 유지하는데 사용된다.
예를 들어, 모든 페이지에 사용되는 공통 스타일, 라우팅, 데이터로드 등을 정의할 수 있다.
*/
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 전역 컴포넌트 (모든 페이지에 표시) */}
      <header>
        <nav>
          <h3>공통 header</h3>
        </nav>
      </header>
      {/* 현제 페이지 컴포넌트 렌더링 */}
      <Component {...pageProps} />
      {/* 전역 푸터 */}
      <footer>
        <p>Encore</p>
        <p>encore@encore.com</p>
      </footer>
    </>
  );
}

export default MyApp;
