/*
  [useFormValidation]
  - 폼 입력값의 유효성을 검사하고, 에러메시지를 반환하는 커스텀 hook


  기능
  - 입력값 추적
  - 유효성 검사 규칙 적용
  - 오류 메시지 저장 및 표시
*/

"use client";

import { useState } from "react";

function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //입력값 업데이트
    setValues((prev) => ({ ...prev, [name]: value }));

    // 오류 메시지 업데이트
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  return { values, errors, handleChange };
}

function validate(name, value) {
  if (name === "email" && !value.includes("@"))
    return "이메일 형식이 아닙니다.";
  if (name === "password" && value.length < 6)
    return "비밀번호는 6자 이상이어야 합니다.";
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
