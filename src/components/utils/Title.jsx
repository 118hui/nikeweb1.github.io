const Title = ({ title }) => {
    return (
        <>
            <div name='sales' className='grid items-center'>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-black filter
         drop-shadow-lg'>{title}</h1>
            </div>
        </>
    )
}

export default Title