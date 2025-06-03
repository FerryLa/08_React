/*
  - 사용자가 특정 동작을 했을 때 (예: 버튼 클릭), 자바스크립트 코드로 페이지를 이동하고 싶을 때 사용한다.
  - `next/navigation`의 `useRouter()`를 사용하여 라우터 객체를 가져올 수 있다.

  [기능 요약]
  - router.push('/경로') → 특정 경로로 이동
  - router.replace('/경로') → 현재 페이지를 대체 (뒤로 가기 불가)

  [비유]
  - `<Link>`는 정해진 방향 안내판
  - `router.push()`는 네비게이션 직접 조작
 */
"use client";

import { useRouter } from "next/navigation";

function RouterComponent() {
  const router = useRouter();

  return (
    <main>
      <h1>RouterComponent 페이지</h1>
      <p>이 페이지는 RouterComponent페이지이빈디다.</p>

      <button onClick={() => router.push("/")}>메인으로 이동</button>
      <button onClick={() => router.replace("/")}>메인으로 이동</button>
    </main>
  );
}

export default RouterComponent;
