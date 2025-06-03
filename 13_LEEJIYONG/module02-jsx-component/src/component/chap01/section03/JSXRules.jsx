/*
JSX에서 주의해야 할 문법 규칙

JSX는 HTML과 유사해 보이지만, 몇 가지 중요한 문법 규칙을 따라야 한다.
이러한 규칙들을 이해하고 준수하는 것이 오류 없는 React 코드를 작성하는 데 중요하다.

주요 규칙:
1. 하나의 최상위 요소로 감싸야 함 -> 플래그먼트 
2. 모든 태그는 닫혀야 함 -> (페어 방식과 싱글 클로즈 태그 방식 모두 닫아야함)
3. JSX 내에서 JavaScript 조건문 사용시 -> {} 내부에 작성
4. 예약어와 속성 이름 (class → className) -> js 방식으로 속성 참조
5. 주석 작성 방법 -> 중괄호 내부에 작성 {}
*/

export default function JSXRules() {
  const isLoggedIn = true;
  const items = ["사과", "바나나", "오렌지", "수박"];

  return (
    <>
      {/* 
      1. 하나의 최상위 요소 규칙
      React의 컴포넌트는 반드시 하나의 최상위 요소(루트 노드)로 감싸져 있어야 한다.

      그 이유는 다음과 같다:
      -DOM 트리 구조의 일관성 : HTML과 마찬가지로, DOM(Document Object Model)은 트리 구조로 이루어져 있다. 
                          트리 구조의 기본 원칙은 반드시 하나의 루트(최상위) 노드가 존재해야 하며, 모든 자식 노드는 이 루트 노드 아래에 위치해야 한다. 
                          만약 여러 개의 형제 노드가 루트 없이 나란히 존재한다면, 트리 구조가 성립하지 않아 DOM 파싱 및 렌더링에 문제가 발생한다.

      - 컴포넌트 반환값의 명확성: React 컴포넌트는 함수(또는 클래스)로 구현되며, 이 함수는 하나의 값을 반환해야 한다. 
                          여러 개의 JSX 요소를 반환하려면, 하나의 부모 요소로 감싸서 단일 값으로 만들어야 한다. 
                          그렇지 않으면 JavaScript 문법상 오류가 발생한다.

      -가상 DOM의 효율적 비교 : React는 가상 DOM(Virtual DOM)을 사용하여 변경 사항을 효율적으로 감지하고 실제 DOM에 반영한다. 
                          이 과정에서 각 컴포넌트가 하나의 루트 노드를 가지면, 변경 감지 및 트리 비교가 훨씬 단순하고 효율적으로 이루어진다.

      - HTML 파서 및 브라우저 호환성: 브라우저의 HTML 파서 역시 하나의 루트 엘리먼트(예: <body> 또는 <html>)를 요구한다. 
                          여러 개의 루트 노드가 있으면 브라우저가 예기치 않게 동작할 수 있다.

      잘못된 예 : 
      return (
        <h1>제목</h1>
        <p>내용</p>
      );

      이러한 이유로, 여러 JSX 요소를 반환할 때는 반드시 하나의 부모 요소(div, section 등)나 React.Fragment(<> </>)로 감싸야 한다.
      Fragment는 실제 DOM에 불필요한 노드를 추가하지 않고 여러 요소를 그룹화할 수 있게 해준다.
      */}
      <h1>JSX에서 주의해야 할 문법 규칙</h1>
      <p>JSX는 반드시 하나의 최상위요소로 감싸야한다.</p>

      <div>
        <p>이렇게 하나의 div로 감싸야한다.</p>
        <p>여러 요소를 포함할 수 있다.</p>
      </div>

      {/* Fragment 사용 */}
      <>
        <p>React Fragment를 사용할 수 있다.</p>
        <p>불필요한 div를 추가하지 않아도 된다.</p>
      </>

      <hr />

      {/* 
      2. 닫힘 태그가 필수 
      JSX는 XML 기반 문법을 따르기 때문에, 모든 태그는 반드시 닫혀야 한다.
      닫힘 태그를 명확히 작성해야 요소의 시작과 끝이 분명해지고, 올바른 트리 구조가 유지된다.
      닫힘 태그가 없으면 렌더링 오류나 예기치 않은 동작이 발생할 수 있다.
      또한, JSX는 JavaScript 코드로 변환되므로, 닫힘 태그가 없으면 문법 오류가 발생할 수 있다.
      HTML에서 닫힘 태그 없이 사용하던 <img>, <input> 등도 JSX에서는 반드시 <img />와 같이 셀프 클로징 형태로 작성해야 한다.
      예)
      // 잘못된 예: <img src="image.jpg">
      // 올바른 예: <img src="image.jpg" />
      */}

      <div>
        <h2>2. 닫힘 태그 필수</h2>
        <p>모든 태그는 반드시 닫혀야 한다.</p>
        <img src="https://media.licdn.com/dms/image/v2/D4D12AQFC_rCZDd12Lw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1653742400027?e=2147483647&v=beta&t=W4fqzpjFrZ4m2UahFd1OogKoeso0eUtaH5DiVbQeW1Q" />
        <input type="text" placeholder="닫힘 태그 예시" />
        <br />
      </div>

      <hr />

      {/* 
        3. 조건부 렌더링
        JSX 내에서는 if문을 직접 사용할 수 없고, 표현식만 사용할 수 있다.
        따라서 조건에 따라 다른 UI를 보여주려면 삼항 연산자(?:), 논리 연산자(&&), 또는 즉시 실행 함수(IIFE) 등을 활용해야 한다.
        조건부 렌더링을 통해 동적으로 컴포넌트나 요소를 표시하거나 숨길 수 있다.
        
        잘못된 예:
        <div>
          {if (isLoggedIn) {
            <p>환영합니다!</p>
          }}
        </div>

        올바른 예:
        삼항 연산자: {isLoggedIn ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}
        논리 연산자: {items.length > 0 && <p>항목이 있습니다.</p>}
        즉시 실행 함수: {(() => { if (조건) return <A/>; else return <B/>; })()}
      */}
      <div>
        <h2>3. 조건부 렌더링</h2>
        <p>JSX 내에서는 if문을 직접 사용할 수 없고, 표현식만 사용할 수 있다.</p>

        {/* 삼항 연산자 */}
        <div>
          {isLoggedIn ? (
            <p>환영합니다. 로그인 상태입니다.</p> // return 생략
          ) : (
            <p>로그인이 필요합니다. </p>
          )}
        </div>

        {/* $$ 연산자 */}
        <div>{isLoggedIn && <p>이 내용은 로그인 시에만 보입니다.</p>}</div>

        {/* 
          변수에 할당 
          if문은 값을 반환하지 않는다 이는 if문 자체는 값을 반환하지 않고, 단순히 조건에 따라 코드 블록을 실행하게 된다.
          하지만 JSX는 중괄호 안에서 반드시 하나의 값을 반환해야 하므로, if문만 단독으로 쓸 수 없다.
          따라서 즉시 실행 함수를 사용하여 값을 반환하는 방식으로 처리해야 한다.
        */}

        <div>
          {(() => {
            if (items.length === 0) {
              return <p>항목이 없어요.</p>;
            } else if (items.length === 1) {
              return <p>1개 항목이 있어요,</p>;
            } else {
              return <p>{items.length}개 항목이 있어요.</p>;
            }
          })()}
        </div>
      </div>

      <hr />
      {/* 4. 예약어와 속성 이름 */}
      <div>
        <h2>4. 예약어와 속성 이름</h2>
        <p>JSX에서는 HTML 속성명이 camelCase로 변경된다.</p>
        {/* 
          잘못된 예 :
          <div class="container">...</div>
        */}

        {/* 올바른 예 */}
        <div className="container">class ➡️ className</div>
        <label htmlFor="username">for ➡️ htmlFor</label>
        <input type="text" id="username" />
      </div>

      <hr />
      {/* 5. JSX에서 주석 작성하기 */}
      <div>
        <h2>5. JSX에서 주석 작성하기</h2>
        {/* 이것은 JSX 내부의 주석입니다. */}
        <p>주석은 {/* 이렇게 */} 중괄호를 감싸서 작성한다.</p>
        {
          // 한 줄 주석도 이렇게 작성할 수 있다.
        }
      </div>
    </>
  );
}
