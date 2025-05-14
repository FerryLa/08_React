import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>라우팅 실습 메인</h1>
      <ul>
        <li>
          <Link href="/router">/RouterComponent</Link>
        </li>
        <li>
          <Link href="/nested">/Nested</Link>
        </li>
        <li>
          <Link href="/parallel">/Parallel</Link>
        </li>
        <li>
          <Link href="/error">/Error</Link>
        </li>
         <li>
          <Link href="/loading">/Loading</Link>
        </li>
      </ul>
    </div>
  );
}
