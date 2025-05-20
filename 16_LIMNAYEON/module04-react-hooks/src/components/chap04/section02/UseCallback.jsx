/*
  [useCallback이란 무엇인가?]
  useCallback은 함수를 메모이제이션하는 Hook이다.
  useMemo와 유사하지만 함수를 메모이제이션하는 것이 목적이다.
  함수를 메모이제이션하면 함수를 재사용할 수 있어 성능 향상에 도움이 된다.

  useCallback 작동 원리
  1. 함수의 메모이제이션 : 컴포넌트가 렌더링될 때마다 내부의 함수들이 새롭게 생성된다.
    useCallback은 이러한 함수들을 메모이제이션하여 불필요한 재생성을 방지한다.

  2. 의존성 배열 : 함수가 의존하는 값들을 배열로 지정한다.
    이 배열의 값이 변경되지 않으면 함수를 재사용한다.

  3. 메모이제이션된 함수 반환 : 함수의 참조값을 반환한다.


  [useCallback 기본 구조]
  const memoizedCallback = useCallback(() => {
    함수 로직;
  }, [의존성]);

  - 하위 컴포넌트 콜백 함수를 props로 전달할 때
  - 리렌더링시 매번 새로 만들어지는 함수 인스턴스를 방지하고 싶을 때
*/

"use client";

export default function UseCallback() {
  // useCallback을 사용하지 않은 버튼
  const ButtonA = Reactmemo(({ onclick }) => {});
  return (
    <div>
      <h3>콜백</h3>
    </div>
  );
}
