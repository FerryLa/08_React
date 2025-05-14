/*
아래의 dispatch에 있는 setProducts는 createSlice에서 정의한 액션 크리에이터이다.
setProducts(res.data)를 호출하게 되면 payload에 res.data를 담은 아래와 같은 형식의 액션 객체를 생성하게 된다.
{
  type: 'product/setProducts', // 슬라이스 이름 + 리듀서 함수 이름 ('product/setProducts'와 같은 문자열)
  payload: res.data          // 액션 크리에이터 호출 시 넘겨준 인자 (res.data)
}
이후 dispatch에서 발생한 이벤트(액션 객체)가 store에 전달되고, 이 스토어는 전달받은 액션 객체의 타입을 확인하여
해당 reducer 함수(productSlice의 setProducts 리듀서)를 찾는다.
그리고 스토어는 해당 reducer 함수를 호출하면서 현재의 상태와 전달받은 액션 객체 전체를 인자로 전달한다.
(예: setProducts(currentState, { type: 'product/setProducts', payload: res.data }) )
 
이렇게 호출된 reducer 함수는 전달받은 현재 상태와 액션 객체를 바탕으로 새로운 상태를 계산하여 반환하고,
이 새로운 상태는 스토어에 저장되어 상태가 업데이트된다.
이 과정을 통해 Redux의 상태 관리가 이루어진다.
*/

'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/store/slice/productSlice';
import { addToCart } from '@/store/slice/cartSlice';
import Link from 'next/link';


export default function ProductsPage() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.product);
    const user = useSelector((state) => state.users.currentUser);
    useEffect(() => {

        /*
        1. Thunk 함수 반환:
            fetchProducts()를 호출하면 일반 액션 객체가 아닌, Promise를 처리하는 특별한 함수(Thunk 함수)를 반환한다.
            (createAsyncThunk 내부에서 정의된 async () => { ... } 이 부분이 이 함수이다.)
        
        2. dispatch에 함수 전달:
            dispatch(fetchProducts()) 호출 시, dispatch는 액션 객체 대신 함수를 인자로 받게 된다.

        3. Thunk 미들웨어의 개입:
            Redux 스토어에 Redux Thunk 미들웨어(configureStore에 기본 포함)가 적용되어 있다면,
            이 미들웨어가 dispatch로 전달된 인자가 함수인지 확인한다.
            함수라면, 미들웨어는 그 함수를 가로채서 스토어의 리듀서로 보내지 않고 자신이 직접 실행한다.
        
        4. Thunk 함수 실행 및 자동 액션 디스패치:
            Thunk 미들웨어는 가로챈 fetchProducts Thunk 함수를 실행한다.
            이때 함수에게 `dispatch`, `getState` 등의 인자를 제공한다.
            실행된 fetchProducts Thunk 함수 내부에서는 createAsyncThunk의 로직에 따라 비동기 작업 상태에 맞는 액션 객체들을 자동으로, 그리고 차례로 디스패치한다.
        
            - 비동기 작업 시작 시: 먼저 `{ type: 'products/fetchProducts/pending' }` 형태의 액션 객체가 자동으로 디스패치된다.
            - axio.get 실행: HTTP 요청을 보낸다.
            - 비동기 작업 성공 시 (axios.get Promise가 resolve): `{ type: 'products/fetchProducts/fulfilled', payload: res.data }` 형태의 액션 객체가 자동으로 디스패치된다. 
              (axios 응답 데이터인 res.data가 payload에 담김)
            - 비동기 작업 실패 시 (axios.get Promise가 reject 또는 rejectWithValue 호출): `{ type: 'products/fetchProducts/rejected', payload: error }` 
              형태의 액션 객체가 자동으로 디스패치된다. (오류 정보가 payload에 담김)

        5. 스토어의 리듀서 처리 (extraReducers):
            이제 스토어는 Thunk 함수에 의해 차례로 디스패치된 `pending`, `fulfilled`, `rejected`와 같은 일반 액션 객체들을 전달받는다.
            스토어는 각 액션 객체의 타입을 확인하고, 해당 액션 타입에 반응하도록 `createSlice`의 `extraReducers`에 정의된 리듀서 함수를 찾는다.
        
        6. extraReducers 함수 호출:
            스토어는 해당 `extraReducers` 함수(예: `WorkspaceProducts.pending`에 연결된 리듀서, `WorkspaceProducts.fulfilled`에 연결된 리듀서)를 호출한다.
            이때 스토어는 리듀서 함수에게 현재 상태와 전달받은 액션 객체 전체를 인자로 전달한다.
            (예: `pendingReducer(currentState, { type: 'products/fetchProducts/pending' })`, `fulfilledReducer(currentState, { type: 'products/fetchProducts/fulfilled', payload: data })`)
        
        7. 상태 업데이트:
            이렇게 호출된 각 `extraReducers` 함수는 전달받은 현재 상태와 액션 객체를 바탕으로 새로운 상태를 계산하여 반환하고,
            이 새로운 상태는 스토어에 저장되어 해당 슬라이스의 상태가 업데이트된다.
            (예: pending 시 status를 'loading'으로 변경, fulfilled 시 status를 'succeeded'로 변경하고 data 저장)
        
        이 과정을 통해 비동기 작업의 시작, 진행, 완료 상태가 Redux 상태에 반영되어 컴포넌트에서 로딩 표시, 데이터 표시, 에러 처리 등을 할 수 있게 된다.
        */
        dispatch(fetchProducts());
    }, [dispatch]);
    /*
      dispatch는 어던 렌더링 사이에서도 항상 동일하다는 것을 보장한다.
      즉, 생성되면 변하지 않는 값이다.
      이러한 함수를 의존성 배열에 포함하게 되면 useEffect가 처음 마운트 되는 시점에 한번 호출되고 이후 렌더링 사이에서는 호출되지 않는다.
      이것을 통해 마운트 시점에만 호출 되는 것을 보장할 수 있게 된다.
  
      그런데 이것은 의존성 배열을 다음과 같이 []로 비워두면 컴포넌트가 마운트 될 때만 한번 호출되고 이후 렌더링 사이에서는 호출되지 않는다.
      하지만 현재 작성한 방식과 같이 dispatch를 의존성 배열에 포함하는 것이 권장되는데 이는 eslint와 같은 린트 도구의 exhaustive-deps 규칙을 위반하기 때문이다.
      이 규칙은 useEffect 안에서 사용된 컴포넌트 스코프의 모든 변수나 함수를 의존성 배열에 포함하도록 권장하여 잠재적인 버그를 방지하도록 돕는다.
    */


    if (status === 'loading') return <p>로딩 중...</p>;
    if (status === 'failed') return <p>불러오기 실패</p>;

    return (
        <div>
            <h1>상품 목록</h1>
            <ul>
                {items.map((product) => (
                    <li key={product.id}>
                        {product.name} - ₩{product.price}
                        <button onClick={() => dispatch(addToCart({ product, user }))}>
                            장바구니 담기
                        </button>
                    </li>
                ))}
            </ul>
            <Link href="/cart">
                <button>장바구니로 이동</button>
            </Link>
        </div>
    );
}