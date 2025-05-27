"use client";

import {
  increment,
  decrement,
} from "@/components/chap03/slice/CreateAsyncThunk";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "@/components/chap03/thunk/ThunkReducer";
function Section01() {
  const state = useSelector((state) => state.counter);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CreateSlice</h1>
      <div>
        <p>Count : {state.value}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <p>status : {userState.state}</p>
        <p>Data : {JSON.stringify(userState.data)}</p>
        <p>status : {userState.status}</p>
        <button onClick={() => dispatch(fetchUser())}>fetchUser</button>
      </div>
    </>
  );
}

export default Section01;
