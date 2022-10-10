import { Polaroid } from './Polaroid';
import shoee from '../public/89809699_10111654030546161_8809472631314055168_n.jpg';

const text = `
While this team hasn't existed in this exact incarnation, our core group of players have played together at a lot of tournaments:
`;

export function Competetiveness() {
  return (
    <div className="clear-both">
      <h1 className="text-2xl sm:text-4xl my-8">Competitiveness</h1>
      <Polaroid {...shoee} caption="Goooaaal!!!" side="right" />
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
        <li>Kaimana 2020 (won in the open division, 2nd in women&apos;s)</li>
        <li>Kaimana 2019 (2nd in the open division)</li>
        <li>Sunbreak 2019 (mixed, 3rd place)</li>
        <li>Log Jam 2018, 2019, 2022 (mixed, won all three years)</li>
        <li>Gandy Goose 2019 (mixed, 3rd place)</li>
      </ul>
    </div>
  );
}
