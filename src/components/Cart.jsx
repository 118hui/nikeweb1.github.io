import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartState,
    selectTotalAmount,
    selectTotalQTY,
    setClearCartItems,
    setCloseCart,
    setGetTotals
} from "../app/CartSlice.js";
import CartCount from "../cart/CartCount";// 引入購物車商品數量顯示組件
import CartEmpty from "../cart/CartEmpty";// 引入購物車為空時顯示的組件
import CartItem from "../cart/CartItem";// 引入購物車商品項目組件

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState);// 獲取購物車狀態
    const cartItems = useSelector(selectCartItems);// 獲取購物車商品列表
    const totalAmount = useSelector(selectTotalAmount);// 獲取總金額
    const totalQTY = useSelector(selectTotalQTY);// 獲取總數量

    // 當購物車商品列表或 dispatch 函數發生變化時，更新總金額和總數量
    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch])

    // 關閉購物車函數
    const onCartToggle = () => {
        dispatch(
            setCloseCart({
                cartState: false,
            })
        );
    };

    // 清空購物車商品函數
    const onClearCartItems = () => {
        dispatch(setClearCartItems())
    }

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${ifCartState
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-8"
                    }`}
            >
                <div
                    className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${ifCartState
                        ? "opacity-100 visible translate-x-0"
                        : "opacity-0 invisible translate-x-8"
                        }`}
                >
                    <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
                    {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
                        <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                            {cartItems?.map((item, i) => (
                                <CartItem key={i} item={item} />
                            ))}
                        </div>

                        <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                            <div className="flex items-center justify-between">
                                <h1 className="text-base font-semibold uppercase">小計</h1>
                                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
                            </div>
                            <div className="grid items-center gap-2">
                                <p className="text-sm font-medium text-center">稅金和運費將在發貨時計算</p>
                                <button type="button" className="button-theme bg-theme-cart text-white">結帳</button>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </>
    )
}

export default Cart

//這段程式碼主要實現了一個購物車組件，包括顯示購物車內商品數量、清空購物車、顯示總金額等功能。