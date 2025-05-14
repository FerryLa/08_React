/*
[RTK 등장 배경]

- Redux는 강력하지만, 기본 설정이 복잡하고 코드 양이 많음.
- Action, Reducer, Store를 따로 작성 → 보일러플레이트 증가.
- DevTools 연동, 비동기 관리, 미들웨어 설정이 번거로움.

[RTK의 목표]
- 보일러플레이트 줄이기.
- DevTools, Immer(불변성 관리) 자동 통합.
- createSlice, createAsyncThunk로 코드 간결화.
*/

/*
createSlice란?
- Redux Toolkit이 제공하는 함수로, Redux 상태 관리를 단순화함
- 기존 Redux의 action type, action creator, reducer를 한 번에 생성
- 내부적으로 immer 라이브러리를 사용해 불변성 관리를 자동으로 처리

createSlice가 필요한 이유:
- 보일러플레이트 코드 감소: 반복적인 Redux 코드 작성 최소화
- 가독성 향상: 관련된 리덕스 로직을 한 파일에 모아서 관리 가능
- 실수 방지: 액션 타입 문자열 오타나 불변성 처리 실수 예방
- 개발 속도 향상: 적은 코드로 더 빠른 개발 가능

[createSlice 문법]
- name: 슬라이스 이름.
- initialState: 초기 상태.
- reducers: 동기 action과 reducer 정의.
- 자동 생성되는 action: counterSlice.actions.increment 등.
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // 슬라이스 이름
  initialState: { value: 0 }, // 초기 상태
  reducers: {
    // action : reducer 정의
    increment: (state) => {
      state.value += 1;
    },
    decrement: (stae) => {
      state.value -= 1;
    },
  },
});
// counterSlice.actions: slice내에 있는 actions을 모아서 반환
export const { increment, decrement } = counterSlice.actions;

// counterSlice.reducer : slice내에 있는 reducer를 반환
export default counterSlice.reducer;