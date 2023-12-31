import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-scroll';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col'>
                <div className='bg-blue-950 clip-path h-[95vh] lg:h-[85vh] md:h-[70vh] sm:h-[46vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'>
                    <div className='text-8xl lg:text-7xl md:text-6xl sm:text-4xl xsm:text-2xl font-bold text-blue-900 grid items-center justify-items-center mt-68'>
                        Never Give Up
                        <p>Keep moving</p>
                        <p>It's all up to me!</p>
                        <p>Just Do It</p>
                    </div>
                </div>
                <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
                    <div className='grid items-center justify-items-center mt-28 md:mt-24'>
                        <h1 className='text-7xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                        <Link to='sales' smooth={true} duration={500}>
                            <button type='button' className='button-theme bg-lime-400  shadow-md shadow-black rounded-xl my-5'>
                                {btntext}
                            </button>
                        </Link>
                        <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
                            {videos?.map((val, i) => (
                                <Clips
                                    key={i}
                                    imgsrc={val.imgsrc}
                                    clip={val.clip}
                                />
                            ))}
                        </div>
                        <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
                            {sociallinks?.map((val, i) => (
                                <SocialLink
                                    key={i}
                                    icon={val.icon}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={img}
                            alt='hero-img/img'
                            className='w-auto h-[65vh] lg:h-[50vh] md:h-[35vh] sm:h-[30vh] xsm:h-[25vh] transitions-theme -rotate-[10deg] 
                            hover:rotate-0 cursor-pointer object-fill'
                        />
                    </div>
                </div>
                <Marquee speed={100} className='text-7xl font-bold z-20'>
                    JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT JUST DO IT
                </Marquee>
            </div>
        </>
    )
}


export default Hero