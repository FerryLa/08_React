export default function ErrorPage() {
  throw new Error("에러 발생");

  return (
    <div>
      <h1>에러 발생</h1>
    </div>
  );
}
