// npm install react-redux @reduxjs/toolkit
// npm install axios

'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function HomePage() {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <div>
      <h1>안녕하세요, {user.name}님!</h1>
      <Link href="/products">
        <button>상품 목록 보기</button>
      </Link>
      <Link href="/cart">
        <button>장바구니 보기</button>
      </Link>
      <Link href="/orders">
        <button>주문 목록 보기</button>
      </Link>
    </div>
  );
}
