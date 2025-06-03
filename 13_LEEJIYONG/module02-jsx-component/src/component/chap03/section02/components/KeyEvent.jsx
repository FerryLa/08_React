"use client";

export default function KeyEvent() {
  // 키보드 이벤트 핸들러
  const handleKeyDown = (e) => {
    console.log("눌린 키 : ", e.key);

    if (e.key === "Enter") {
      // alert("Enter 키를 누르셨습니다!!");
      const data = e.target.value;
      alert(data, "를 입력하셨습니다.");
      e.target.value = "";
    }
  };

  return (
    <>
      {/* 키보드 이벤트  */}
      <div>
        <h3>키보드 이벤트(onKeyDown)</h3>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Enter키를 눌러보세요"
        />
      </div>
    </>
  );
}
