'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/slice/cartSlice';
import Link from 'next/link';


export default function CartPage() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    /*
      reduce
      javascript 배열의 표준 내장 메서드로 배열의 모든 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환한다
      reduce 함수는 두 개의 매개변수를 받는다.
      첫 번째 매개변수는 리듀서 함수이다.
      두 번째 매개변수는 초기값이다.
      
      현재를 기준으로 
      첫 번째 콜백함수는 
      (sum(누적값), item(현재요소)) => sum + item.price * item.quantity 
      여기서 초기 실행시 누적값은 없기 때문에 두 번째 매개변수인 초기값인 0이 누적값으로 사용된다.
    */
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>장바구니</h1>
            {cart.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} ({item.quantity}개, {item.userName}) - ₩{item.price * item.quantity}
                            <button onClick={() => dispatch(removeFromCart(item.id))}>제거</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>총합: ₩{total}</p>
            <button onClick={() => dispatch(clearCart())}>장바구니 비우기</button>
            <Link href="/products">
                <button>상품 목록으로 돌아가기</button>
            </Link>
        </div>
    );
}