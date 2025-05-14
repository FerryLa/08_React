"use client";

import { useState, useEffect } from "react";

export default function AfterStateUpdateExample() {
  const [isOn, setIsOn] = useState(false);

  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOn ? "green" : "red",
    transition: "2s",
    marginBottom: "1rem",
  };

  const handleWrongCLick = () => {
    setIsOn(!isOn);
    console.log(isOn ? "불이 켜졌습니다" : "불이 꺼졌습니다.");

    /*
      setIsOn(!isOn): 처음에 불이 꺼져있는 상태에서 불좀 켜줘!
      console.log()는 부탁만 듣고 결과를 기다리지않고 바로 말해버림
    */
  };

  // useEffect hook사용
  useEffect(() => {
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다.");
  }, [isOn]);

  return (
    <>
      <div style={style}></div>

      <button onClick={handleWrongCLick}>😡잘못된 처리</button>
      <button onClick={() => setIsOn((prev) => !prev)}>👌올바른 처리</button>
    </>
  );
}
