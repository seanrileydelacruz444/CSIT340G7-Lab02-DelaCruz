import SectionHeader from "./SectionHeading";
import MySkillsBubbles from "./SkillTag";

export default function SkillSection() 
{
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeader title="Skills" subtitle="I know how to operate:"/>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
                <h3 className="text-sm font-medium text-stone-500">Languages</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    <MySkillsBubbles name="HTML"/>
                    <MySkillsBubbles name="CSS"/>
                    <MySkillsBubbles name="JavaScript"/>
                    <MySkillsBubbles name="Java"/>
                    <MySkillsBubbles name="C"/>
                    <MySkillsBubbles name="C++"/>
                    <MySkillsBubbles name="C#"/>
                    <MySkillsBubbles name="GDScript"/>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    <MySkillsBubbles name="React(somewhat)"/>
                    <MySkillsBubbles name="Tailwind CSS(somewhat)"/>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-stone-500">Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    <MySkillsBubbles name="Git"/>
                    <MySkillsBubbles name="VS Code"/>
                    <MySkillsBubbles name="mySQL"/>
                    <MySkillsBubbles name="Figma"/>
                    <MySkillsBubbles name="Canva"/>
                    <MySkillsBubbles name="LibreSprite | Aseprite"/>
                    <MySkillsBubbles name="ClipStudio Paint"/>
                    <MySkillsBubbles name="Adobe Photoshop & Illustrator"/>
                    <MySkillsBubbles name="DaVinci Resolve"/>
                </div>
            </div>
        </div>
    </section>
  );
}
