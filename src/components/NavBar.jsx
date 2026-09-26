import NavLink from "./NavLink";

export default function NavBar() 
{
    return(
        <nav className= "sticky top-0 z-10 border-b border-stone-200 bg-white">
            <div className = "max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">

                <a href = "#top" className ="font-semibold">Sean Riley Dela Cruz</a>

                <div className = "flex gap-6 text-sm text-stone-600">
                    <NavLink href ="#about" name="About"/>
                    <NavLink href ="#skills" name ="Skills"/>
                    <NavLink href ="#projects" name ="Projects"/>
                    <NavLink href ="#experience" name ="Experience"/>
                    <NavLink href ="#contact" name="Conctact"/>
                </div>
            </div>
        </nav>
    );
}