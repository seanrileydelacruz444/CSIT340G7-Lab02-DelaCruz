export default function SectionHeading({title, subtitle})
{
    return(
        <>
            <h2 className = "text-2xl font-semibold tracking-tight">{title}</h2>
            <p className ="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">{subtitle}</p>
        </>
    );
}