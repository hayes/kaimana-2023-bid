import { Polaroid } from './Polaroid';
import shoee from '../public/89950861_10111654042217771_1306789412360683520_n.jpg';

const text = `
While this team hasn't existed in this exact incarnation, our core group of players have played together at a lot of tournaments:
`;

export function Competativness() {
  return (
    <div className="clear-both">
      <h1 className="text-4xl my-8">Competativeness</h1>
      <Polaroid {...shoee} caption="Prepping for a boat race after winning finals!" side="right" />
      {text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line, i) => (
          <p className="mt-4 text-lg" key={i}>
            {line}
          </p>
        ))}
      <ul className="list-disc m-4">
        <li>Kaimana 2020 (won in the open division)</li>
        <li>Kaimana 2019 (2nd in the open division)</li>
        <li>Log jam (mixed) won 2018, 2019, 2022</li>
        <li>3rd at Gandy Goose (mixed tournament)</li>
      </ul>
    </div>
  );
}
