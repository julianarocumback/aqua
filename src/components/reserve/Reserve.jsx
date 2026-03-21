import ImagemReserva from './imagem-reserva.png'

export default function Reserve() {
    return (
        <section id="reserve" className="scroll-mt-[75px] w-full h-full py-25 px-4 lg:mx-auto lg:w-3/5">
            <div className='flex flex-col lg:flex-row lg:gap-12 w-full h-full'>
                <div>
                    <img className='rounded-3xl w-full' src={ImagemReserva} alt=""/>
                </div>
                <div className='pt-12 lg:pt-0 flex flex-col gap-8 lg:gap-5 lg:justify-between'>
                    <h2 className='text-4xl '>Faça já sua reserva!</h2>
                    <p className='text-sm'>Garanta seu lugar neste santuário de paz. Preencha os detalhes abaixo e nossa equipe entrará em contato para confirmar sua estadia inesquecível.</p>
                    <div className='flex flex-col gap-4  lg:h-full lg:justify-between'>

                        <div className=' flex flex-col lg:flex-row justify-baseline gap-4 w-full'>
                            <div className='flex flex-col gap-2 w-full'>
                                <span className='font-medium text-sm text-[#94a3b8]'>CHECK-IN</span>
                                <div className='flex relative'>
                                    <input placeholder='dd/mm/aaaa' className='border font-medium rounded-md h-12 w-full px-3 bg-[#f8fafc] border-[#e2e8f0] before:content-[attr(placeholder)] before-absolute before:left-3 invalid:text-transparent focus:before:content-none sm:before:content-none 
                                    
                                    [&::-webkit-calendar-picker-indicator]:bg-none
           [&::-webkit-calendar-picker-indicator]:opacity-0
           
           /* 2. FAZ O CLIQUE FUNCIONAR EM TODO O CAMPO (PC e Mobile) */
           [&::-webkit-calendar-picker-indicator]:absolute
           [&::-webkit-calendar-picker-indicator]:inset-0
           [&::-webkit-calendar-picker-indicator]:w-full
           [&::-webkit-calendar-picker-indicator]:h-full
           [&::-webkit-calendar-picker-indicator]:cursor-pointer
           [&::-webkit-calendar-picker-indicator]:z-20

           /* 3. PLACEHOLDER CUSTOMIZADO */' type="date"/>
                                    <div className='absolute right-2 top-3 pointer-events-none'>
                                        <i class="fa-regular fa-calendar-days"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <span className='font-medium text-sm text-[#94a3b8]'>CHECK-OUT</span>

                                <div className='flex relative'>
                                    <input placeholder='dd/mm/aaaa' className='border font-medium rounded-md h-12 w-full px-3 bg-[#f8fafc] border-[#e2e8f0] before:content-[attr(placeholder)] before-absolute before:left-3 invalid:text-transparent focus:before:content-none sm:before:content-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:appearance-none ' type="date"/>
                                    <div className='absolute right-2 top-3 pointer-events-none'>
                                        <i class="fa-regular fa-calendar-days"></i>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className='flex flex-col gap-2 w-full'>
                                <span className='font-medium text-sm text-[#94a3b8]'>HÓSPEDES</span>
                                <div className='flex relative'>
                                    <select className='border font-medium rounded-md h-12 w-full px-3 bg-[#f8fafc] border-[#e2e8f0] appearance-none'>
                                        <option value="">1 Pessoa</option>
                                        <option value="">2 Pessoas</option>
                                        <option value="">3 Pessoas</option>
                                        <option value="">4+ Pessoas</option>
                                    </select>
                                    <div className='absolute right-2 top-3 pointer-events-none'>
                                        <i class="fa-solid fa-caret-down"></i>
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <span className='font-medium text-sm text-[#94a3b8]'>QUARTOS</span>
                                <div className='flex relative'>
                                    <select className='border font-medium rounded-md h-12 w-full px-3 bg-[#f8fafc] border-[#e2e8f0] appearance-none'>
                                        <option value="">1 Quarto</option>
                                        <option value="">2 Quartos</option>
                                        <option value="">Suíte Master</option>
                                    </select>
                                    <div className='absolute right-2 top-3 pointer-events-none'>
                                        <i class="fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <span className='font-medium text-sm text-[#94a3b8]'>TIPO</span>
                                <div className='flex relative'>
                                    <select className='border font-medium rounded-md h-12 w-full px-3 bg-[#f8fafc] border-[#e2e8f0] appearance-none'>
                                        <option value="">Econômico</option>
                                        <option selected value="">Standard</option>
                                        <option value="">Luxo</option>
                                    </select>
                                    <div className='absolute right-2 top-3 pointer-events-none'>
                                        <i class="fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <button className='bg-[#0f172a] text-amber-50 h-16 w-full rounded-md text-lg font-bold tracking-widest cursor-pointer hover:bg-[#0891b2] transition-all transition-duration-150 transition-timing-function-ease-in-out mt-2'> RESERVAR AGORA</button>
                    </div>
                </div>

            </div>



        </section>
    )
}