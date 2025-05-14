"use client";
import { useState } from "react";

function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // 오류 메세지 업데이트
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };
  return { values, errors, handleChange };
}

function validate(name, value) {
  if (name === "email" && !value.includes("@")) {
    return "이메일 형식이 아닙니다.";
  }
  if (name === "password" && value.length < 6) {
    return "비밀번호는 6자 이상이어야 합니다.";
  }
  return "";
}

export default function UseFormValidationExample() {
  const { values, errors, handleChange } = useFormValidation(
    { email: "", password: "" },
    validate
  );
  return (
    <div>
      <h2>useFormValidation Hook 예제</h2>
      <input
        name="email"
        placeholder="이메일"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        name="password"
        placeholder="비밀번호"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
    </div>
  );
}
