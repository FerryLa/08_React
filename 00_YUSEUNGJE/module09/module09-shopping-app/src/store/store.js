/*
middleware 필드: Redux 스토어에 적용할 미들웨어 체인을 설정하는 부분이다.
configureStore는 기본적으로 redux-thunk 등 유용한 미들웨어들을 자동으로 포함시키는데,
이 필드를 통해 기본 미들웨어를 가져와 추가하거나 변경하여 미들웨어 스택을 커스터마이징할 수 있다.

(getDefaultMiddleware) => { ... }:
middleware 필드에 함수를 전달하는 방식이다.
이 함수는 configureStore가 제공하는 '기본 미들웨어 배열'을 가져오는 함수인 `getDefaultMiddleware`를 인자로 받는다.
이 함수 내부에서 기본 미들웨어를 가져온 후, 원하는 추가 미들웨어를 조합하여 새로운 미들웨어 배열을 반환해야 한다.
만약 이 함수 방식 대신 미들웨어 배열 자체를 직접 제공하면, 기본 미들웨어는 포함되지 않는다.

getDefaultMiddleware():
Redux Toolkit이 configureStore 호출 시 기본적으로 적용하는 미들웨어들의 배열을 반환하는 함수이다.
(예: 비동기 처리를 위한 redux-thunk, 개발 모드에서의 직렬화 가능성 및 불변성 검사 미들웨어 등)

.concat(logger):
JavaScript 배열 메서드인 `concat`을 사용하여,
`getDefaultMiddleware()` 호출로 얻은 '기본 미들웨어 배열'의 끝에 `logger` 미들웨어를 추가한다.
이렇게 하여 [기본 미들웨어들..., logger] 형태의 새로운 미들웨어 배열을 만든다.
`logger`는 일반적으로 Redux 상태 변화나 액션 디스패치 정보 등을 콘솔에 기록해주는 미들웨어이다.
(여기서 'logger' 변수는 실제로 유효한 Redux 미들웨어 인스턴스여야 한다. 보통 'redux-logger' 같은 라이브러리에서 가져온다.)

최종적으로 이 함수는 [기본 미들웨어들..., logger] 형태의 배열을 반환하게 되며,
Redux 스토어는 이 배열의 순서대로 미들웨어 체인을 구성하여 액션이 처리될 때 각 미들웨어를 통과하게 된다.
*/
import logger from 'redux-logger'; // npm install redux-logger

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchOrdersSaga } from './slice/orderSaga';

import productReducer from './slice/productSlice';
import cartReducer from './slice/cartSlice';
import usersReducer from './slice/usersSlice';
import ordersReducer from './slice/orderSlice';


// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    users: usersReducer,
    orders: ordersReducer,
  },
  // logger 미들웨어 추가 
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // console.log에 state 변화가 출력된다.
  // 만약 기본 미들웨어 없이 직접 미들웨어들을 정의하고 싶다면 배열 형태로 직접 나열한다.
  // middleware: [myCustomMiddleware1, myCustomMiddleware2],
  // 또는 모든 기본 미들웨어를 제외하고 logger만 쓰고 싶다면:
  // middleware: (getDefaultMiddleware) => [logger],

  // 사가 미들웨어 추가 (saga 추가할 때 등록) 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(logger),
});

// 사가 미들웨어 실행
sagaMiddleware.run(watchOrdersSaga);

export default store;
