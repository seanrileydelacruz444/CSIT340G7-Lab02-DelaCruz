export default function ContactLink({Title, link, text}) {
  return (
    <li>
        <span className="inline-block w-24 text-sm text-stone-500">{Title}</span>
        <a href={link}>{text}</a>
    </li>
  );
}
