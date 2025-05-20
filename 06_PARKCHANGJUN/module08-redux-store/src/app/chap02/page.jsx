"use client";

import { useSelector, useDispatch } from "react-redux";

function Section01() {
  const state = useSelector((state) => state);
  // state에는 어떻게 값이 들어가있을까 ?
  // { count : 0, user : {name: '', age: 0}}가 정의된다.
  // 이것은 combineReducer로 생성한 rootReducer의 결과이다.

  const dispatch = useDispatch();

  const handleUser = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_USER", payload: { name: name, value: value } });
  };

  return (
    <div>
      <h2>Section01</h2>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <div>
        <p>사용자 이름 : {state.user.name} </p>
        <p>사용자 나이 : {state.user.age}</p>
        <input type="text" name="name" onChange={handleUser} />
        <input type="number" name="age" onChange={handleUser} />
      </div>
    </div>
  );
}

export default Section01;
