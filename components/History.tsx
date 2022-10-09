import { Polaroid } from './Polaroid';
import shoee from '../public/89809699_10111654030546161_8809472631314055168_n.jpg';

const text = `
Our team is largely built around giving people opportunities to play together that they don't get during the club season.  Many of our players play on competitive mens and womens teams.  We try to put together a mixed team a few times a year for fun tournaments with the goal to give us opportunities to play with the people we wouldn't otherwise have the opportunity to play with.
`;

export function History() {
  return (
    <div className="clear-both">
      <h1 className="text-4xl my-8">History</h1>
      <Polaroid {...shoee} caption="Celebrating the catch!" side="right" />
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
