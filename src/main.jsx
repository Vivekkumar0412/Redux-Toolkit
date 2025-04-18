import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import bonusReducer from "./slices/bonusSlice.js";
import accountReducer from "./slices/accountSlice.js";
import rewardReducer from "./reducers/rewardReducer.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./api/adminApi.js";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward : rewardReducer,
    [adminApi.reducerPath] : adminApi.reducer
  },
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(adminApi.middleware)
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
