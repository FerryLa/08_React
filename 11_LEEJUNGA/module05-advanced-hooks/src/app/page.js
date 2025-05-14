import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Chap01</h1>
      <ul>
        <li>
          <Link href="/chap01/section01">useTransition</Link>
        </li>
        <li>
          <Link href="/chap01/section02">UseDeferredValueConcept</Link>
        </li>
        <li>
          <Link href="/chap01/section03">UseId</Link>
        </li>
      </ul>

      <h1>Chap02</h1>
      <ul>
        <li>
          <Link href="/chap02/section01">UseFetch</Link>
        </li>
        <li>
          <Link href="/chap02/section02">UseLocalStorage</Link>
        </li>
        <li>
          <Link href="/chap02/section03">UseFormValidation</Link>
        </li>
      </ul>
    </>
  );
}
