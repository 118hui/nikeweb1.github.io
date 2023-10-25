// 引入 Redux 工具套件中的 configureStore 函式
import { configureStore } from "@reduxjs/toolkit";
// 引入定義好的 CartSlice，這將用作 store 的 reducer
import CartSlice from "./CartSlice.js";

// 使用 configureStore 函式來創建 Redux store
const Store = configureStore({
    // 定義 store 中的 reducer，這裡只有一個叫做 "cart" 的 reducer
    reducer: {
        cart: CartSlice, // "cart" reducer 使用 CartSlice 來處理相關的 actions
    }
});

export default Store