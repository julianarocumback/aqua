import Imagem1 from './img1.png'
import Imagem2 from './2.png'
import Imagem3 from './3.png'
import Imagem4 from './4.png'
import Imagem5 from './5.png'
import Imagem6 from './6.png'
import Imagem7 from './7.png'
import Imagem8 from './8.png'
import Imagem9 from './9.png'


export default function Gallery() {
    const imagens = [Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7, Imagem8, Imagem9]

    const galeria = imagens.map((imagem)=>{
        return (
            <div className='rounded-3xl overflow-hidden cursor-pointer lg:shrink-0 lg:basis-[calc((100%/3)-1.17rem)]'>
                <img className='rounded-2xl hover:transform hover:scale-110 transition-transform duration-300' src={imagem} alt="" />
            </div>
        )
    })


    return (
        <section id='gallery' className="bg-[#e5e7eb] h-full scroll-mt-[75px]">
            <div className="flex flex-col gap-3 items-center pt-25 z-1 relative pb-25 lg:mx-auto lg:w-3/5">
                <span className="text-blue-400 font-medium text-xs tracking-widest">VISUALIZE O PARAÍSO</span>
                <h2 className="text-4xl">Nossa Galeria</h2>
                <div className="flex flex-col gap-7 px-7 lg:px-0 mt-16 lg:flex-row lg:flex-wrap ">
                    {galeria}
                </div>
            </div>
        </section>
    )
}