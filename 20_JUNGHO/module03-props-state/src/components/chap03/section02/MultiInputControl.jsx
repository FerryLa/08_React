"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function MultiInputControl() {
  const [formDate, setFormDate] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate({
      ...formDate,
      [name]: value,
    });
  };

  const handelReset = () => {
    setFormDate({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      <h2>다중 입력값 제어</h2>
      <Input
        type={"text"}
        name="firstName"
        value={formDate.firstName}
        className={"mb-5"}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <Input
        type={"text"}
        name="lastName"
        onChange={handleChange}
        value={formDate.lastName}
        placeholder="성을 입력하세요"
      />
      <hr />
      <p>
        입력한 이름 {formDate.firstName} {formDate.lastName}
      </p>
      <Button onClick={handelReset}>초기화</Button>
    </>
  );
}
