import { memo } from "react";
import ContextChild from "./ContextChild";

function ContextParent() {
  console.log("ContextParent");
  return <ContextChild />;
}

// memo를 사용해 불필요한 리렌더링을 방지
export default memo(ContextParent);
