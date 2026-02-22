import { useState, useEffect } from "react"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    const headerClass = scrolled
    ? 'bg-white shadow-md text-black'
    : 'bg-transparent text-white'

    const logoClass = scrolled ? "text-black" : "text-white";
    
    return (
        <header className={`${headerClass} flex w-full h-20 justify-between px-10 md:px-20 items-center fixed top-0 left-0 z-50 transition-all duration-300`}>

            {/* Mobile */}
            <div className="gap-2 flex items-center">
                <div className="text-blue-400 text-2xl">
                    <i className="fa-solid fa-water"></i>    
                </div>
                <span id="aqua" className={`${logoClass} text-amber-50 text-2xl font-bold`}>AQUA</span>
            </div>

            {/* Desktop */}
            <nav >
                <div className="lg:hidden text-2xl"><i className="fa-solid fa-bars"></i></div>
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