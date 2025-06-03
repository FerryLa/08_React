/*
 * useSearchParams (next/navigation)
 *
 * useSearchParams는 Next.js App Router에서 제공하는 클라이언트 컴포넌트 훅(Hook)이다.
 * 이 훅은 현재 페이지 URL의 쿼리 파라미터 (Query Parameters) 정보를 클라이언트 컴포넌트에서 읽어오기 위해 사용된다.
 *
 * 쿼리 파라미터란?
 * - URL의 물음표(?) 뒤에 붙는 `key=value` 형태의 데이터 쌍을 의미한다.
 * - 예시: `/product?name=apple&price=1.5` 라는 URL에서 `name=apple`과 `price=1.5`가 쿼리 파라미터이다.
 *
 * 역할 및 특징:
 * 1.  쿼리 파라미터 접근: 현재 URL의 쿼리 문자열을 파싱하여 객체 형태로 제공한다.
 * 2.  클라이언트 전용: 반드시 `'use client'` 지시자가 있는 클라이언트 컴포넌트 안에서만 사용할 수 있다. (서버 컴포넌트에서는 사용 불가)
 * 3.  `URLSearchParams` 객체 반환: `useSearchParams()`를 호출하면 브라우저의 내장 `URLSearchParams` API 객체의 인스턴스를 반환한다.
 *     - 이 객체의 `get('키')` 메서드를 사용하여 특정 키에 해당하는 값을 가져올 수 있다.
 *     - 가장 흔하게 사용되며, 제시된 코드에서 'name'과 'price' 값을 가져오는 데 사용되었다.
 *     - `getAll('키')` 메서드를 사용하면 같은 키로 여러 번 전달된 모든 값을 배열로 가져올 수 있다.
 *     - `has('키')` 등으로 특정 키의 존재 여부도 확인할 수 있다.
 *
 */

"use client";
import { useSearchParams } from "next/navigation";
function QueryParamPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  return (
    <div>
      <h1>QUeryParmaPgae</h1>
      <p>name : {name}</p>
      <p>price : {price}원</p>
    </div>
  );
}

export default QueryParamPage;
