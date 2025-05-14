import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Props and State</h1>
      <h2>Props</h2>
      <ul>
        <li>
          <Link href="/chap01/section01">Props</Link>
        </li>

        <li>
          <Link href="/chap01/section02">Using Props</Link>
        </li>
      </ul>

      <h1>State</h1>
      <ul>
        <li>
          <Link href="/chap02/section01">State</Link>
          {/* 경로 찾을 때 꼭 / 붙이기 */}
        </li>

        <li>
          <Link href="/chap02/section02">Child Update Parent State</Link>
        </li>
      </ul>

      <h1>Controlled Component</h1>
      <ul>
        <li>
          <Link href="/chap03/section01">Single Input</Link>
        </li>
        <li>
          <Link href="/chap03/section02">Multi Input</Link>
        </li>
      </ul>
    </div>
  );
}
