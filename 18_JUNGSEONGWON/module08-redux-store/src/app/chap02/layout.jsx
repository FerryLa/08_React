"use client";

import { Provider } from "react-redux";
import store from "@/components/chap02/StoreExample";
import SubscribeComponent from "@/components/chap02/SubscribeComponent";
export default function Layout({ children }) {
  return (
    <Provider store={store}>
      {children}
      <SubscribeComponent />
    </Provider>
  );
}
