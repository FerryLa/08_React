import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>

      <h2>chap01 basic Redux</h2>
      <ul>
        <li>
          <Link href="/chap01">basicRedux</Link>
        </li>
      </ul>
      <h2>chap02 combineReducers</h2>
      <ul>
        <li>
          <Link href="/chap02">combineReducers</Link>
        </li>
      </ul>
      <h2>chap03 Redux toolkit</h2>
      <ul>
        <li>
          <Link href="/chap03">Redux toolkit</Link>
        </li>
      </ul>
    </div>
  );
}
