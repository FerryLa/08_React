"use client";
import { useState } from "react";
export default function MultiInputControll() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
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
        value={formData.firstName}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="성을 입력하세요"
      />

      <hr />
      <p>
        입력한 이름 {formData.firstName} {formData.lastName}
      </p>
      <button onClick={handleReset}>입력 초기화</button>
    </div>
  );
}
