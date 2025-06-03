export default function GreetingWithDefault({ name = "손님" }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "5px",
        margin: "5px, 0",
      }}
    >
      <h3>안녕하세요 {name}님! </h3>
    </div>
  );
}
