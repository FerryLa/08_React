async function LoadingPage() {
  // 3초 지연을 위한 함수
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 3초 대기
  await delay(3000);

  return (
    <div>
      <h1>로딩로딩로딩 완료</h1>
    </div>
  );
}

export default LoadingPage;
