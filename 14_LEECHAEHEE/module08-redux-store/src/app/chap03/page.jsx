"use client";

import {
  decrement,
  increment,
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
        <p>Status : {userState.state}</p>
        <p>Data : {JSON.stringify(userState.data)}</p>
        <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      </div>
    </>
  );
}
export default Section01;
