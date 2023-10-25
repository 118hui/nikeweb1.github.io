import Item from './utils/Item';
import Title from './utils/Title';

const Sales = ({ ifExists, endpoint: { title, items } }) => {
    return (
        <>
            <div className='nike-container'>
                {/* 使用Title組件，傳遞標題(title)作為屬性 */}
                <Title title={title} />
                <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 
                ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' :
                        'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
                    {items?.map((item, i) => (
                        // 顯示商品，傳遞商品相關屬性
                        <Item {...item} key={i} ifExists={ifExists} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sales

//這段程式碼描述了一個銷售頁面，包含了標題和多個商品展示。
//根據 ifExists 的值來決定商品的排列方式。每個商品使用 Item 組件來展示，
//並傳遞相應的屬性。同時，使用了 Title 組件來顯示標題。