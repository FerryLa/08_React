/*
  중첩 라우팅

  - 여러 단계의 URL 경로를 만들기 위해 폴더를 계층 구조로 구성한다.
  - 예: /products → 상품 목록 페이지
  /products/123 → 특정 상품 상세 페이지

  [구조적 특징]
  - app/products/page.jsx : 기본 목록
  - app/products/[id]/page.jsx : 동적 상세 페이지

  [params 사용]
  - [id] → params.id 로 꺼낼 수 있음 (서버/클라이언트 컴포넌트 각각 다르게 접근)
*/

import Link from "next/link";

export default function ProductListPage() {
  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        <li>
          <Link href="/nested/1">상품 1</Link>
        </li>
        <li>
          <Link href="/nested/2">상품 2</Link>
        </li>
        <li>
          <Link href="/nested/queryparam?name=상품1&price=10000">
            상품 데이터
          </Link>
        </li>
      </ul>
    </div>
  );
}
