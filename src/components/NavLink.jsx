export default function NavLink({href, name})
{
    return(
        <a href = {href} className = "hover: text-stone-900">
            {name}
        </a>
    );
}