import NavLink from "./NavLink"

const LINKS = [
    {
        name: "Home",
        href: "#home"
    }, {
        name: "About",
        href: "#About"
    },{
        name: "Sectin",
        href: "#Section"
    }
];

LINKS.

export default function NavBar() {
    return (
        <>
            <nav>
                {
                    LINKS.map((link, i) => {
                        return <NavLink key={`${link.name}`} href={link.href} text={link.name} />
                    })
                }
            </nav>
        </>
    )
}
