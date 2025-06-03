/*
  useSeletor는 react-redux 훅이다.
  > Redux Store의 상태(State) 값에서 필요한 데이터를 추출하여 컴포넌트에서 사용할 수 있도록 하는 훅
*/
/*
  useDispatch는 react-redux 훅이다. 
  > Redux Store에 상태 변경을 요청하는 'Action' 객체를 전달(Dispatch)하기 위한 함수를 가져올 때 사용하는 훅
*/
"use client";

import { useSelector, useDispatch } from "react-redux";

function BasickRedux() {
  // useSelector 훅을 사용하여 Redux Store의 전체 상태(state)에서 필욯나 부분(state.count)을 선택하여 가져온다.
  // 상태 (count)값이 변경되면 이 컴포넌트는 자동으로 리렌더링된다.
  const count = useSelector((state) => state.count);

  // useDispatch 훅을 사용하여 Redux Store에 액션(Action)을 전달(Dispatch)하는 함수를 가져온다.
  // 이 함수는 호출하여 상태 변경을 요청한다. Reducer 함수 자체를 가져오는 것이 아니다.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>BasicRedux</h2>
      <p>Count : {count}</p> {/* useSelector로 가져온  */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default BasickRedux;
