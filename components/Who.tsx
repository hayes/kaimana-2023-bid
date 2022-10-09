import { Polaroid } from './Polaroid';
import shoee from '../public/91706347_2796922907070250_7842086167636869120_n.jpg';

const whoText = `
We are just a group of friends from Portland who love to play ultimate!  Some of us have become regulars at Kaimana and Hopu, and for some this will be their first opportunity to experience the amazing Hawaiian ultimate community.  The male-matching side of our team will largely consist of the Trailbladezers from Kaimana 2019, but the core of our team has been playing together in various Portland city leagues and northwest party tournaments for years.

Our goal when creating a team that shows up for every part of the tournament with the intention.  We believe believe spirit and competitiveness are NOT opposites, and we want to win the party as much as we want to win every point we play.

{ something about birds not being real}
`;

export function Who() {
  return (
    <div className="clear-both">
      <h1 className="text-4xl my-8">Who are we?</h1>
      <Polaroid {...shoee} caption="Team Shoey at Kaimana 2020!" side="right" />
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
