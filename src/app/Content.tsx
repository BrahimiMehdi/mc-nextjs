
const Content = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const limmit = Math.random() * 5 + 1;
  const res = await fetch(`https://pokeapi.co/api/v2/ability/?limit=${limmit}`);
  const { results }: { results: results[] } = await res.json();
  return (
    <div className="grid w-full gap-12 max-w-6xl grid-cols-3">
      {results.map((poke, index) => (
        <div className="size-24 text-center grid place-items-center bg-cyan-600 rounded-lg" key={index}>
          {poke.name}
        </div>
      ))}
    </div>
  );
};

type results = {
  name: string;
  url: string;
};
export default Content;
