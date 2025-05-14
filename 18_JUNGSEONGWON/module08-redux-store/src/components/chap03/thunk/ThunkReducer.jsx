/*
[createAsyncThunk 문법]
Redux Toolkit의 핵심 함수 중 하나로, Redux에서 비동기 로직을 다루는 표준적이고 간편한 방법이다.
redux-thunk를 사용하여 비동기 액션을 직접 작성할 때 발생하는 pending(로딩 시작), fulfilled(성공), rejected(실패) 세 가지 상태 관리를 위한
반복적인 상용구(boilerplate) 코드를 자동화해 준다.

- createAsyncThunk 함수 호출 시 두 개의 주요 인자를 전달한다:
  1. action type prefix (문자열): 이 비동기 작업의 종류를 나타내는 고유한 문자열이다.
     예: 'user/fetchUser' -> 'user/fetchUser/pending', 'user/fetchUser/fulfilled', 'user/fetchUser/rejected' 와 같은
     세 가지의 고유한 액션 타입 문자열이 자동으로 생성된다.
     이 액션 타입들은 extraReducers에서 해당 비동기 작업의 상태 변화를 감지하는 데 사용된다.

  2. payloadCreator (비동기 함수): 실제 비동기 로직(예: API 호출)을 수행하는 함수이다.
     - 이 함수는 Promise를 반환해야 한다 (async/await 사용 시 async 함수 자체가 Promise를 반환).
     - 이 함수의 첫 번째 인자: 액션을 디스패치할 때 함께 전달되는 값 (예: 사용자 ID 등).
     - 이 함수의 두 번째 인자: 'thunkAPI' 객체. 이 객체 안에는 다음과 같은 유용한 도구들이 포함되어 있다.
       - dispatch: 다른 Redux 액션을 디스패치할 수 있는 함수.
       - getState: 현재 Redux 스토어의 상태를 가져올 수 있는 함수.
       - extra: 미들웨어 설정 시 configureStore에 추가적으로 넘겨준 값.
       - signal: AbortController의 Signal 객체로, 비동기 요청 취소에 사용될 수 있다.
       - rejectWithValue: 비동기 작업 실패 시 'rejected' 액션의 payload에 특정 값을 담아 반환하고 싶을 때 사용한다. 오류 객체 자체를 반환하는 것 외에 커스터마이징이 필요할 때 유용하다.

- createAsyncThunk 함수는 세 가지 액션 타입 문자열 (.pending, .fulfilled, .rejected)과
  이 비동기 작업을 시작할 수 있는 'Thunk 액션 크리에이터 함수' 자체를 포함하는 객체를 반환한다.
  이 객체(예: fetchUser)를 export하여 컴포넌트 등에서 dispatch(fetchUser(인자)) 형태로 호출한다.

- 상태 관리:
  - pending: payloadCreator 함수 실행 시작 시 자동 디스패치. 비동기 작업 로딩 상태 관리에 사용.
  - fulfilled: payloadCreator 함수에서 반환된 Promise가 성공(resolve)했을 때 자동 디스패치.
    payloadCreator가 반환한 값이 액션 객체의 'payload'에 담김. 성공 데이터 처리에 사용.
  - rejected: payloadCreator 함수에서 반환된 Promise가 실패(reject)했거나, payloadCreator 실행 중 오류 발생 시 자동 디스패치.
    오류 정보는 액션 객체의 'error' 또는 rejectWithValue 사용 시 'payload'에 담김. 오류 처리에 사용.
*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  console.log(`featchUser 호출`);
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
});

/**
 * reducer : 이 슬라이스 자체에서 정의하고 직접적으로 관련된 동기적인 액션들을 위한 reducer 로직
 * extraReducers : 외부에서 발생한 action에 반응하는 reducer 로직을 정의할 때 사용
 */

const userSlice = createSlice({
  name: "user", // 슬라이스 이름름
  initialState: { data: {}, status: "idle" }, // 초기상태
  reducers: {}, // 동기 action과 reducer 정의
  extraReducers: (builder) => {
    /**
     * builder : addCase등의 메소드가 있어서,
     * 어떤 액션 타입에 반응 할 지 그리고 어떤 reducer 로직을 실행 할지를 체인 형태로 연결하며 정의할 수 있다.
     */
    builder
      .addCase(fetchUser.pending, (state) => {
        // 비동기 작업 시작
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // 비동기 작업 성공
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        // 비동기 작업 실패
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
export { fetchUser };
