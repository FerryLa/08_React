"use client";

import { configureStore } from "@reduxjs/toolkit";
// Store : 애플리케이션의 전역 상태를 보관하는 공간
// Action : 상태에 어떤 변화가 필요한지 설명하는 객체
// Reducer : 현재 상태와 Action을 받아 새 상태로 계산하는 함수
// Dispatch : Action을 Store에 전달하는 함수
// Subscribe : 상태 변화가 발생할 때 알림을 받는 구독 메서드

// [데이터 흐름]
// dispatch(action) -> reducer(state,action) -> new state -> view 업데이트

// Reducer

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}


// Store
const store = configureStore({
  reducer: counterReducer,
  
})

export default store;