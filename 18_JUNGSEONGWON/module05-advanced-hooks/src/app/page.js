import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Advance Hooks</h1>

      <h1>Chap01</h1>

      <ul>
        <li>
          <Link href="/chap01/section01">
            <p>UseTrasitionConcept</p>
          </Link>
        </li>
        <li>
          <Link href="/chap01/section02">
            <p>UseDeferredValueConcept</p>
          </Link>
        </li>
        <li>
          <Link href="/chap01/section03">
            <p>UseIdExample</p>
          </Link>
        </li>
      </ul>
      <h1>chap02</h1>
      <ul>
        <li>
          <Link href="/chap02/section01">UseFectch</Link>
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
