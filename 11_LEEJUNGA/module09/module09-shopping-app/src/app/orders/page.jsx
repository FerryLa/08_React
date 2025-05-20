// src/app/orders/page.jsx
'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../store/slice/orderSlice';
import Link from 'next/link';

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.orders);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch({ type: 'orders/fetchOrdersSaga' });
  }, [dispatch]);

  const handleSubmit = (e) => {
    // 폼 발생하는 페이지 이동 이벤트를 막음
    e.preventDefault();
    dispatch(createOrder({ productId, quantity, status: 'pending' }));
    // 입력 필드 초기화
    setProductId('');
    setQuantity(1);
  };

  if (status === 'loading') return <p>주문 불러오는 중...</p>;
  if (status === 'failed') return <p>주문 불러오기 실패</p>;

  return (
    <div>
      <h1>주문 목록</h1>
      <ul>
        {items.map((order) => (
          <li key={order.id}>
            상품 ID: {order.productId}, 수량: {order.quantity}, 상태: {order.status}
          </li>
        ))}
      </ul>

      <h2>새 주문 추가</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="상품 ID"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">주문 추가</button>
      </form>

      <Link href="/products">상품 목록</Link>
    </div>
  );
}
