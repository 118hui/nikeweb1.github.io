import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';

const Navbar = () => {

    // 宣告狀態變數來追蹤導覽欄狀態
    const [navState, setNavState] = useState(false);

    // 取得 dispatch 函式
    const dispatch = useDispatch();
    // 從 Redux store 中獲取總數量
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        // 如果滾動超過30像素，設置導覽欄為固定狀態
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            // 否則將導覽欄設置為非固定狀態
            setNavState(false);
        }
    }
    useEffect(() => {
        // 監聽滾動事件
        window.addEventListener('scroll', onNavScroll);

        return () => {
            // 在組件卸載時取消事件監聽
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                        />
                        <div className='text-3xl font-bold text-lime-400'>NIKE</div>
                    </div>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'>
                            <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full 
                                flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ?
                                        'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>
                                    {totalQTY}{/* 顯示購物車中的商品總數量 */}
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar

//這段程式碼描述了一個導覽欄組件，根據滾動事件來改變其外觀。
//導覽欄包含了品牌 Logo、搜尋、收藏以及購物車的功能。
//並且根據購物車中商品的總數量進行更新。