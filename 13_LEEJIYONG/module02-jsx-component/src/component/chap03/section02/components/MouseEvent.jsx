"use client";

export default function MouseEvent() {
  // 마우스 이벤트 핸들러
  const handleMouseOver = (e) => {
    console.log(`마우스가 오버되었습니다.`);
    e.target.style.backgroundColor = "#f0f0f0";
  };

  const handleMouseOut = (e) => {
    console.log(`마우스가 떠났습니다.`);
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>마우스 이벤트(onMouseOver, onMouseOut)</h3>
        <div
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          마우스를 올려보세요.
        </div>
      </div>
    </>
  );
}
