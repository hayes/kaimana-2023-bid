import { Polaroid } from './Polaroid';
import shoee from '../public/YCC_RD_20220806180542_5347.jpg';

const text = `
At past Kaimanas we've taken a variety of different volunteer shifts - trash collection, water, serving dinner in full goth regalia -  but we are always eager to help out more.  For many of us, Kaimana has been one of the most important events of the year and we would do almost anything to help keep it running.  We don't know the best ways to contribute, but would be happy to step up however we can. We've also taken on volunteer duties at other tournaments, like serving drinks and cleaning up after meals at Log Jam and even scorekeeping at Nationals.  Additionally, a number of our players are coaches in Portland at the youth and/or college level.
`;

export function Volanteerism() {
  return (
    <div className="clear-both">
      <h1 className="text-2xl sm:text-4xl my-8">Volunteerism</h1>
      <Polaroid {...shoee} caption="Coaching the Oregon YCC team" side="left" />
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
