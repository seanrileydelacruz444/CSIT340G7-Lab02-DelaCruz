export default function TimelineItem({time, title, subtitle, desc}) {
  return (
    <li className="pl-6">
        <p className="text-sm text-stone-500">{time}</p>
        <h3 className="mt-1 font-semibold">{title}</h3>
        <p className="text-sm text-stone-600">{subtitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
    </li>
  );
}
