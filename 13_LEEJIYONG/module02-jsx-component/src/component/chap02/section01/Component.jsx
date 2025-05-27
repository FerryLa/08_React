/*
컴포넌트란 무엇인가?

컴포넌트(Component)는 UI를 구성하는 독립적이고 재사용 가능한 조각이다.
개념적으로 보면 JavaScript 함수와 유사하다. 입력(props)을 받아 화면에 나타낼 React 엘리먼트를 반환한다.

컴포넌트를 사용하는 이유:
1. 재사용성: 한 번 만든 컴포넌트는 여러 곳에서 재사용할 수 있다.
2. 유지보수: 코드를 논리적인 단위로 분리하여 관리하기 쉽게 만든다.
3. 관심사 분리: 각 컴포넌트는 특정 기능에만 집중할 수 있다.
4. 가독성: UI를 선언적으로 정의하여 코드의 가독성을 높인다.

React에서 컴포넌트는 크게 두 가지 유형으로 나뉜다:
1. 함수형 컴포넌트(Function Component)
2. 클래스형 컴포넌트(Class Component)

최근 React와 Next.js 개발에서는 Hooks의 도입으로 함수형 컴포넌트가 주로 사용된다.
*/

// 함수형 컴포넌트 예시
export default function ComponentIntro() {
  return (
    <div>
      <h1>컴포넌트란? 왜 사용하는가?</h1>

      {/* 함수형 vs 클래스형 컴포넌트 비교 */}
      <div>
        <div>
          <h3>함수형 컴포넌트</h3>
          <pre>
            {`function Welcome(props) {
                return <h1>Hello, {props.name} </h1>
              }`}
          </pre>
        </div>
        <div>
          <h3>클래스형 컴포넌트</h3>
          <pre>
            {`class Welcome extends React.Component{

              render(){
                // 함수형에는 this가 있고, class는 this가 있다.
                return <h1>Hello, {this.props.name}</h1>
                // 클래스 속성으로 props를 받는다.
              }
            }`}
          </pre>
        </div>
      </div>

      <hr />
      {/* 예제용 컴포넌트 추가 */}
      <ExampleComponent />
      <hr />
      <ExampleComponent title="나만의 제목" />
    </div>
  );
}

// 간단한 예제 컴포넌트
function ExampleComponent({ title = "기본 제목" }) {
  const divStyle = {
    border: "1px solid #ddd",
    backgroundColor: "aqua",
    padding: "10px",
    margin: "10px 0",
  };

  return (
    <div style={divStyle}>
      <h3>{title}</h3>
      <p>이것은 재사용 가능한 컴포넌트입니다.</p>
    </div>
  );
}
