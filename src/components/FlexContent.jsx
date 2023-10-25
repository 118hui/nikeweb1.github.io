// FlexContent 組件接受一個物件屬性和一個名為 ifExists 的布林值作為輸入，這個物件包含了所需的內容資訊。
const FlexContent = ({ ifExists, endpoint: { title, heading, text, img, btn, url } }) => {
    return (
        <>
            {/* 使用彈性布局來排列元素，根據 ifExists 決定是水平還是垂直排列 */}
            <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* 左側的區塊 */}
                <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
                    <h1 className='text-4xl sm:text-3xl font-bold text-lime-400'>{heading}</h1>
                    <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
                    <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
                    <a href={url} className="flex items-center" target={"_blank"} role="button">
                        <button type='button' className='button-theme bg-blue-950 shadow-slate-800 text-slate-100 py-1.5'>{btn}</button>
                    </a>
                </div>
                {/* 右側的圖片區塊 */}
                <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
                    <img
                        src={img}
                        alt={`img/${heading}`}
                        className={`w-auto object-fill transitions-theme ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' :
                            'h-60 lg:h-55 md:h-45 sm:h-40 xsm:h-38 rotate-[19deg] hover:rotate-12'}`}
                    />
                </div>
            </div>
        </>
    )
}

export default FlexContent

//這段程式碼描述了一個可配置的彈性布局元素，根據 ifExists 屬性的值，它可以水平或垂直排列。
//這個元素包括了標題、主標題、文字描述、圖片以及一個連結按鈕。