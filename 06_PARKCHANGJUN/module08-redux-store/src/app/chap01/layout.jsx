/*
  [Provider]
  - Redux store를 React앱에 연결하는 컴포넌트
  - Next.js에서는 app/layout.jsx(App Router) 또는 _app.jsx(Pages Router)에서 설정
  - Provider로 감싸야 하위에서 useSelector, useDispatch 사용가능
*/

"use client";
import { Provider } from "react-redux";
import store from "@/components/chap01/SimpleRedux";

function Layout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Provider store={store}>
          {children} {/* 하위 컴포넌트들(Redux 사용가능) */}
        </Provider>
      </body>
    </html>
  );
}
export default Layout;
