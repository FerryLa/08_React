"use client";

import { Provider } from "react-redux";
import store from "@/components/chap02/StoreExample";
import SubscribeComponent from "./SubscribeComponent";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      {children}
      <SubscribeComponent />
    </Provider>
  );
}
