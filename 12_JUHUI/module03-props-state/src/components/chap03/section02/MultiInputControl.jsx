"use client";

import { useState } from "react";

export default function MultiInputControl() {
  const [formDate, setFormDate] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormDate({
      ...formDate,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormDate({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <h2>다중 입력값 제어</h2>
      <input
        type="text"
        name="firstName"
        value={formDate.firstName}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <input
        type="text"
        name="lastName"
        value={formDate.lastName}
        onChange={handleChange}
        placeholder="성을 입력하세요"
      />

      <hr />
      <p>
        입력한 이름 {formDate.firstName} {formDate.lastName}{" "}
      </p>
      <button onClick={handleReset}>입력 초기화</button>
    </div>
  );
}
