import { Polaroid } from './Polaroid';
import shoee from '../public/IMG_20200217_155909.jpg';

const text = `
Our team is largely built around giving people opportunities to play together that they don't get during the club season.  Many of our players play on competitive men's or women's teams, but we love getting to play all together and to that end we try to put together teams for fun tournaments a couple times a year.
`;

export function History() {
  return (
    <div className="clear-both">
      <h1 className="text-2xl sm:text-4xl my-8">History</h1>
      <Polaroid {...shoee} caption="Boat race after finals!" side="right" />
      {text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line, i) => (
          <p className="mt-4 text-lg" key={i}>
            {line}
          </p>
        ))}
    </div>
  );
}
