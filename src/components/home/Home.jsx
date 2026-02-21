import Background from './background.png'

export default function Home() {
    return (
        <section className="h-full md:h-screen relative">
            <div className='flex flex-col '>
                <div className='h-screen w-full absolute md:h-3/4'>
                    <img src={Background} alt="" className='h-full w-full object-cover' />
                </div>
                <div className='bg-black/20 h-screen w-full absolute md:h-3/4'></div>
                <div className='self-center absolute h-4 w-2/5 md:h-3/4 flex flex-col justify-center gap-4'>
                    <h1 className='relative mx-auto   lg:text-amber-50 md:text-amber-300 lg:text-amber-600 text-7xl'>Bem-vindo!</h1>
                    <h1 className=' text-amber-50 text-3xl text-center'>Descubra um refúgio perfeito onde conforto, natureza e experiências memoráveis se encontram.</h1>
                </div>
            </div>
        </section>
    )
}