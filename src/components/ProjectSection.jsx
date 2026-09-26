import MyProjects from "./ProjectCard"
import SectionHeader from "./SectionHeading";

export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeader title="Projects" subtitle="Things I have had an influnce on"/>
        <ol className="mt-8 space-y-8 border-l border-stone-200">
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <MyProjects 
                    year="2025"
                    header="About Me in React"
                    desc="My first exposure to a first-hand development in React!"
                    used="React - Tailwind CSS"
                    link="https://github.com/seanrileydelacruz444/DelaCruz_AboutMe"
                />
                <MyProjects 
                    year="2025"
                    header="Cake-Maker"
                    desc="A game about making a cake that we made in Godot, it is kind of a simple game with art that I made myself, but I had fun making it with other people"
                    used="Godot - GDScript - LibreSprite"
                    link="https://github.com/ayella-p/Cake-Maker"
                />
                <MyProjects 
                    year="2025"
                    header="Forest of the Broken Crown"
                    desc="A game that we made for our Object-Oriented Programming class, unlike Cake-Maker, this game is a little bigger and the art is more expansive with actual animations that I also made myself! we had an entire semester to make this so it was really fun but it came with alot of stress and over all trouble while making it."
                    used="Java - LibreSprite"
                    link="https://github.com/RiasWyrtalius/Forest-of-the-Broken-Crown"
                />
                <MyProjects 
                    year="2026"
                    header="Art Portfolio"
                    desc="I only recently started to compile my artworks this year so it's not much and does not really have anything going for it self, but nonetheless I am pretty happy with how they turned out."
                    used="ClipStudio Paint - Paper"
                    link="https://drive.google.com/drive/folders/1A3VecyBtXgnzY6ixCUiXVPX98U0E5Mes"
                />
            </div>
        </ol>
    </section>
  );
}
