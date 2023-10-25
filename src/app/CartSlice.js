import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartState: false, // 購物車開啟或關閉的狀態
    cartItems: localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : [], // 購物車中的物品清單，從本地存儲中讀取或初始化為空陣列
    cartTotalAmount: 0, // 購物車中物品的總金額
    cartTotalQantity: 0, // 購物車中物品的總數量
};

// 創建 Redux Slice
const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success(`Item QTY Increased`);
            } else {
                const temp = {...action.payload, cartQuantity: 1 };
                state.cartItems.push(temp);

                toast.success(`${action.payload.title} added to Cart`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );

            state.cartItems = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));

            toast.success(`${action.payload.title} Removed From Cart`);
        },

        setIncreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success(`Item QTY Increased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setDecreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.success(`Item QTY Decreased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setClearCartItems: (state, action) => {
            state.cartItems = [];
            toast.success(`Cart Cleared`);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setGetTotals: (state, action) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQantity = totalQTY;
        },
        // ... 其他的 reducer 函式，用於處理購物車相關的 actions
    },
});

// 導出 action 函式以便在其他地方使用
export const {
    setOpenCart,
    setCloseCart,
    setAddItemToCart,
    setRemoveItemFromCart,
    setIncreaseItemQTY,
    setDecreaseItemQTY,
    setClearCartItems,
    setGetTotals
} = CartSlice.actions;

// 選擇 Redux store 中與購物車相關的狀態
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer

//這段程式碼定義了一個 Redux slice，用於處理購物車相關的狀態。
//它包括了一些 reducer 函式，用於處理打開/關閉購物車、新增、移除、增加或減少物品數量等 actions。
//這些 actions 會改變購物車的狀態，並在需要時更新 Redux store。
//同時，也導出了選擇器函式，用於在其他地方從 Redux store 中選擇相應的狀態。