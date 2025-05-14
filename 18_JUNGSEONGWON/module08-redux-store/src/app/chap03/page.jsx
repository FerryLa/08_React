"use client";

import { decrement, increment } from "@/components/chap03/slice/CreateAsyncThunk";
import { fetchUser } from "@/components/chap03/thunk/ThunkReducer";
import { useSelector, useDispatch } from "react-redux";

function Section01() {
  const state = useSelector((state) => state.counter);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CrateSlice</h1>
      <div>
        <p>Count : {state.value}</p>
        <button onClick = {() => dispatch(increment())}>+</button>
        <button onClick = {() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <p>Status : {userState.state}</p>
      </div>
      <p>Date : {JSON.stringify(userState.data)}</p>
      <button onClick={()=> dispatch(fetchUser())}>Fetch user</button>
    </>
  );
}
export default Section01;