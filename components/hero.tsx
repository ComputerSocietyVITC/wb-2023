import { mono } from "./fonts"

export default function Hero(): JSX.Element {
    return (
        <main className="hero min-h-[85vh] flex flex-col items-center justify-center">
            <section className="flex flex-col items-center text-teal font-extrabold font-OffBitBoldDotTrial text-7xl md:text-6xl sm:text-6xl">
                <p>We are the</p>
                <p className="tracking-wider">IEEE Computer Society</p>
                <p>VIT Chennai</p>
            </section>
            <section className='py-2 text-xl md:text-xl sm:text-lg font-normal flex flex-col text-center w-3/5 text-white tracking-tight' style={mono.style}>
                IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create (sometimes Break!), Develop, and Explore. Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge. Come join us on this journey!
            </section>
        </main>

    )
}