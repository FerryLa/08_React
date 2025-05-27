// props란 컴포넌트에 전달되는 데이터
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때 사용한다.

export default function UserProfile({ name, job, age }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <h3>{name}</h3>
      <p>직업 : {job}</p>
      <p>나이 : {age}세</p>
    </div>
  );
}
