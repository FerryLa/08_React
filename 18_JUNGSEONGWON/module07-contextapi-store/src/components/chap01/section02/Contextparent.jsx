import ContextChild from "./ContextChild";
import { memo } from "react";
function ContextParent() {
  console.log("ContextParent");
  return <ContextChild />;
}

// memo를 사용하여 불필요한 리렌더링 방지
export default memo(ContextParent);
