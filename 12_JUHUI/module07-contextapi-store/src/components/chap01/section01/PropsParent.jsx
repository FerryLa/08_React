/*
 * memo (React.memo)
 * memo는 React에서 제공하는 고차 컴포넌트 (Higher-Order Component, HOC)이다.
 * 함수 컴포넌트를 감싸서 렌더링 성능을 최적화하는 데 사용된다.
 *
 * 역할:
 * - memo로 감싸진 함수 컴포넌트(이 경우 `PropsParent`)는 React가 리렌더링을 건너뛸지 여부를 판단한다.
 * - React는 컴포넌트가 받는 props가 이전 렌더링 시점과 비교하여 변경되지 않았는지 확인한다.
 * - 만약 props가 변경되지 않았다면 (기본적으로 props의 얕은 비교(shallow comparison)를 수행),
 *   React는 해당 컴포넌트를 다시 렌더링하는 것을 건너뛰고 마지막에 렌더링된 결과를 재사용한다. 이를 메모이제이션(Memoization)이라고 한다.
 *
 * 사용 이유 (장점):
 * - 상위 부모 컴포넌트가 자주 리렌더링되더라도, memo로 감싸진 자식 컴포넌트의 props가 변하지 않았다면 자식 컴포넌트의 불필요한 리렌더링을 막을 수 있다.
 * - 특히 렌더링하는 데 비용(시간/연산)이 많이 소요되는 컴포넌트나, 컴포넌트 트리의 깊은 곳에 위치하지만
 *   받는 props는 자주 변하지 않는 컴포넌트에 적용하면 애플리케이션의 렌더링 성능을 크게 향상시킬 수 있다.
 *
 * 주의사항:
 * - props를 비교하는 과정 자체에도 약간의 오버헤드가 있다.
 *   컴포넌트가 매우 단순하여 렌더링 비용이 적거나, props가 거의 항상 자주 변하는 경우에는 memo를 사용하는 것이 오히려 성능에 도움이 되지 않거나 미미할 수 있다.
 * - memo는 기본적으로 props만 비교한다. 따라서 컴포넌트 내부의 `useState`로 관리되는 상태가 변하거나,
 *  `useContext` 훅으로 소비하는 Context 값이 변하면 props가 변하지 않았더라도 해당 컴포넌트는 리렌더링된다.
 * - 객체나 배열 같은 props는 얕은 비교를 하므로, 객체/배열의 내용물은 같더라도 참조(메모리 주소)가 달라지면
 *   React는 props가 변경된 것으로 간주하고 리렌더링한다.
 *   (예: `const newObj = { ...oldObj };` 처럼 새 객체를 만들면 참조가 달라진다.)
 *   깊은 비교가 필요하면 memo의 두 번째 인자로 비교 함수를 제공해야 하지만, 일반적으로는
 *   상태 업데이트 로직을 최적화하여 props의 참조가 불필요하게 변경되지 않도록 하는 것이 권장된다.
 */
import { memo } from "react";
import Child from "./PropsChild";

function PropsParent({ user }) {
  console.log("Parent");
  return <Child user={user} />;
}

export default memo(PropsParent);
