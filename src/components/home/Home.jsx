import Background from './background.png'

export default function Home() {
    return (
        <section className=" border-2 h-full  text-center">
            <div className='bg-black/20 h-full w-full absolute'></div>
            <h1 className='absolute mx-auto left-100 top-100 text-amber-50 text-7xl'>Bem-vindo!</h1>
            <h1 className='absolute mx-auto left-100 top-120 text-amber-50 text-3xl'>Descubra um refúgio perfeito onde conforto, natureza e experiências memoráveis se encontram.</h1>
            <img src={Background} alt="" className='object-cover w-full object-center' />
        </section>
    )
}