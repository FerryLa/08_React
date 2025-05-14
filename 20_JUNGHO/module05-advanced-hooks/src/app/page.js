import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>React-Advanced-Hooks</h1>

      <hr />
      <h2>chap01</h2>
      <ul>
        <li>
          <Link href={"/chap01/section01"}>useTransition</Link>
        </li>
        <li>
          <Link href={"/chap01/section02"}>useDeferredValue</Link>
        </li>
        <li>
          <Link href={"/chap01/section03"}>useId</Link>
        </li>
      </ul>

      <hr />
      <h2>chap02</h2>
      <ul>
        <li>
          <Link href={"/chap02/section01"}>useFetch</Link>
        </li>
        <li>
          <Link href={"/chap02/section02"}>useLocalStorage</Link>
        </li>
        <li>
          <Link href={"/chap02/section03"}>useFromValidation</Link>
        </li>
      </ul>
    </>
  );
}
