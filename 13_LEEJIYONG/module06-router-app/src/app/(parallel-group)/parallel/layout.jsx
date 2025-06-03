/*
  [병렬 라우팅 (Parallel Routing)이란?]

  - Next.js에서 하나의 페이지에 여러 개의 slot(영역)을 병렬로 관리할 수 있도록 만든 라우팅 방식.
  - `app/@폴더명` 형태로 폴더를 만들면,
    루트 layout.tsx에서 해당 영역을 slot처럼 받아서 렌더링할 수 있다.

  예:
  app/parallel/
  ├── @modal/
  │    └── page.jsx  // 1번
  ├── @auth/
  │    └── page.jsx  // 2번
  └── layout.js
  └── page.jsx  // 3번

  → layout.jsx에서:
  {modal}  // 1번 컴포넌트가 렌더링됨
  {auth}   // 2번 컴포넌트가 렌더링됨
  {children} // 3번 컴포넌트가 렌더링됨
*/
function ParallelLayout({ children, modal, auth }) {
  return (
    <html>
      <body>
        <header style={{ border: "1px solid black", padding: "10px" }}>
          <nav>
            <h1>parallel Router</h1>
            <h2>parallel Layout 설정</h2>
          </nav>
        </header>
        <main style={{ border: "1px solid green", padding: "10px" }}>
          {children}
        </main>
        {/* @moal의 page가 렌더링된다. */}
        <aside style={{ border: "1px solid blue", padding: "10px" }}>
          {modal}
        </aside>

        {/* @auth의 page가 렌더링된다. */}
        <section style={{ border: "1px solid red", padding: "10px" }}>
          {auth}
        </section>

        <footer>
          <div>
            <p>&copy; 2024 parallel Router Tutorial</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default ParallelLayout;
