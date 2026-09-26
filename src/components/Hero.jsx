export default function Hero()
{
    return(
        <>
            <header id="top" class="max-w-4xl mx-auto px-6 pt-20 pb-16 scroll-mt-16">
                <p className="text-sm font-medium text-stone-500">Greetings! I am</p>
                <h2 className="mt-2 text-5xl font-semibold tracking-tight">Sean Riley Dela Cruz</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
                    A third year IT student who likes to make codes for himself to improve and maybe impress some people.
                    <br /><br />
                    I also indulge art like digital painting and some traditional art as well.
                    <br /><br />
                    I also am very interested in arts diverging from engineering to even psychology!
                </p>

                <div className="mt-8 flex gap-3">
                    <a href="#projects" class="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700">See my projects</a>
                    <a href="#contact" class="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium hover:bg-stone-50">Contact me</a>
                </div>
            </header> 
        </>
    );
}