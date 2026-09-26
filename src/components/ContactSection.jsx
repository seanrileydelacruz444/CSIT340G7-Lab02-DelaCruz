import SectionHeader from "./SectionHeading";
import ContactMeDesc from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeader title="Contact Me" subtitle="Say hi if you are interested! I probably would not bite"/>
        <ul className="mt-8 space-y-3">
            <ContactMeDesc
            Title="Email"
            link="mailto:seanrileydelacruz782@gmail.com"
            text="seanrileydelacruz782@gmail.com"
            />    

            <ContactMeDesc
                Title="Constitutional Email"
                link="mailto:seanriley.delacruz@cit.edu"
                text="seanriley.delacruz@cit.edu"
            />

            <ContactMeDesc
                Title="GitHub"
                link="https://github.com/seanrileydelacruz444"
                text="github.com/seanrileydelacruz444"
            />
        </ul>
    </section>
  )
}
