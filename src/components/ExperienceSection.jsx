import SectionHeader from "./SectionHeading";
import ExperienceTimeline from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeader title="Experience" subtitle="Where I spent my time learning"/>
        <ol className="mt-8 space-y-8 border-l border-stone-200">
            <ExperienceTimeline
                time="2024 – Present"
                title="BS Information Technology"
                subtitle="Cebu Institute of Technology – University"
                desc="Most of my learning came from here. I learned C, C++, Java, MySQL, GDScript, HTML, CSS, JavaScript, and currently I am learning React!"
            />

            <ExperienceTimeline
                time="2022 – 2024"
                title="Senior High School, ICT Strand"
                subtitle="Asian College of Technology - Main"
                desc="Learned the basic fundamentals of programming, mainly C#"
            />
            
        </ol>
    </section>
  );
}
