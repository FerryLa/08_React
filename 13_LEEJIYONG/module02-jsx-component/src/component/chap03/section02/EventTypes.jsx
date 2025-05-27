/*
React에서 자주 사용하는 이벤트 타입들
주요 이벤트 유형:
1. 클릭 이벤트: onClick
2. 폼 이벤트: onChange, onSubmit
3. 키보드 이벤트: onKeyDown, onKeyUp, onKeyPress
4. 마우스 이벤트: onMouseOver, onMouseOut
5. 포커스 이벤트: onFocus, onBlur

모든 이벤트는 합성 이벤트(SyntheticEvent)로 브라우저 호환성 보장
*/
import FormEvent from "./components/FromEvent";
import MouseEvent from "./components/MouseEvent";
import KeyEvent from "./components/KeyEvent.jsx";

export default function EventTypes() {
  return (
    <div>
      <h2>다양한 이벤트 타입</h2>
      <FormEvent />
      <hr />
      <MouseEvent />
      <hr />
      <KeyEvent />
    </div>
  );
}
