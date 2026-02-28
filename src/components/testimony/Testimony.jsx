import Mariana from './mariana.png'
import Ricardo from './ricardo.png'
import Carlos from './carlos.png'

export default function Testimony() {
    return (
        <section className="bg-[#f8fafc] relative px-6 pb-16">
            <div className="flex flex-col items-center w-full pt-16 gap-6 lg:mx-auto lg:w-3/5">
                <h2 className="text-3xl">Depoimentos</h2>
                <div className="h-1 w-16 bg-blue-500"></div>

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    <div className='border-2 flex flex-col items-center text-center rounded-2xl py-16 gap-4 bg-white shadow-2xs border-[#f1f5f9] px-6'>
                        <div className='h-16 w-16 rounded-full overflow-hidden'>
                            <img className='' src={Mariana} alt="" />
                        </div>
                        <span className='text-amber-300 text-sm'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <p className='italic'>"Uma experiência transformadora. O atendimento é impecável e a localização parece saída de um sonho. Voltarei com certeza!"</p>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>MARIANA SILVEIRA</span>
                            <span className='text-sm text-gray-400'>Hóspede frequente</span>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col items-center text-center rounded-2xl py-16 gap-4 bg-white shadow-2xs border-[#f1f5f9] px-6'>
                        <div className='h-16 w-16 rounded-full overflow-hidden'>
                            <img className='' src={Ricardo} alt="" />
                        </div>
                        <span className='text-amber-300 text-sm'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <p className='italic'>"O melhor resort que já visitei. O passeio de barco ao pôr do sol foi o ponto alto da nossa lua de mel. Simplesmente mágico."</p>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>RICARDO & ANA</span>
                            <span className='text-sm text-gray-400'>Casal de SP</span>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col items-center text-center rounded-2xl py-16 gap-4 bg-white shadow-2xs border-[#f1f5f9] px-6'>
                        <div className='h-16 w-16 rounded-full overflow-hidden'>
                            <img className='' src={Carlos} alt="" />
                        </div>
                        <span className='text-amber-300 text-sm'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <p className='italic'>"Melhor resort que já visitei no litoral. O passeio de Jet Ski foi incrível e o café da manhã é sensacional. Ideal para quem busca luxo e tranquilidade."</p>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>CARLOS EDUARDO</span>
                            <span className='text-sm text-gray-400'>Hóspede novo</span>
                        </div>
                    </div>

                    

                </div>


            </div>
            
        </section>
    )
}