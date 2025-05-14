/*
Redux Saga: 비동기 작업 관리를 위한 미들웨어
saga는 특정 액션이 디스패치되는 것을 감지하고 해당 액션이 발생하면
미리 정의한 로직(saga)을 실행하는 방식이다.
비동기 작업을 중간에 취소하거나, 여러 작업을 순차적으로 하거나, 동시에 여러 작업을 하는 등 유연하게 비동기 작업을 처리할 수 있다.

thunk는 단일 비동기 로직을 관리하기 위해서 간단하게 사용하는 방식이라면
saga는 복잡한 비동기 흐름 제어를 위해서 사용하는 방식이다.

핵심 개념:
1. 제너레이터 함수(function*): 
   - 'yield' 키워드로 실행을 일시 중지/재개할 수 있는 특수 함수
   - 비동기 코드를 동기적으로 작성 가능 (async/await과 유사하지만 더 강력)

2. 이펙트(Effect): Saga 미들웨어에게 지시하는 순수 객체
   - call: 함수 호출 (API 요청 등) - 결과를 기다림 (블로킹)
   - put: Redux 액션 디스패치
   - takeEvery/takeLatest: 특정 액션 감지 후 사가 실행 (디스패치를 감지해서 사가를 실행한다는 것)
   - select: Redux 스토어에서 상태 조회
   - fork: 비차단 방식으로 사가 실행 (비동기 요청을 보내고 다음 코드 블럭을 실행한다는 것)
   - cancel: 실행 중인 사가 취소

3. 패턴:
   - 워처 사가(Watcher): 액션 감지 (takeEvery/takeLatest)
   - 워커 사가(Worker): 실제 비동기 작업 수행 (call/put)

사용 시나리오:
- 복잡한 비동기 흐름 제어 (요청 취소, 타임아웃)
- 병렬/순차적 API 호출
- 디바운싱/스로틀링
- 웹소켓 연결 관리
- 백그라운드 작업

Thunk vs Saga:
- Thunk: 간단한 비동기 작업에 적합, Redux Toolkit에 기본 포함
- Saga: 복잡한 비동기 흐름 제어에 적합, 별도 설치 필요
*/
// npm install redux-saga

import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { fetchOrders } from './orderSlice';


/* 
워처 사가 : 액션 감지 (takeEvery/takeLatest)
takeEvery : 액션이 디스패치될 때마다 사가를 실행
takeLatest : 액션이 디스패치될 때마다 사가를 실행, 마지막 액션만 실행
*/
export function* watchOrdersSaga() { // Generator 함수 선언
   // store 초기화 시점에 딱 한번만 실행되는 코드
   console.log('watchOrdersSaga'); // 이 사가가 시작될 때 콘솔에 찍힘

   // 'orders/fetchOrdersSaga' 액션이 디스패치될 때마다 fetchOrdersSaga 함수(사가)를 실행
   yield takeEvery('orders/fetchOrdersSaga', fetchOrdersSaga);
}

/* 
워커 사가 : 실제 비동기 로직 수행 
*/
function* fetchOrdersSaga() {
   try {
      // call : 함수 호출 (API 요청 등) - 결과를 기다림 (블로킹)
      // axios.get('http://localhost:4000/orders') 함수를 호출하고 그 결과를 기다린다
      yield put(fetchOrders.pending());

      // all : 여러 개의 비동기 작업을 동시에 실행하고 모든 작업이 완료된 후 결과를 반환
      const [ordersRes, productsRes] = yield all([
         call(axios.get, 'http://localhost:4000/orders'),
         call(axios.get, 'http://localhost:4000/products'),
      ]);

      const orders = ordersRes.data;
      const products = productsRes.data;


      const ordersWithProducts = orders.map((order) => {
         products.find((p) => {
            if (p.id == order.productId) {
               order.productId = p.name;
            }
         });
         return order;
      });

      // redux 액션 디스패치
      // put : redux 액션을 디스패치하는 Effect Creator 
      yield put(fetchOrders.fulfilled(ordersWithProducts));
      
   } catch (e) {// try 안에서 에러가 발생하면 이 catch 블록이 잡음
      // 에러가 났으니, 주문 정보 가져오기가 '실패했다'는 액션 (fetchOrders.rejected)을 디스패치해.
      // 이때 발생한 에러 정보(e)를 액션의 payload에 담아서 보낼 거야.
      yield put(fetchOrders.rejected(e));
   }
}

