'use client'

import store from "@/components/chap03/store";
import { Provider } from "react-redux"

function Layout({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
export default Layout;