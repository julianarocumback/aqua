import Mariana from './mariana.png'
import Ricardo from './ricardo.png'

export default function Testimony() {
    return (
        <section className="bg-[#f8fafc] relative px-8 pb-16">
            <div className="flex flex-col items-center w-full px-4">
                <h2 className="text-3xl">Depoimentos</h2>
                <div className="h-1 w-16 bg-blue-500"></div>

                <div className="flex flex-col gap-8">
                    <div className='border-2 flex flex-col items-center text-center rounded-2xl py-16 gap-4'>
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
                        <p>"Uma experiência transformadora. O atendimento é impecável e a localização parece saída de um sonho. Voltarei com certeza!"</p>
                        <div className='flex flex-col'>
                            <span>Mariana Silveira</span>
                            <span>Hóspede frequente</span>

                        </div>
                    </div>

                    <div className='border-2 flex flex-col items-center text-center rounded-2xl py-16 gap-4'>
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
                        <p>"O melhor resort que já visitei. O passeio de barco ao pôr do sol foi o ponto alto da nossa lua de mel. Simplesmente mágico."</p>
                        <div className='flex flex-col'>
                            <span>Ricardo & Ana</span>
                            <span>Casal de SP</span>

                        </div>
                    </div>

                </div>


            </div>
            
        </section>
    )
}