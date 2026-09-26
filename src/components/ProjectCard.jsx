export default function ProjectCard({year, header, desc, used, link}) {
  return (
    <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
        <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{year}</p>
        <h3 class="mt-2 text-lg font-semibold">{header}</h3>
        <p class="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
        <p class="mt-4 text-sm text-stone-500">{used}</p>
        <a href={link} class="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">Check this out!</a>
    </article>
  )
}
