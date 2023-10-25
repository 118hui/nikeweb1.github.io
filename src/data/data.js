import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";


const heroapi = {
    title: "重要的，真的不是這雙鞋",
    subtitle: "而是穿上它之後的你!",
    img: heroimg,
    btntext: "探索更多",
    videos: [
        { imgsrc: vcover1, clip: clip },
        { imgsrc: vcover2, clip: clip },
        { imgsrc: vcover3, clip: clip },
    ],
    sociallinks: [
        { icon: facebook },
        { icon: messenger },
        { icon: instagram },
        { icon: twitter },
        { icon: youtube },
    ],
};

const popularsales = {
    title: "熱門銷售",
    items: [{
            id: "0p0x1",
            title: "Nike Addapt BB 2.0",
            text: "MEN Running Shoes",
            rating: "4.9",
            btn: "馬上買",
            img: psale2,
            price: "3600",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0p0x2",
            title: "Nike Martine Rose",
            text: "MEN Running Shoes",
            rating: "4.5",
            btn: "馬上買",
            img: psale1,
            price: "3480",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0p0x3",
            title: "Nike Smart Shoe 2.0",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "馬上買",
            img: psale3,
            price: "3980",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
    ],
};

const highlight = {
    heading: "經典球鞋",
    title: "NIKE AIR WITH LIMITLESS CHOICES",
    text: "我們的目標是推動世界前進。我們採取行動建立社區、保護我們的星球和增加體育運動的機會。",
    btn: "探索更多",
    url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
    img: hightlightimg,
};

const sneaker = {
    heading: "精選款式",
    title: "NIKE SNEAKERS AIR LANCING SHOES",
    text: "Nike Sneakers Air Lancing 鞋款煥發著光彩，這款籃球鞋為您最熟悉的鞋款帶來了全新的詮釋：耐用的縫線覆蓋層、簡潔的飾面以及讓您光芒四射的完美​​閃光量。",
    btn: "探索更多",
    url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
    img: sneakershoe,
};

const toprateslaes = {
    title: "最高評價銷售",
    items: [{
            id: "0M0x1",
            title: "Nike Air Low Premium",
            text: "MEN Casual Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product7,
            price: "2480",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x7",
            title: "Nike Multi Smart Shoe",
            text: "MEN Basketball Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product1,
            price: "3800",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x2",
            title: "Nike Air Force Green",
            text: "MEN Casual Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product2,
            price: "4280",
            color: "bg-green-500",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x4",
            title: "Nike Air Premium",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product4,
            price: "3200",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x5",
            title: "Nike Adapt BB Pro",
            text: "MEN Basketball Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product5,
            price: "4800",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x3",
            title: "Nike Addapt BB Rose",
            text: "MEN Basketball Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product3,
            price: "4500",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x6",
            title: "Air Jordan PR3",
            text: "MEN Casual Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product6,
            price: "2800",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x8",
            title: "Nike Jordan Air Max",
            text: "MEN Casual Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product9,
            price: "2680",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x9",
            title: "Nike Old Max-x",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product10,
            price: "3200",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x10",
            title: "Nike Lime Jordan 11",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product12,
            price: "4280",
            color: "bg-green-500",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x11",
            title: "Nike Air Black Max",
            text: "MEN Basketball Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product11,
            price: "3600",
            color: "bg-blue-950",
            shadow: "shadow-md shadow-black",
        },
        {
            id: "0M0x12",
            title: "Nike Zoom Max",
            text: "MEN Basketball Shoes",
            rating: "5+",
            btn: "馬上買",
            img: product8,
            price: "3800",
            color: "bg-blue-900",
            shadow: "shadow-md shadow-black",
        },
    ],
};


const story = {
    title: "熱門故事",
    news: [{
            title: "Jayson Tatum Debuts",
            text: "作為過去幾年Jordan Brand 的簽名鞋款，傑森·塔圖姆(Jayson Tatum) 將在本季推出Air Jordan 37，之後可能會推出他的第一款簽名鞋款Jumpman，據他最近通過Twitter 傳言，這款鞋正在製作中。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
            url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
            like: "3/5",
            time: "11 Mins",
            by: "Jared Ebanks",
            btn: "探索更多"
        },
        {
            title: "Bro’s Nike Zoom Freak 4",
            text: "適逢秋季，即將推出的 Zoom Freak 4 似乎從感恩節汲取了靈感。橙色和棕色是節日的兩種主打色，貫穿整個鞋面，為未沐浴在灰色色調的部分提供裝飾。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
            time: "41 Mins",
            like: "5/5",
            url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
            by: "Michael Le",
            btn: "探索更多"
        },
        {
            title: "Nike Air Max Plus",
            text: "Nike Air Max Plus 在過去幾個月推出了多種配色。當我們正式進入秋季時，日曆中又添加了額外的系列，包括新推出的灰色和橙色配色。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
            time: "2 Hours",
            url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
            like: "5/5",
            by: "Michael Le",
            btn: "探索更多"
        },
        {
            title: "Air Jordan Retro High OG",
            text: "Air Jordan Retro High OG 流行系列 AJ1s 採用流行的拼色，帶有原汁原味的 Yellow Toe 風味。該配色由音樂家 Zach Myers 在 PE 上揭曉，近四年後，喬丹狂熱分子終於獲得了 GR 版本。",
            img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
            time: "7 Months",
            url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
            like: "5/5",
            by: "Sneaker News",
            btn: "探索更多"
        },
        {
            title: "Nike Air Zoom GT Cut 2",
            text: "Zoom GT Cut 2 的 Bred 配色將於本週五首先為 Nike Members Nation World Wide 發售，而 Sabrina Ionescus 配色則定於 10 月 13 日發售。同時，請欣賞下面兩種配色的官方圖片。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
            time: "1 Months",
            url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "探索更多"
        },
        {
            title: "Puma Announces Breanna",
            text: "十多年來，我們首次為 WNBA 最優秀、最耀眼的球星之一、奧運金牌得主、西雅圖風暴隊超級巨星布麗安娜·史都華 (Breanna Stewart) 打造標誌性籃球鞋款。 Puma Stewie 1 Quiet Fire 將於本週五上市。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
            time: "25 Days",
            url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "探索更多"
        },
        {
            title: "Nike Air Force Orange Color",
            text: "從蕾絲扣到城市風格的改造，Nike Air Force 1 進行了許多獨特的修改。不過，該品牌在這方面做了許多改進，選擇了以黑色和雷射橙色為主的簡單配色。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
            url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
            time: "6 Days",
            like: "4/5",
            by: "Micael Le",
            btn: "探索更多"
        },
        {
            title: "Hello Kitty and Adidas",
            text: "三麗鷗的世界廣闊且充滿了許多標誌性人物。不過，這個家族中很少有人能與 Hello Kitty 的巨大影響力相媲美，從 Pringles 商品到運動鞋合作款，Hello Kitty 都是各種產品的吉祥物。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
            url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
            time: "5 Days",
            like: "4/5",
            by: "Micael Le",
            btn: "探索更多"
        },
        {
            title: "Air Force 1 Low Expands",
            text: "這裡看到的夜間美學應用於鞋面的翻滾黑色皮革面板和鞋舌的穿孔網狀結構，而皇家裝飾和前腳 Swooshes 為深色調色板提供了額外的吸引力。",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
            url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
            time: "5 Days",
            like: "4/5",
            by: "Micael Le",
            btn: "探索更多"
        },
    ],
};


const footerAPI = {
    titles: [{ title: "關於 Nike" }, { title: "幫助" }, { title: "公司" }],
    links: [
        [
            { link: "新聞" },
            { link: "職業機會" },
            { link: "投資者" },
            { link: "目的" },
            { link: "永續發展" },
        ],
        [
            { link: "訂單狀態" },
            { link: "送貨方式" },
            { link: "付款方式" },
            { link: "禮品卡餘額" },
            { link: "聯絡我們" },
            { link: "問與答" },
            { link: "部落格" },
        ],
        [
            { link: "禮品卡" },
            { link: "促銷活動" },
            { link: "尋找商店" },
            { link: "報名" },
            { link: "Nike 雜誌" },
            { link: "向我們發送回饋" },
        ],
    ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };