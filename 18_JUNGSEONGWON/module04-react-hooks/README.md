## React 기본 Hooks와 생명주기 흐름 (CSR 기준)

---

## React Hooks 기초 이해

### Hooks란?

Hooks는 React 16.8부터 도입된 함수다. 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 쓸 수 있게 한다. 이전에는 이런 기능을 쓰려면 클래스 컴포넌트를 사용해야 했다. Hooks 덕분에 함수형 컴포넌트만으로도 React의 다양한 기능을 활용할 수 있다.

#### Hooks 등장 배경

- **복잡한 컴포넌트 관리 어려움**: 클래스 컴포넌트는 규모가 커질수록 로직이 복잡해지고, 관련 코드가 생명주기 메서드 전체에 분산되어 유지보수가 어렵다.
- **재사용 가능한 로직의 부재**: 클래스 컴포넌트에서는 상태 로직을 재사용하려면 HOC(고차 컴포넌트)나 Render Props 패턴을 써야 했다. 이 방식은 컴포넌트 중첩이 심해지는 '래퍼 지옥' 문제를 일으킨다.
  - HOC 컴포넌트를 인자로 받아서 새로운 컴포넌트를 반환하는 함수수
- **클래스의 진입 장벽**: JavaScript 클래스는 this 바인딩 등 초보자에게 진입 장벽이 높다.
  - hooks는 클래스형 컴포넌트의 객체 속성으로 사용했었다.

#### 주요 내장 Hooks

| Hook        | 목적                        | 기본 사용법                                                   |
| ----------- | --------------------------- | ------------------------------------------------------------- |
| useState    | 컴포넌트에 로컬 상태 추가   | `const [state, setState] = useState(initialValue)`            |
| useEffect   | 부수 효과(side effect) 수행 | `useEffect(() => { /* 코드 */ }, [deps])`                     |
| useContext  | Context API 사용            | `const value = useContext(Context)`                           |
| useReducer  | 복잡한 상태 로직 관리       | `const [state, dispatch] = useReducer(reducer, initialState)` |
| useCallback | 함수 메모이제이션           | `const memoizedCallback = useCallback(fn, [deps])`            |
| useMemo     | 값 메모이제이션             | `const memoizedValue = useMemo(() => fn(), [deps])`           |
| useRef      | DOM 참조/값 유지            | `const ref = useRef(initialValue)`                            |

#### Hooks의 장점

- **관심사 분리**: 상태 관련 로직을 기능별로 묶어 코드 가독성과 유지보수성이 높아진다.
- **상태 로직 재사용**: 커스텀 Hooks로 컴포넌트 간 상태 로직을 쉽게 공유한다.
- **함수형 프로그래밍**: 클래스를 쓰지 않고도 React의 모든 기능을 쓸 수 있다.
- **타입스크립트 호환성**: 함수형 컴포넌트와 Hooks는 TypeScript와 자연스럽게 통합된다.

#### react lifeCycle

<img src="https://velog.velcdn.com/images/hsk10271/post/e58367a1-9bcb-4639-a2a5-a96920663fd1/image.png"/>

1.  **Mounting (마운팅: 컴포넌트가 생성되고 DOM에 삽입되는 단계)**

    - **컴포넌트 함수 첫 실행 시:**
      - `useState`: 상태 변수 및 업데이트 함수 초기 선언. 초기값 설정.
      - `useRef`: 변경되어도 리렌더링을 유발하지 않는 참조 객체 생성 및 초기값 설정.
      - `useMemo`, `useCallback`: 초기 렌더링 시점에 계산되거나 생성될 값을 메모이제이션.
    - **컴포넌트가 DOM에 마운트된 후 (브라우저가 화면을 그린 후):**

      - `useEffect` (두 번째 인자: 빈 배열 `[]`): 마운트 시점에만 실행되어야 하는 부수 효과(Side Effect) 처리 (예: 데이터 가져오기, 구독 설정, 이벤트 리스너 등록 등). 클래스 컴포넌트의 `componentDidMount`와 유사한 역할을 한다. 비동기적으로 실행된된다.

    - **DOM이 마운트되고 화면에 반영되기 직전 동기적으로:**
      - `useLayoutEffect` (두 번째 인자: 빈 배열 `[]`): DOM의 레이아웃을 읽거나 DOM을 측정하여 동기적으로 처리해야 하는 로직 (예: 스크롤 위치 파악, 애니메이션을 위한 DOM 초기화 등). `useEffect`보다 먼저, 그리고 동기적으로 실행된다.

2.  **Updating (업데이트: Props나 State가 변경되어 컴포넌트가 리렌더링되는 단계)**

    - **Props 또는 State 변경 감지 시:**
      - React가 컴포넌트 함수를 다시 실행한다.
      - `useState`: 변경된 최신 상태 값을 반환한다.
      - `useRef`: 마운트 시 생성된 동일한 참조 객체를 반환한다.
      - `useMemo`, `useCallback`: 의존성 배열의 값이 변경되었을 경우에만 해당 값이나 함수를 새로 계산/생성한다. 의존성이 변경되지 않았다면 이전 값을 재사용한다.
    - **이전 Effect의 클린업 함수 실행 (다음 Effect 실행 전):**
      - `useEffect` 또는 `useLayoutEffect`의 클린업 함수가 실행되어 이전 렌더링에서 발생시킨 부수 효과를 정리한다 (예: 이전 타이머 해제, 이전 이벤트 리스너 제거 등). (마운트 시점의 effect에 대한 클린업은 언마운트 시 실행)
    - **컴포넌트 리렌더링 및 DOM 업데이트 후:**
      - `useEffect` (두 번째 인자: 의존성 배열): 의존성 배열의 값이 이전 렌더링과 달라졌을 경우에 실행된다. 변경에 따른 부수 효과 처리. 클래스 컴포넌트의 `componentDidUpdate`와 유사하다. 비동기적으로 실행된다.
    - **DOM 업데이트 직후, 화면에 반영 전 동기적으로:**
      - `useLayoutEffect` (두 번째 인자: 의존성 배열): 의존성 배열의 값이 이전 렌더링과 달라졌을 경우에 실행된다. DOM 업데이트 직후 동기적인 처리가 필요할 때 사용한다다.

3.  **Unmounting (언마운팅: 컴포넌트가 DOM에서 제거되는 단계)**
    - **컴포넌트가 DOM에서 제거되기 직전:**
      - `useEffect` 또는 `useLayoutEffect`의 **클린업 함수**가 실행된다. 컴포넌트가 사라질 때 정리해야 하는 모든 부수 효과(구독 해지, 타이머 해제, 등록한 이벤트 리스너 제거 등)를 처리하여 메모리 누수를 방지한다. 클래스 컴포넌트의 `componentWillUnmount`와 유사한 역할을 한다.

---

## Next.js 프로젝트에서 Hooks가 필요한 이유

Next.js는 React 기반 프레임워크다. 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우트 등 다양한 기능을 제공한다. Next.js에서도 React Hooks는 필수적이다.

### 1. 클라이언트 사이드 상태 관리

Next.js는 SSR을 지원하지만, 초기 로드 이후 상호작용은 클라이언트에서 일어난다. 이때 Hooks로 상태를 효율적으로 관리한다.

```jsx
"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 2. 컴포넌트 구분과 Hooks의 역할

Next.js 13부터 앱 라우터(App Router)와 서버 컴포넌트가 도입됐다. 컴포넌트는 두 가지로 나뉜다.

| 컴포넌트 유형       | Hooks 사용 | 특징                                               |
| ------------------- | ---------- | -------------------------------------------------- |
| 서버 컴포넌트       | ❌         | 서버에서 렌더링, DB 접근 가능, 번들 크기 영향 없음 |
| 클라이언트 컴포넌트 | ✅         | 브라우저에서 실행, 사용자 상호작용 처리            |

서버 컴포넌트에서는 useState, useEffect 등 Hooks를 쓸 수 없고 클라이언트 컴포넌트에서만 사용한다.

```jsx
// 서버 컴포넌트 (Hooks 사용 불가)
import ClientComponent from './client-component';
export default function Page() {
  return (
    <div>
      <h1>서버 컴포넌트</h1>
      <ClientComponent />
    </div>
  );
}

// 클라이언트 컴포넌트 (Hooks 사용 가능)
'use client';
import { useState, useEffect } from 'react';

export default function ClientComponent() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>클라이언트 컴포넌트</h2>
      {data ? <p>{data.message}</p> : <p>로딩 중...</p>}
    </div>
  );
}
```

### 3. 데이터 페칭과 상태 동기화

서버에서 데이터를 미리 가져올 수 있지만, 클라이언트에서 실시간으로 데이터를 가져오거나 업데이트할 때 Hooks로 상태를 관리한다.

```jsx
"use client";

import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/${userId}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("사용자 데이터를 불러오는 데 실패.", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  if (loading) return <div>로딩 중...</div>;
  if (!user) return <div>사용자를 찾을 수 없음</div>;
  return <div>안녕하세요, {user.name}님!</div>;
}
```

### 4. 라우팅 및 네비게이션 관리

Next.js의 라우팅 시스템과 Hooks를 함께 써서 프로그래매틱 네비게이션과 라우팅 상태를 관리한다.

```jsx
"use client";
import { useRouter } from "next/navigation";
function NavigationExample() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return <button onClick={handleNavigation}>대시보드로 이동</button>;
}
```

### 5. 서버/클라이언트 컴포넌트 간 상호작용

Next.js의 하이브리드 렌더링 모델에서는 서버 컴포넌트와 클라이언트 컴포넌트가 함께 동작한다. 서버에서 데이터를 받아 클라이언트 컴포넌트로 props로 전달하고, 클라이언트에서는 Hooks로 상태를 관리한다.

```jsx
// 서버 컴포넌트
import { getServerData } from './data-service';
import ClientInteractive from './client-interactive';

export default async function Page() {
  const initialData = await getServerData();
  return (
    <div>
      <h1>서버에서 렌더링된 데이터</h1>
      <ClientInteractive initialData={initialData} />
    </div>
  );
}

// 클라이언트 컴포넌트
'use client';
import { useState } from 'react';

export default function ClientInteractive({ initialData }) {

  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    // 데이터 업데이트 로직
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          {/* 수정 폼 */}
          <button type="submit">저장</button>
        </form>
      ) : (
        <>
          <div>{data.title}</div>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
    </div>
  );
}
```

### 6. 커스텀 Hooks로 반복 로직 추출

커스텀 Hooks를 만들어 반복되는 로직을 추출하고 재사용한다. 코드 가독성과 유지보수성이 높아진다.

```jsx
// hooks/useLocalStorage.js
"use client";
import { useState } from "react";

// 로컬 스토리지(localStorage)와 React 상태를 연동해서
// 컴포넌트의 상태를 브라우저에 저장하고 새로고침해도 값이 유지된다.
function useLocalStorage(key, initialValue) {
  // localstorage에 값을 초기화 하는 함수
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 상태를 바꿀 때 localStorage에도 값을 저장한다.
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
export default useLocalStorage;
```

```jsx
// components/theme-toggle.js
"use client";
import useLocalStorage from "../hooks/useLocalStorage";

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>현재 테마: {theme}</button>;
}
```

---

## Next.js에서 Hooks 사용 시 주의사항

- **서버/클라이언트 컴포넌트 구분**: Next.js 13 이상에서는 모든 컴포넌트가 기본적으로 서버 컴포넌트다. Hooks를 쓰려면 'use client' 지시어를 꼭 추가한다.
- **하이드레이션 불일치 방지**: 서버와 클라이언트 렌더링 차이로 하이드레이션 불일치가 생길 수 있다. localStorage, window 등 브라우저 API는 조건부로 사용한다.
- **렌더링 성능 최적화**: useMemo, useCallback을 적절히 써서 불필요한 렌더링을 막는다.
- **서버 컴포넌트 데이터 흐름**: 서버 컴포넌트에서 가져온 데이터는 props로 클라이언트 컴포넌트에 전달하고, 상태 변경은 클라이언트에서 Hooks로 관리한다.

---

## 결론

Next.js에서 React Hooks는 클라이언트 측 상호작용을 관리하는 핵심 도구다. SSR의 성능 이점과 클라이언트 상호작용의 유연성을 모두 살리려면, 하이브리드 렌더링 모델에서 적절한 위치에 Hooks를 배치해야 한다. 특히 클라이언트 컴포넌트에서 상태 관리, 사용자 상호작용, 데이터 페칭 및 업데이트를 처리할 때 Hooks의 역할이 필수적이다.