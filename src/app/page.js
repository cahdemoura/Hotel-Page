import Image from "next/image"

export default () => {
    return (
        <main className="bg-gray-100">

            <title>Hotel - Home</title>

            <header className="container flex items-center justify-between mx-auto px-4 h-24">
                <div className="font-black">
                    LOGO
                </div>

                <ul>
                    <li className="text-sm font-semibold hidden md:space-x-8  xl:block">
                        <a href="" className="text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a>
                        <a href="" className="text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</a>
                        <a href="" className="text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
                        <a href="" className="text-gray-600 hover:text-gray-800 hover:underline">Contato</a>
                    </li>
                </ul>
            </header>

            <section className="container mx-auto relative flex items-center">
                <Image
                    src={'/images/la-torre-resort-capa.jpg'}
                    width={'1920'}
                    height={'450'}
                    style={{
                        width: '100%',
                        height: '450px',
                        opacity:'80%',
                        objectFit: 'cover',
                        borderRadius:'6px'
                    }}
                    className=" mx-auto "
                />

                <div className="w-full text-white text-center absolute mx-auto px-4 space-y-7">
                    <div>
                        <h1 className="text-3xl">Onde você quer ir?</h1>
                        <p className="text-base">Escolha o estado e cidade para achar os melhores resorts</p>
                    </div>

                    <div className="p-1">
                        <form action="" className="flex flex-wrap justify-center gap-4">
                            <select className="bg-gray-50 flex-shrink-0 text-gray-500 px-3 py-2 border border-gray-300 rounded-md">
                                <option value>Escolha o estado</option>
                            </select>

                            <select className="bg-gray-50 flex-shrink-0 text-gray-500 px-3 py-2 border border-gray-300 rounded-md">
                                <option value>Escolha a cidade</option>
                            </select>

                            <button className="inline-flex flex-shrink-0 bg-orange-500 text-yellow-900 font-medium px-3 py-2 rounded-md">
                                <svg className="w-6 h-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Pesquisar resorts
                            </button>
                        </form>


                    </div>
                </div>
            </section>

            <section>
                <div className="container flex flex-col md:flex-row justify-center items-center mx-auto px-4 space-y-4 text-gray-600">
                    <div className="container flex-grow mx-auto px-4 py-10">
                        <h5 className="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</h5>
                        <h3 className="text-2xl">Ecoresort Prai do Forte Bahia</h3>
                        <h5 className="text-sm text-gray-400 font-medium">Hotel qualidade 5 estrelas</h5>
                        <p className="text-sm text-gray-400 mt-4 font-medium">Nulla mollit exercitation irure non qui labore consectetur et occaecat pariatur reprehenderit cillum minim. Laboris duis sunt anim deserunt. Id non nostrud tempor nisi do.</p>
                        <p className="text-sm text-gray-400 mt-3 mb-4 font-medium">Magna consectetur officia ea ullamco id mollit anim laboris. Nulla mollit exercitation irure non qui labore consectetur et occaecat pariatur reprehenderit cillum minim.</p>
                        <button className="group flex items-center justify-center bg-orange-500 text-yellow-900 font-medium px-3 py-2 rounded-md">
                            Solicitar reserva
                            <svg className="w-6 h-6 ml-2 group-hover:ml-6 group-hover:{transition duration-500 ease-in-out} " aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className=" md:flex-shrink-0 ml-4 ">
                        <Image
                            src={'/images/feature.jpg'}
                            width={'453'}
                            height={'285'}
                            style={{
                                borderRadius: "6px"
                            }} />

                        <div className="flex justify-center gap-2 mt-2">
                            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-8 mb-8">
                <div className="container mx-auto px-4 ">
                    <div>
                        <h3 className="text-2xl text-gray-500 font-semibold text-center mb-8">Conheça mais resorts</h3>

                        <div className="grid grid-cols-4 grid-rows-2 gap-6 mb-8 h-[400px]">

                            <div className="row-span-2 col-span-2 relative hover:cursor-pointer">
                                <Image
                                    src={'/images/hotel-4.jpeg'}
                                    width={'900'}
                                    height={'600'}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: "6px"
                                    }} />

                                <div className="absolute w-full bottom-0 h-12">
                                    <Image
                                        src={'/images/image-shadow.png'}
                                        width={'1140'}
                                        height={'52'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: "6px",
                                        }} />
                                    <div className="absolute bottom-0 px-4 py-1 text-white font-bold z-50">Vivá Porto de Galinhas</div>
                                </div>
                            </div>

                            <div className="col-span-2 relative">
                                <Image
                                    src={'/images/hotel-2.jpeg'}
                                    width={'1024'}
                                    height={'575'}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: "6px"
                                    }} />

                                <div className="absolute w-full bottom-0 h-12">
                                    <Image
                                        src={'/images/image-shadow.png'}
                                        width={'1140'}
                                        height={'52'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: "6px",
                                        }} />
                                    <div className="absolute bottom-0 px-4 py-1 text-white font-bold z-50">Summerville Beach Resort</div>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src={'/images/hotel-3.jpeg'}
                                    width={'1280'}
                                    height={'720'}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: "6px"
                                    }} />

                                <div className="absolute w-full bottom-0 h-12">
                                    <Image
                                        src={'/images/image-shadow.png'}
                                        width={'1140'}
                                        height={'52'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: "6px",
                                        }} />
                                    <div className="absolute bottom-0 px-4 py-1 text-white font-bold z-50">Pratagy Beach Resort</div>
                                </div>
                            </div>

                            <div className="relative ">
                                <Image
                                    src={'/images/hotel-1.jpeg'}
                                    width={'840'}
                                    height={'460'}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: "6px"
                                    }} />

                                <div className="absolute w-full bottom-0 h-12">
                                    <Image
                                        src={'/images/image-shadow.png'}
                                        width={'1140'}
                                        height={'52'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: "6px",
                                        }} />
                                    <div className="absolute bottom-0 px-4 py-1 text-white font-bold z-50">Sauípe Premium Sol</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-2 border-gray-300">
                <div className="container mx-auto p-4 flex items-center justify-between ">
                    <div className="font-black">FOOTER</div>
                    <div className="flex space-x-4">
                        <Image
                            src={'/images/icon-facebook.png'}
                            width={'25'}
                            height={'25'}
                            style={{

                            }} />

                        <Image
                            src={'/images/icon-instagram.png'}
                            width={'25'}
                            height={'25'}
                            style={{

                            }} />
                    </div>

                </div>
            </section>

        </main >
    )
}