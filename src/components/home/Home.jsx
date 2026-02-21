import Background from './background.png'

export default function Home() {
    return (
        <section className="h-full md:h-screen relative">
            <div className='flex flex-col'>
                <div className='h-screen w-full absolute md:h-3/4'>
                    <img src={Background} alt="" className='h-full w-full object-cover' />
                </div>
                <div className='bg-black/20 h-screen w-full absolute md:h-3/4'></div>
                <div className='flex flex-col justify-center text-center items-center self-center absolute h-screen w-3/5 md:w-2/5 md:h-3/4 gap-4 text-white '>
                    <h1 className='relative text-4xl md:text-7xl dar font-bold'>Bem-vindo!</h1>   
                    <h2 className=' text-2xl md:text-3xl text-center'>Descubra um refúgio perfeito onde conforto, natureza e experiências memoráveis se encontram.</h2>
                    <div className='mt-8 relative h-14 w-14 bg-black/20 justify-center rounded-full flex items-center animate-pulse border-white/50 border-2 '>
                        <button><i class="fa-solid fa-angles-down"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}