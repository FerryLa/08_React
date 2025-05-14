import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>store 학습</h1>

      <h2>chap01 - context api 필요성</h2>
      <ul>
        <li>
          <Link href='/chap01/section01'>props driling</Link>
        </li>
        <li>
          <Link href='/chap01/section02'>context api</Link>
        </li>
      </ul>

      <h3>Chap02 - context api 사용법</h3>
      <ul>
        <li>
          <Link href='/chap02'>context api 사용법</Link>
        </li>
      </ul>

      <h3>chap03 - context api 사용법</h3>
      <ul>
        <li>
          <Link href='/chap03'>context api 사용법 2</Link>
        </li>
      </ul>
    </>
  );
}
