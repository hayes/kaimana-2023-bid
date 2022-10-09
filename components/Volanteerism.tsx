import { Polaroid } from './Polaroid';
import shoee from '../public/54519757_2094192830676598_4988373393523867648_n.jpg';

const text = `
We don't have a strong history of Volunteerism at Kaimana or other tournaments beyond the basic things things like serving food, trash collection and field setup, but we do have good representation of Portland's youth coaches on our team, and we are always eager to help out more at Kaimana to make it happen.  For many of us Kaimana has been one of the most important events of the year, and we would do almost anything to help keep it running.  We don't know the best ways to contribute, but would be more than eager to step up however we can.
`;

export function Volanteerism() {
  return (
    <div className="clear-both">
      <h1 className="text-4xl my-8">Volunteerism</h1>
      <Polaroid {...shoee} caption="I <3 Torronto + Torrento is eh.." side="left" />
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
