/*
[error.jsx란?]

      - 해당 경로 또는 폴더의 컴포넌트에서 렌더링 중 오류가 발생하면,
        fallback으로 보여줄 에러 UI.
      
      - app/폴더 하위 error.jsx를 만들면,
        해당 경로의 하위 컴포넌트 에러를 자동으로 캐치한다.
      
      [핵심 특징]
      - props로 error, reset을 받음
      - reset() 호출 → 오류 상태를 초기화하고 오류가 발생했던 컴포넌트의 렌더링을 다시 시도하는 함수
      - error : 발생한 오류에 대한 정보 (JavaScript Error 객체)를 담고 있는 객체
      
      [주의]
      - 반드시 Client Component로 작성해야 함
      - 'error.jsx'라는 이름 필수
*/

'use client'

import { useEffect } from "react"
export default function ErrorPage({ error, reset }) {
  
  useEffect(() => {
    console.log('에러 발생 : ',error);
  }, [error])
  
  return (
    <div>
      <h1>문제가 발생했습니다.</h1>
      <p>{error.message}</p>
      <p>오류 위치 : {error.stack}</p>
      <button onClick={()=> reset()}>다시시도</button>
    </div>
  )
}