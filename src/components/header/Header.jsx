import { useState, useEffect } from "react"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    const headerClass = scrolled
    ? 'bg-white shadow-md text-black'
    : 'bg-transparent text-white'

    const logoClass = scrolled ? "text-black" : "text-white";


    // -----------------------------------------------
    
    const [toggle, setToggle] = useState('hidden')

    function handleToggle() {
        if (toggle === 'hidden') {
            setToggle('block')
        } if (toggle === 'block') {
            setToggle('hidden')
        }   
    }

    return (
        <header className={`${headerClass} flex w-full h-20 justify-between px-10 md:px-20 items-center fixed top-0 left-0 z-40 transition-all duration-300`}>
            <div className="gap-2 flex items-center">
                <div className="text-blue-400 text-2xl">
                    <i className="fa-solid fa-water"></i>    
                </div>
                <span id="aqua" className={`${logoClass} text-amber-50 text-2xl font-bold`}>AQUA</span>
            </div>


            <nav>
                {/* Mobile */}
                <div className="lg:hidden text-2xl relative cursor-pointer" onClick={handleToggle}><i className="fa-solid fa-bars"></i></div>
                <div className={`absolute ${toggle} h-screen w-3/5 right-0 top-0 border-2 bg-white z-50 px-6 py-20 gap-6 lg:hidden transition-all duration-300 border-none shadow-md`}>
                    <div className="flex flex-col gap-6" onClick={handleToggle}>
                        <div className="text-black"><span className="text-blue-500"><i className="fa-solid fa-house"></i></span> Home</div>
                        <div className="text-black"><span className="text-blue-500"><i className="fa-solid fa-sailboat"></i></span> Atividades</div>
                        <div className="text-black"><span className="text-blue-500"><i className="fa-solid fa-image"></i></span> Galeria</div>
                        <div className="h-0.5 w-full bg-black/30 rounded-b-full"></div>
                        <div className="text-white bg-blue-500 rounded-3xl px-2 py-2">Reservar</div>
                        <div className="text-black absolute right-9 text-2xl top-6"><i class="fa-solid fa-xmark"></i></div>
                        
                    </div>
                </div>

                

                {/* Desktop */}
                <div className="hidden lg:block">
                    <div className="flex gap-4 items-center  text-1xl">
                        <a className={`${logoClass}`} href="#">Home</a>
                        <a className={`${logoClass}`} href="#activities">Atividades</a>
                        <a className={`${logoClass}`} href="#gallery">Galeria</a>
                        <button className="bg-blue-500 text-amber-50 p-4 rounded-3xl h-5 flex items-center cursor-pointer" href="#reserve">Reservar</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}