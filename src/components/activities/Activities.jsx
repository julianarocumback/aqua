import Barco from './barco.png'
import JetSki from './jetski.png'
import Mergulho from './mergulho.png'

export default function Activities() {

    const activities = [
        {
            titulo: 'Passeio de barco',
            imagem: Barco,
            descricao: 'Navegue pelas águas cristalinas da nossa baía particular a bordo de luxuosos catamarãs. Descubra ilhas desertas, brinde ao pôr do sol e sinta a brisa do mar em uma experiência exclusiva de total liberdade e sofisticação.',
            check1: 'Roteiros personalizados',
            check2: 'Serviço de bordo gourmet',
            check3: 'Paradas para banho em locais secretos',
        },
        {
            titulo: 'Passeio de Jet Ski',
            imagem: JetSki,

            descricao: 'Para os amantes de aventura e velocidade, nossos passeios guiados de jet ski oferecem uma perspectiva única da costa. Sinta a adrenalina enquanto explora formações rochosas e cavernas marinhas inacessíveis por outros meios.',
            check1: 'Equipamentos de última geração',
            check2: 'Treinamento de segurança incluso',
            check3: 'Guia profissional acompanhante',
        },
        {
            titulo: 'Grupos de mergulho',
            imagem: Mergulho,
            descricao: 'Explore um mundo vibrante sob as ondas. Nossas expedições de mergulho levam você aos recifes mais preservados da região, repletos de vida marinha colorida, tartarugas e corais exuberantes. Um santuário subaquático esperando por você.',
            check1: 'Batismo para iniciantes',
            check2: 'Certificação PADI disponível',
            check3: 'Fotografia subaquática profissional',
        },
    ]

    let lista = activities.map((item) =>{
        return(
            <div className='w-full h-full'>
                <div>
                    <img src={item.imagem} alt="" className='rounded-2xl w-full'/>
                    <h3 className='text-3xl mt-12'>{item.titulo}</h3>
                    <h1 className='mt-5'>{item.descricao}</h1>
                    <div className='flex flex-col gap-2 mt-7'>
                        <div className='text-sm items-center flex gap-1.5'>
                            <div className='text-blue-400'>
                                <i className=" fa-solid fa-circle-check"></i>
                            </div>
                            {item.check1}
                        </div>
                        <div className='text-sm items-center flex gap-1.5'>
                            <div className='text-blue-400'>
                                <i className=" fa-solid fa-circle-check"></i>
                            </div>
                            {item.check2}
                        </div>
                        <div className='text-sm items-center flex gap-1.5'>
                            <div className='text-blue-400'>
                                <i className=" fa-solid fa-circle-check"></i>
                            </div>
                            {item.check3}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    


    return (
        <section id="activities" className="h-full scroll-mt-[75px] lg:mt-[-75px] pt-25 z-1 relative border-2 border-red-500">
            <div className="flex flex-col  gap-3 items-center">
                <span className="text-blue-400 font-medium text-xs tracking-widest">EXPERIÊNCIAS</span>
                <h2 className="text-4xl">Nossas Atividades</h2>
                <div className='mt-3 mb-4 h-1 bg-blue-400 w-16'></div>
            </div>
            <div className='px-4 flex flex-col gap-8 mt-16'>{lista}</div>
        </section>
    )
}