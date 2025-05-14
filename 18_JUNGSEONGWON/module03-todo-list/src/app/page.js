// App Router의 메인 페이지 파일
import TodoList from '../components/TodoList'; // TodoList 컴포넌트 임포트
import React from 'react'; // React 임포트 필요

// 이 페이지는 TodoList 컴포넌트를 렌더링합니다.
// TodoList는 "use client"가 있으므로 클라이언트 측에서 인터랙티브하게 작동합니다.
export default function Home() {
  return (
    <div>
      {/* TodoList 컴포넌트 사용 */}
      <TodoList />
    </div>
  );
}