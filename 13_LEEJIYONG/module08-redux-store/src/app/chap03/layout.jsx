"use client";

import { Provider } from "react-redux";
import store from "../../components/chap03/store";

function Layout({ children }) {
  return <Provider store={store}>{children};</Provider>;
}

export default Layout;
