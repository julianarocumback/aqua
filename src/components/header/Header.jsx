export default function Header() {
    const header = document.querySelector('#header')
    const aqua = document.querySelector('#aqua')
    const nav = document.querySelectorAll('.item')

    const menu = () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY != 0) {
                header.style.backgroundColor = 'white'
                aqua.style.color = 'black'
                nav.forEach((item)=>{
                    item.style.color = 'black'
                })

            } else {
                header.style.backgroundColor = 'transparent'
                aqua.style.color = 'white'
                nav.forEach((item)=>{
                    item.style.color = 'white'
                })
            }
        })
    }

    menu()
    return (
        <header id="header" className="flex w-full h-20 justify-between px-20 items-center fixed top-0 left-0 z-50 transition-all duration-300">

            {/* Mobile */}
            <div className="gap-2 flex items-center">
                <div className="text-blue-400 text-2xl">
                    <i className="fa-solid fa-water"></i>    
                </div>
                <span id="aqua" className="text-amber-50 text-2xl font-bold">AQUA</span>
            </div>

            {/* Desktop */}
            <nav >
                <div className="lg:hidden"><i className="fa-solid fa-bars"></i></div>
                <div className="hidden lg:block">
                    <div className="flex gap-4 items-center  text-1xl">
                        <a className="item" href="">Home</a>
                        <a className="item" href="">Atividades</a>
                        <a className="item" href="">Galeria</a>
                        <button className="bg-blue-500 text-amber-50 p-4 rounded-3xl h-5 flex items-center" href="">Reservar</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}