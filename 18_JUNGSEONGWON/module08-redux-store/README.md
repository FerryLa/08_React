# Redux 핵심 가이드: 개념부터 실전까지

## Redux란 무엇인가?

Redux는 JavaScript 애플리케이션의 예측 가능한 상태 관리를 위한 라이브러리다. 2015년 Dan Abramov와 Andrew Clark가 개발했으며, Facebook의 Flux 아키텍처에서 영감을 받아 독립적인 상태 관리 솔루션으로 발전했다.

### 핵심 개념

Redux의 핵심은 애플리케이션의 모든 상태를 단일 JavaScript 객체에 저장하고, 상태 변경을 제한적이고 예측 가능하게 만드는 것이다. 이는 애플리케이션의 복잡성을 줄이고, 상태 변화를 추적하기 쉽게 만든다.

```javascript
// Redux 스토어의 상태 예시
{
  user: {
    id: 'u-123',
    name: 'John Doe',
    isAuthenticated: true
  },
  posts: [
    { id: 'p-1', title: 'Redux 기초', content: '...' },
    { id: 'p-2', title: 'Redux 고급 패턴', content: '...' }
  ],
  ui: {
    theme: 'dark',
    sidebarOpen: false,
    activeModal: null
  }
}
```

### Flux 패턴 이해하기

Flux는 Facebook이 React와 함께 사용하기 위해 개발한 애플리케이션 아키텍처 패턴이다.

#### 주요 구성 요소

- **Dispatcher**: 모든 데이터 흐름을 관리하는 중앙 허브
- **Stores**: 애플리케이션 상태와 로직을 포함
- **Views**: React 컴포넌트로, 상태 변화에 따라 UI를 렌더링
- **Actions**: 사용자 상호작용 등으로 인한 이벤트를 설명하는 객체

#### 데이터 흐름

1. 사용자가 뷰와 상호작용
2. 뷰는 액션 생성자를 통해 액션을 생성
3. 액션은 디스패처를 통해 모든 스토어로 전달
4. 스토어는 액션에 따라 상태를 업데이트하고 변경 이벤트를 발생
5. 뷰는 스토어의 변경 이벤트를 구독하여 새로운 상태를 받아 UI를 업데이트

### 단방향 데이터 흐름의 장점

- **예측 가능성**: 데이터는 한 방향으로만 흐르므로 상태 변화를 추적하기 쉽다
- **디버깅 용이성**: 문제 발생 시 데이터 흐름을 따라가면 원인을 찾을 수 있다
- **유지보수성**: 애플리케이션이 커져도 데이터 흐름 패턴이 일관되어 유지보수가 쉽다
- **테스트 용이성**: 각 단계가 분리되어 있어 개별적으로 테스트하기 쉽다

```javascript
// Redux의 단방향 데이터 흐름 예시
// 1. 액션 정의
// 애플리케이션에서 발생할 수 있는 상태 변경의 유형을 문자열 상수로 정의한다
const ADD_TODO = "ADD_TODO";

// 2. 액션 생성자
// 액션 객체를 생성하는 함수로, 필요한 데이터를 payload로 포함시켜 반환한다
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text, completed: false },
  };
}

// 3. 리듀서
// 현재 상태와 전달받은 액션을 기반으로 새로운 상태를 생성하여 반환한다
function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}

// 4. 스토어에 디스패치
// 생성된 액션을 스토어에 전달하여 상태 변경을 요청한다
store.dispatch(addTodo("Redux 학습하기"));
```

## Redux가 필요한 이유

### React의 기본 상태 관리의 한계

React의 기본 상태 관리는 간단한 애플리케이션에서는 효과적이지만, 다음과 같은 한계가 있다:

- **Props Drilling**: 깊은 컴포넌트 트리에서 상태 전달이 복잡해진다
- **상태 분산**: 관련 상태가 여러 컴포넌트에 분산되어 일관성 유지가 어렵다
- **예측 불가능한 상태 변화**: 여러 컴포넌트에서 동일한 상태를 변경할 경우 디버깅이 복잡해진다

```jsx
// Props Drilling 문제 예시
function GrandParent() {
  const [user, setUser] = useState({ name: "John" });
  return <Parent user={user} setUser={setUser} />;
}

function Parent({ user, setUser }) {
  return <Child user={user} setUser={setUser} />;
}

function Child({ user, setUser }) {
  return (
    <button onClick={() => setUser({ ...user, name: "Jane" })}>
      Change to Jane
    </button>
  );
}
```

### Context API의 한계

Context API는 props drilling 문제를 해결하지만, 다음과 같은 한계가 있다:

- **성능 최적화의 어려움**: Context 변경 시 모든 구독 컴포넌트가 리렌더링된다
- **복잡한 상태 로직 관리**: Context는 상태 저장 메커니즘일 뿐, 상태 변경 로직 구조화가 어렵다
- **여러 Context 조합의 복잡성**: 여러 Context를 중첩하면 코드가 복잡해진다
- **미들웨어 지원 부재**: 비동기 작업이나 로깅 같은 부가 기능 추가가 어렵다

```js
// Context API 사용 예시
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({ name: "John" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='app'>
        <Header />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

// 깊이 중첩된 컴포넌트에서 직접 Context 사용
function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}의 프로필</h2>
      <button onClick={() => setUser({ ...user, name: "Jane" })}>
        Change to Jane
      </button>
    </div>
  );
}
```

```js
// 여러 Context 중첩 시 복잡성 증가 예시
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <CartContext.Provider value={cart}>
          <NotificationContext.Provider value={notifications}>
            <App />
          </NotificationContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
```

> 대규모 애플리케이션에서는 다음과 같은 상태 관리 문제가 흔히 발생한다:

- 상태 동기화: 여러 컴포넌트에서 동일한 데이터를 표시해야 할 때 일관성 유지
- 파생 상태 계산: 기존 상태에서 계산된 값을 효율적으로 관리
- 비동기 상태 처리: API 호출 등의 비동기 작업과 관련된 상태(로딩, 오류 등) 관리
- 상태 변경 추적: 디버깅을 위해 상태가 언제, 어떻게, 왜 변경되었는지 추적
- 상태 지속성: 페이지 새로고침이나 앱 재시작 시 상태 유지

- 이러한 문제들은 애플리케이션 규모가 커질수록 더욱 심각해지며, 일관된 패턴 없이는 코드베이스가 빠르게 복잡해질 수 있다.

### Redux가 제공하는 해결책

Redux는 이러한 문제들을 해결하기 위한 체계적인 접근 방식을 제공한다:

- 단일 상태 저장소: 애플리케이션의 모든 상태가 하나의 JavaScript 객체에 저장되어 일관성 보장
- 명확한 상태 변경 패턴: 상태 변경은 액션 객체와 리듀서 함수를 통해서만 이루어짐
- 예측 가능한 상태 흐름: 단방향 데이터 흐름으로 상태 변화 추적 용이
- 강력한 개발자 도구: Redux DevTools를 통한 시간 여행 디버깅, 액션 로깅 등
- 미들웨어 생태계: 비동기 작업, 로깅, 지속성 등을 위한 확장 가능한 미들웨어 시스템
- 테스트 용이성: 순수 함수 기반 설계로 단위 테스트가 간단해짐

```js
// Redux 사용 예시: 상태 변경의 명확한 추적
// 1. 초기 상태 정의
const initialState = { count: 0 };

// 2. 리듀서 함수 정의
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

// 3. 스토어 생성
const store = Redux.createStore(counterReducer);

// 4. 액션 디스패치
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "SET_COUNT", payload: 10 });

// 5. 현재 상태 확인
console.log(store.getState()); // { count: 10 }
```

## Redux의 핵심 구성 요소

### Store

스토어는 애플리케이션의 상태를 보관하는 객체다.

#### 주요 특징

- **단일 소스 오브 트루스**: 모든 상태를 한 곳에 저장
- **읽기 전용 상태**: 상태는 액션을 통해서만 변경 가능
- **순수 함수로 상태 변경**: 리듀서를 통해서만 상태 변경

```js
import { createStore } from "redux";
import rootReducer from "./reducers";

// 기본 스토어 생성
const store = createStore(rootReducer);

// 초기 상태와 함께 스토어 생성
const store = createStore(rootReducer, initialState);

// 미들웨어와 함께 스토어 생성
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
```

#### 스토어의 주요 메서드

- getState(): 현재 상태 트리를 반환
- dispatch(action): 상태 변경을 위해 액션을 디스패치
- subscribe(listener): 상태 변경을 구독
- replaceReducer(nextReducer): 현재 리듀서를 새 리듀서로 교체 (핫 리로딩 등에 사용)

### Action

**액션(Action)**은 애플리케이션에서 스토어로 보내는 정보 페이로드이다. <br/>
액션은 무엇이 일어났는지를 설명하는 일반 JavaScript 객체이다.

#### 액션의 구조

- type: 액션의 유형을 나타내는 문자열 (필수)
- 추가 데이터: 액션과 관련된 데이터 (선택적)

```javascript
// 기본 액션 예시
{
  type: 'ADD_TODO',
  text: 'Learn Redux'
}

// 표준 액션 구조 (Flux Standard Action)
{
  type: 'ADD_USER',
  payload: { id: 1, name: 'John Doe' },
  meta: { timestamp: 1620000000000 },
  error: false
}

// 에러 액션 예시
{
  type: 'FETCH_USER_FAILURE',
  payload: new Error('Network Error'),
  error: true
}
```

#### 액션 생성자(Action Creator)

액션 생성자는 액션 객체를 생성하는 함수이다. 코드 중복을 줄이고 액션 생성을 표준화.

```javascript
// 간단한 액션 생성자
function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: { text, completed: false },
  };
}

// 액션 타입을 상수로 정의 (권장 패턴)
const ADD_TODO = "ADD_TODO";

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text, completed: false },
  };
}

// 비동기 액션 생성자 (redux-thunk 사용)
function fetchUser(userId) {
  return async function (dispatch) {
    dispatch({ type: "FETCH_USER_REQUEST" });

    try {
      const response = await api.fetchUser(userId);
      dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_USER_FAILURE",
        payload: error,
        error: true,
      });
    }
  };
}
```

### Reducer: 상태 변환의 로직

리듀서(Reducer)는 현재 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수이다. <br/>
리듀서는 액션에 따라 어떻게 상태를 변경할지를 결정한다.

#### 리듀서의 특징

- 순수 함수(Pure Function): 동일한 입력에 항상 동일한 출력을 반환하며, 부수 효과가 없음
- 불변성(Immutability): 기존 상태를 직접 수정하지 않고 새로운 상태 객체를 반환
- 예측 가능성(Predictability): 상태 변화가 명확하고 추적 가능

```javascript
function todosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
```

> 리듀서 작성 시 주의사항:

- 상태 직접 수정 금지: state.count++ 대신 { ...state, count: state.count + 1 } 사용
- 부수 효과 발생 금지: API 호출, 타이머, 로깅 등은 리듀서 내에서 수행하지 않음
- 비결정적 연산 금지: Date.now(), Math.random() 등은 사용하지 않음
- 항상 기본값 처리: 초기 상태 및 알 수 없는 액션 타입에 대한 처리 필요

---

### Dispatch: 액션 전달 메커니즘

**디스패치(Dispatch)**는 액션을 스토어로 보내는 과정이다. store.dispatch(action)을 호출하면 Redux의 상태 업데이트 과정이 시작된다.

#### 디스패치 과정

- 애플리케이션에서 store.dispatch(action) 호출
- Redux 스토어가 현재 상태와 액션을 리듀서에 전달
- 리듀서가 새로운 상태를 계산하여 반환
- 스토어가 새로운 상태를 저장하고 구독자들에게 알림

```js
// 기본 디스패치 사용
store.dispatch({ type: "INCREMENT" });

// 액션 생성자 사용
store.dispatch(addTodo("Redux 학습하기"));

// React 컴포넌트에서 디스패치 사용 (react-redux의 useDispatch 훅 사용)
import { useDispatch } from "react-redux";

function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='할 일 입력'
      />
      <button type='submit'>추가</button>
    </form>
  );
}
```

### Subscribe: 상태 변화 감지

**구독(Subscribe)**은 Redux 스토어의 상태 변경을 감지하고 이에 반응하는 메커니즘이다. 구독 함수는 상태가 변경될 때마다 호출된다.

```js
// 기본적인 구독 사용
const unsubscribe = store.subscribe(() => {
  console.log("상태가 업데이트됨:", store.getState());
});

// 나중에 구독 해제
unsubscribe();

// React에서는 react-redux가 구독을 관리
// useSelector 훅을 사용하여 상태 선택 및 변경 감지
import { useSelector } from "react-redux";

function TodoList() {
  // Redux 상태의 todos 부분만 선택
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} - {todo.completed ? "완료" : "미완료"}
        </li>
      ))}
    </ul>
  );
}
```

#### Redux 데이터 흐름의 종합적 이해

Redux의 모든 구성 요소는 단방향 데이터 흐름 패턴에서 함께 작동한다.

> Redux 데이터 흐름 과정:

- 사용자 상호작용: 사용자가 UI와 상호작용하거나 이벤트가 발생
- 액션 생성: 해당 이벤트에 대응하는 액션 객체 생성
- 액션 디스패치: store.dispatch(action)를 통해 액션을 스토어로 전달
- 리듀서 실행: 스토어는 현재 상태와 액션을 리듀서에 전달
- 상태 업데이트: 리듀서가 반환한 새 상태로 스토어의 상태 업데이트
- 구독자 알림: 스토어는 등록된 모든 구독자에게 상태 변경 알림
- UI 업데이트: 구독자(대개 UI 컴포넌트)는 새 상태를 기반으로 UI 업데이트

```js
// Redux 데이터 흐름의 코드 예시
// 1. 스토어 생성
const store = createStore(reducer);

// 2. UI 구독 설정
store.subscribe(() => {
  const state = store.getState();
  updateUI(state);
});

// 3. 사용자 이벤트 처리 및 액션 디스패치
document.getElementById("increment-button").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

// 4. 리듀서에서 상태 업데이트 처리
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

// 5. UI 업데이트 함수
function updateUI(state) {
  document.getElementById("counter").textContent = state.count;
}
```

### 리덕스 구성하기

```bash
src/
├── actions/           # 액션 생성자 함수들
│   ├── types.js       # 액션 타입 상수
│   ├── userActions.js
│   ├── todoActions.js
│   └── uiActions.js
├── reducers/          # 리듀서 함수들
│   ├── index.js       # 루트 리듀서 (combineReducers 사용)
│   ├── userReducer.js
│   ├── todoReducer.js
│   └── uiReducer.js
├── store/             # 스토어 구성
│   ├── index.js       # 스토어 생성 및 미들웨어 설정
│   └── initialState.js
├── middlewares/       # 커스텀 미들웨어
│   ├── apiMiddleware.js
│   └── loggingMiddleware.js
├── selectors/         # 상태 선택 함수 (reselect 라이브러리 등)
│   ├── userSelectors.js
│   └── todoSelectors.js
└── components/        # React 컴포넌트
    └── ...
```
