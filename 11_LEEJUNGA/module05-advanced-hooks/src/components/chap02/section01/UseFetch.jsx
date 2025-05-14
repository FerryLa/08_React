/*
  [custom hook 무엇인가?]
  - React의 기본 훅(useState, useEffect, useContext, useRef 등)이나 다른 커스텀 훅을 사용하여
    컴포넌트 간에 상태 관련 로직을 재사용하기 위해 만든 JavaScript 함수이다.
  - 일반 함수와 구분하기 위해 함수 이름은 반드시 'use'로 시작해야 한다.
  - UI 요소를 직접 반환하지는 않으며, 주로 상태 값, 상태를 변경하는 함수, 또는 특정 로직의 결과물 등을 반환한다.

  [custom hook의 필요성]
  - 로직 재사용: 여러 컴포넌트에서 동일한 상태 관리(예: 데이터 가져오기 로딩/에러 처리), 이벤트 구독/해지, 타이머 설정 등의 로직이 필요할 때, 
    코드를 복제하는 대신 하나의 커스텀 훅으로 만들어 효율적으로 재사용할 수 있다.
  - 관심사 분리: 복잡한 상태 관리 로직이나 부수 효과(side effect) 로직을 컴포넌트의 UI 렌더링 로직으로부터 분리하여 
    컴포넌트 코드를 더 간결하고 읽기 쉽게 만든다
  - 로직 공유의 유연성: 기존의 렌더 프로퍼티(Render Props)나 고차 컴포넌트(Higher-Order Components, HOC) 
    같은 패턴보다 더 유연하게 로직을 공유할 수 있으며, 컴포넌트 트리에 불필요한 중첩(Wrapper Hell)을 만들지 않는다.


  [구조적 특징]
  - 이름 규칙: 함수의 이름은 반드시 소문자 'use'로 시작해야 한다. 
      (예: useFetchData, useLocalStorage, useToggle) React 린트(lint) 규칙 등이
      이를 통해 해당 함수가 훅임을 인식하고 '훅의 규칙'을 강제한다.

  - 다른 훅 사용: 커스텀 훅 내부에서는 반드시 하나 이상의 React 기본 훅 또는 다른 커스텀 훅을 호출해야 한다. 
      (예: 커스텀 훅 안에서 useState, useEffect 사용) 만약 훅을 호출하지 않는다면 그것은 그냥 일반 JavaScript 함수로 취급된다.

  - 훅의 규칙 준수 : 커스텀 훅 내부에서 다른 훅을 사용하므로, 커스텀 훅 자체도 '훅의 규칙'을 따라야 한다. 
      즉, 커스텀 훅은 React 함수 컴포넌트의 최상위 레벨에서만 호출하거나, 다른 커스텀 훅 내부의 최상위 레벨에서만 호출해야 한다. 
      (조건문, 반복문, 중첩된 함수 안에서 훅 호출 금지)

  - 반환 값: 훅이 관리하는 상태, 상태를 조작하는 함수, 특정 로직의 결과값 등 필요한 데이터를 배열이나 객체 형태로 반환한다. 
      반환 값의 구조는 훅의 목적에 따라 자유롭게 정의할 수 있다.
*/

/*
  custom hook

  useFetch 커스텀 훅 : url 파라미터를 받아 데이터를 조회하고 조회의 상태를 반환하는 훅
*/

"use client";

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("네트워크 오류 발생");
        return res.json();
      })
      .then(setData) // setData의 매개변수로 전달된 데이터를 사용하여 상태 업데이트
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default function UseFetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <div>
      <h2>useFetch hook 예제</h2>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>에러 발생: {error.message}</p>}
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
