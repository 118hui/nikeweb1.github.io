import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({
    ifExists, // 是否存在於購物車
    id, // 商品ID
    color, // 背景顏色樣式
    shadow, // 陰影樣式
    title, // 商品標題
    text, // 商品描述
    img, // 圖片路徑
    btn, // 按鈕文字
    rating, // 評分
    price, // 價格
}) => {
    const dispatch = useDispatch();

    // 將商品加入購物車
    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price };

        dispatch(setAddItemToCart(item));
    };

    // 開啟購物車
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }
    return (
        <>
            <div
                className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                    } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
            >
                <div
                    className={`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                        }`}
                >
                    <h1 className="text-white text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
                        {title}
                    </h1>
                    <p className="text-white filter drop-shadow text-base md:text-sm font-normal">
                        {text}
                    </p>

                    <div className="flex items-center justify-between w-28 my-2">
                        <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
                            <h1 className="text-black text-sm font-medium">${price}</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                            <h1 className="md:text-sm font-normal text-slate-100">
                                {rating}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-black"
                            onClick={() => onAddToCart()}
                        >
                            <ShoppingBagIcon className="icon-style text-slate-900" />
                        </button>
                        <button
                            type="button"
                            className="bg-lime-400 blur-effect-theme button-theme px-2 py-1 shadow shadow-gray-800 text-sm text-black"
                            onClick={() => { onAddToCart(); onCartToggle(); }}
                        >
                            {btn}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex items-center ${ifExists ? "absolute top-5 right-1" : "justify-center"
                        }`}
                >
                    <img
                        src={img}
                        alt={`img/item-img/${id}`}
                        className={`transitions-theme hover:-rotate-12 ${ifExists
                            ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                            : "h-36 w-64"
                            }`}
                    />
                </div>
            </div>
        </>
    )
}

export default Item

//這段程式碼描述了一個商品展示元件，包括了標題、描述、價格、評分、加入購物車等功能。
//如果商品已經存在於購物車中，它會以不同的樣式顯示。