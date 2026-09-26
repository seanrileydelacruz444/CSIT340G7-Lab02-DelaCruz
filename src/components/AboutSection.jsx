import SectionHeader from "./SectionHeading";
import AboutMeFacts from "./Fact";

export default function AboutSection()
{
    return(
        <>
            <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <SectionHeader title="About Me" subtitle="Where do I start?"/>
                <p className ="mt-6 max-w-2xl leading-relaxed text-stone-700">
                    I grew up in Cebu City, but my father's side is from Luzon, Manila so from time-to-time I spend my time there on
                    vacations. I honestly like it more in Cebu though, everything is slower—somewhat, it's still a city so its especially busy in some areas, but not as busy
                    as something like Manila. 
                    
                    <br /><br />

                    I regard myself as a person who is naturally creative, and one of the ways I express
                    it is into art! Not necessarily the traditional form of art like painting or drawing, I also am very interested
                    in the arts of the mind in all sorts—like think of engineering and the pinnacle of logistical problem-solving to
                    understanding the pysche and its seemingly infinite potential capacity to feel and think.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    <AboutMeFacts title="Course" desc="BS Information Technology"/>
                    <AboutMeFacts title="Year Level" desc="Third Year"/>
                    <AboutMeFacts title="School" desc="CIT-U"/>
                    <AboutMeFacts title="Based in" desc="Cebu City"/>
                </dl>
            </section>
        </>
    );
}