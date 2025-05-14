import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>react hooks</h1>

      <h3>chap01</h3>
      <ul>
        <li>
          <Link href="/chap01/section01">useEffectBasic</Link>
        </li>
        <li>
          <Link href="/chap01/section02">useEffectDependency</Link>
        </li>
        <li>
          <Link href="/chap01/section03">useEffectCleanup</Link>
        </li>
        <li>
          <Link href="/chap01/section04">useEffectProblem</Link>
        </li>
      </ul>

      <h3>chap02</h3>
      <ul>
        <li>
          <Link href="/chap02/section01">useLayoutEffect</Link>
        </li>
        <li>
          <Link href="/chap02/section02">DomMesuare</Link>
        </li>
      </ul>

      <h3>chap03</h3>
      <ul>
        <li>
          <Link href="/chap03/section01">UseRefDomAccess</Link>
        </li>
        <li>
          <Link href="/chap03/section02">UseRefValuekeep</Link>
        </li>
      </ul>

      <h3>chap04</h3>
      <ul>
        <li>
          <Link href="/chap04/section01">UseMemoExample</Link>
        </li>
        <li>
          <Link href="/chap04/section02">UseCallback</Link>
        </li>
      </ul>
    </>
  );
}
