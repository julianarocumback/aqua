import Background from './background.png'

export default function Home() {
    return (
        <section className="h-screen w-full lg:h-[600px]">
            <div className='flex flex-col h-full w-full relative'>
                <div className='h-full w-full absolute'>
                    <img src={Background} alt="" className='h-full w-full object-cover' />
                </div>
                <div className='bg-black/20 h-full w-full absolute'></div>
                <div className='flex flex-col justify-center items-center self-center relative h-full w-3/5 lg:w-2/5 gap-6 text-white'>
                    <h1 className='relative text-5xl sm:text-5xl lg:text-7xl font-semibold'>Bem-vindo!</h1>   
                    <h2 className=' text-xl font- lg:text-3xl text-center'>Descubra um refúgio perfeito onde conforto, natureza e experiências memoráveis se encontram.</h2>
                    <a href="#activities" className='cursor-pointer'>
                        <div className='mt-8 relative h-14 w-14 bg-black/20 justify-center rounded-full flex animate-pulse border-white/50 border-2 cursor-pointer hover:bg-white transition-all duration-300 hover:text-black'>
                        <button className='cursor-pointer'><i class="fa-solid fa-angles-down"></i></button>
                    </div>
                    </a>  
                </div>
            </div>
        </section>
    )
}