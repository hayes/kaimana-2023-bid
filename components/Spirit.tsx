import { Polaroid } from './Polaroid';
import shoee from '../public/18921688_10103775083414371_8236959066900225041_n.jpg';

const text = `
We believe that spirit goes beyond games and high-fives after a game.  On the field we want to emphasize more traditional sportsmanship and fair-mindedness to allow both teams to showcase their talent and play the game we all love to the best of our abilities.  Off the field, we see these tournaments that bring people from all over the world as an opportunity to meet new people and learn from other communities, and we want to be as intentional about making those connections as we are about the way we play.

While this team has a strong focus on competitiveness many of us have a long history of playing on teams known for their spirit:

We have many players who have won or been runners-up for spirit at Kaimana in the past on teams like: The DivaCup Dragons, The Pastryarchy, and Gothic Wonderland.  A few of is have also won spirit at some other large tournaments like Sunbreak/Potlatch (Emergency Bourbon).
`;

export function Spirit() {
  return (
    <div className="clear-both">
      <h1 className="text-4xl my-8">Spirit</h1>
      <Polaroid {...shoee} caption="DivaCup Dragons Dancing" side="left" />
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
