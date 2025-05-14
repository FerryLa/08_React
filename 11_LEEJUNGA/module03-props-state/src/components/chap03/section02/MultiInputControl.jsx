"use client";

import { useState } from "react";

export default function MultiInputControl() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log("name:", name);
    console.log("value:", value);

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
        입력한 이름 {formData.firstName} {formData.lastName}{" "} 
      </p>
    </div>
  );
}
