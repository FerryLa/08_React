export default function SimpleComponents() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      <h2>아주 간단한 컴포넌트</h2>
      <p>현재 시간 : {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
