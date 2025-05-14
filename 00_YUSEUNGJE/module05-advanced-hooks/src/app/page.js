import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Advance Hooks</h1>

      <h1>Chap01</h1>
      <ul>
        <li>
          <Link href='/chap01/section01'>
            <p>useTransition</p>
          </Link>
        </li>
        <li>
          <Link href='/chap01/section02'>
            <p>useDeferredValue</p>
          </Link>
        </li>
        <li>
          <Link href='/chap01/section03'>
            <p>useId</p>
          </Link>
        </li>
      </ul>

      <h1>chap02</h1>
      <ul>
        <li>
          <Link href='/chap02/section01'>useFetch</Link>
        </li>
        <li>
          <Link href='/chap02/section02'>useLocalStorage</Link>
        </li>
        <li>
          <Link href='/chap02/section03'>useFormValidation</Link>
        </li>
      </ul>
    </>
  );
}
