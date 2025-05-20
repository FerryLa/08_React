/*
  [Redux Store]

  - Redux에서 상태(state)를 보관하는 '저장소' 역할.
  - 앱의 모든 상태는 단 하나의 Store에 모여 있다 → 중앙 집중식 관리.

  [createStore 함수]
  - Redux의 store를 생성하는 함수.
  - store는 다음과 같은 메서드를 제공:
    - getState(): 현재 상태 가져오기
    - dispatch(action): 상태 업데이트 요청
    - subscribe(listener): 상태 변경 알림 등록

  [combineReducers 함수]
  - 여러 reducer를 하나로 합치는 헬퍼 함수.
  - reducer를 feature(기능) 단위로 나누고,
    combineReducers로 root reducer로 묶음.

  Store > 회사의 중앙 데이터베이스
  reducer > 각 부서의 데이터 처리 담당자
  combineReducers > 여러 부서를 하나의 총괄 시스템으로 통합합
*/

"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

/*
  [Action]
  - Redux에서 상태(state)를 변경하려면 'Action'이라는 신호를 보낸다.
  - Action은 반드시 'type' 속성을 가진 `*객체*`여야한다.

  예
  { type: 'INCREMENT' }
  { type: 'SET_USER', payload: { name : 'Alice'}}

  > type: string 
    상태 변경의 의미를 지닌다.
    대문자, snake_case로 작성하는것이 관례
  
  > payload: any(선택)
  - 추가 데이터 (예: 사용자 정보, 입력값값)
*/
// countReducer
function countReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

// userReducer
function userReducer(state = { name: "", age: 0 }, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

// combinneReducers 로 생성
const rootReducer = combineReducers({
  count: countReducer, // **> countReducer를 count라는 이름으로 저장하며 이는 state의 이름이된다.
  user: userReducer, // **> userReducer를 user라는 이름으로 저장하며 이는 state의 이름이된다.
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
