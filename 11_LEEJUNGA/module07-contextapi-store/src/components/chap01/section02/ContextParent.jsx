import { memo } from "react";
import ContextChild from "./ContextChild";

function ContextParent() {
  console.log("ContextParent");
  return <ContextChild />;
}

// memo를 사용하여 불필요한 리렌더링을 방지지
// export default ContextParent;
export default memo(ContextParent);
