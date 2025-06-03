import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser는 UserProvier안에서 사용해야 합니다.");
  return context;
}

export default useUser;
