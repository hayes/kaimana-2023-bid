import { Polaroid } from './Polaroid';
import shoee from '../public/IMG2731808062952733596.jpg';

const whoText = `
We're just a group of friends from Portland who love to play ultimate!  Some of us have become regulars at Kaimana and Hopu, and for some this will be their first opportunity to experience the amazing Hawaiian ultimate community.  The male-matching side of our team will largely consist of the Trailbladezers from Kaimana 2019 and 2020, but the core of our team has been playing together in various Portland city leagues and Pacific Northwest party tournaments for years.

Our goal is to create a team that shows up hard for every part of the tournament, from the field to the dance floor.  We believe spirit and competitiveness are NOT mutually exclusive, and we want to win the party as much as we want to win every point we play.  We believe in big hucks, big bids, and big skies.

What don't we believe in?

Birds.
`;

export function Who() {
  return (
    <div className="clear-both">
      <h1 className="text-2xl sm:text-4xl my-8">Who are we?</h1>
      <Polaroid {...shoee} caption="Log Jam 2019 Champs!" side="right" />
      {whoText
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
