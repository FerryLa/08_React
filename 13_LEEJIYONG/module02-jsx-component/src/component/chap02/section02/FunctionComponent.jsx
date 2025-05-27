/*
기본 함수형 컴포넌트 작성

함수형 컴포넌트는 React에서 UI를 구성하는 가장 기본적인 방법이다.
JavaScript 함수를 사용하여 React 엘리먼트를 반환하는 간단한 형태를 가진다.

함수형 컴포넌트의 특징:
1. JavaScript 함수로 정의
2. props를 인자로 받음
3. JSX를 반환
4. 상태(state)와 생명주기 기능은 Hooks를 통해 사용

기본 문법:
function ComponentName(props) {
  return <div>컴포넌트 내용</div>;
}

또는 화살표 함수 문법:
const ComponentName = (props) => {
  return <div>컴포넌트 내용</div>;
};

props는 컴포넌트에 전달되는 데이터로, 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달하는 방법이다.
*/

import GreetingWithDefault from "./components/GreetingWithDefault";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";

export default function FunctionComponent() {
  return (
    <div>
      <h1>기본 함수형 컴포넌트 작성</h1>
      <section>
        <h2>함수형 컴포넌트 정의</h2>
        <p>
          <strong>함수형 컴포넌트</strong>는 props를 입력받아 React 앨리먼트를
          반환하는 JavaScript함수이다. 함수형 컴포넌트는 간결하고 직관적이며,
          최신 React개발의 중심이 되는 방식이다.
        </p>

        <div>
          <h3>함수형 컴포넌트의 기본구조</h3>
          <pre>
            {`
              // 기본 함수 선언 방식
              function Greeting(props) {
                  return <h1>Hello, {props.name}</h1>;
              }
              
              // 화살표 함수 방식
              const Greeting = (props) => {
                  return <h1>Hello, {props.name}</h1>;
              };
              
              // 구조 분해 할당 사용
              function Greeting({ name, age }) {
                  return (
                  <div>
                      <h1>Hello, {name}</h1>
                      <p>Age: {age}</p>
                  </div>
                  );
              }`}
          </pre>
        </div>
      </section>

      <hr />

      <section>
        <h2>props 사용하기</h2>
        <p>
          <strong>props</strong>(properties의 줄임말)는 컴포넌트에 전달되는
          데이터이다. 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때
          사용한다. props는 읽기 전용(immutable)이며, 컴포넌트 내부에서 수정할
          수 없다.
        </p>

        <div>
          <h3>props 사용 예제</h3>
          <pre>
            {`
            // 컴포넌트 정의
            function UserProfile(props) {
                return (
                <div>
                    <h2>{props.name}</h2>
                    <p>직업: {props.job}</p>
                    <p>나이: {props.age}</p>
                </div>
                );
            }

            // 컴포넌트 사용
            <UserProfile name="홍길동" job="개발자" age={30} />
            `}
          </pre>
        </div>
        {/* 실제 props 사용 */}
        <h3>실제 props 예제</h3>
        <UserProfile name="홍길동" job="개발자" age={30} />
        <UserProfile name="신사임당" job="개발자" age={40} />
        <UserProfile name="이순신" job="장군" age={20} />
      </section>

      <hr />

      <section>
        <h2>기본 props 값 설정</h2>
        <p>
          컴포넌트에 props가 전달되지 않았을 때 사용할 기본값을 설정할 수 있다.
          이를 통해 컴포넌트를 더 견고하게 만들 수 있다.
        </p>

        <div>
          <h3>기본 props 설정 방법</h3>
          <pre>
            {`
            // 방법 1: 함수 매개변수에서 기본값 설정
            function Greeting({ name = "Guest" }) {
                return <h1>Hello, {name}</h1>;
            }
            
            // 방법 2: defaultProps 사용 (19버전에서는 안됨)
            function Greeting(props) {
                return <h1>Hello, {props.name}</h1>;
            }
            
            Greeting.defaultProps = {
                name: "Guest"
            };
            `}
          </pre>
        </div>

        {/* 기본값 예제 */}
        <div>
          <h3>기본 props 예제</h3>
          <GreetingWithDefault />
          <GreetingWithDefault name="홍길동" />
        </div>
      </section>

      <hr />

      <section>
        <h2>children props</h2>
        <p>
          <strong>children</strong>은 특별한 prop으로, 컴포넌트의 여는 태그와
          닫는 태그 사이에 있는 내용을 가리킨다. 이를 통해 컴포넌트를 더
          유연하게 구성할 수 있다.
        </p>

        <div>
          <h3>children props 예제</h3>
          <pre>
            {`
            function Card({ title, children }) {
                return (
                <div className="card">
                    <h3>{title}</h3>
                    <div className="card-content">
                    {children}
                    </div>
                </div>
                );
            }
            
            // 사용 예
            <Card title="알림">
                <p>이것은 카드 내용입니다.</p>
                <button>확인</button>
            </Card>
            `}
          </pre>
        </div>

        <div>
          <h3>children 예제</h3>
          <Card title="알림">
            <p>이 내용은 Card 컴포넌트의 children으로 전달된다.</p>
            <button>확인</button>
          </Card>
        </div>
      </section>
    </div>
  );
}
