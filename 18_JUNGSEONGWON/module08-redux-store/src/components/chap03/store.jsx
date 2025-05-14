// 저장소에 어떤 Reducer가 들어가 있는 지 확인가능

const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./slice/CreateAsyncThunk"
import userReducer from "./thunk/ThunkReducer"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer
  },
})

export default store;