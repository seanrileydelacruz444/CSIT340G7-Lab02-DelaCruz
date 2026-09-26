export default function Fact({title, desc}) 
{
  return (
    <>
        <div>
            <dt className="text-sm text-stone-500">{title}</dt>
            <dd className="mt-1 font-medium">{desc}</dd>
        </div>
    </>
  );
}
