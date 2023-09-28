import { grotesk } from "./fonts";

interface INavProps {
    name: string;
    link: string;
}

let NavComponent = (props: INavProps) => {
    return (
        <a href={props.link} className="hover:bg-zinc-200 hover:rounded px-4 text-black bg-white">{props.name}</a>
    )
}

export default function Navbar(): JSX.Element {
    return (
        <nav className="flex px-8 justify-between w-full">
            <a className="h-14 w-14 m-4" href="/">
                <img src="/white.png" alt="IEEE Logo" />
            </a>
            <section className={`h-10 gap-2 w-fit flex pr-2 items-center text-lg font-semibold tracking-tight bg-white text-black rounded-b-md sm:hidden ${grotesk.className}`}>
                <a className="flex items-center bg-black px-4 text-white h-full w-full rounded-bl-md">Team</a>
                    <NavComponent name="About" link="/about" />
                <NavComponent name="Events" link="/events" />
                <NavComponent name="Contacts" link="/contacts" />
                <NavComponent name="Blogs" link="/blogs" />
            </section>
        </nav>
    )
}