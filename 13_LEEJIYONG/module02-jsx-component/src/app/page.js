import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>JSX_component</h1>
      <h3>chap01</h3>
      <ul>
        <li>
          <Link href="/chap01/section01">JSXIntro</Link>
        </li>
        <li>
          <Link href="/chap01/section02">JSXBasicSyntax</Link>
        </li>
        <li>
          <Link href="/chap01/section03">JSXRules</Link>
        </li>
      </ul>

      <h3>chap02</h3>
      <ul>
        <li>
          <Link href="/chap02/section01">ComponentIntro</Link>
        </li>
        <li>
          <Link href="/chap02/section02">FunctionComponent</Link>
        </li>
      </ul>

      <h3>chap03</h3>
      <ul>
        <li>
          <Link href="/chap03/section01">BasicEventHandling</Link>
        </li>
        <li>
          <Link href="/chap03/section02">EventTypes</Link>
        </li>
      </ul>
    </>
  );
}
