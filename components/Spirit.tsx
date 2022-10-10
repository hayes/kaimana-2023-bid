import { Polaroid } from './Polaroid';
import shoee from '../public/91706347_2796922907070250_7842086167636869120_n.jpg';

const text = `
We believe that spirit goes beyond high-five lines and spirit games.  On the field we want to emphasize sportsmanship and fair-mindedness, so that both teams can play the game we love and showcase the best of their abilities.  Off the field, we see these tournaments that bring people from all over the world as an opportunity to meet new people and learn from other communities, and we want to be as intentional about making those connections as we are about the way we play.

We strive to avoid associated aspects of "spirit" that can be exclusionary or uncomfortable - we won't force participation in activities and we consider drinking to be a strictly opt-in activity.  We want everyone to have an experience they are excited about, not one that they feel obligated to participate in.

While this team does have a strong focus on competitiveness, many of us also have a long history of playing on teams known for their spirit:

We have many players who have won or been fan favorites for spirit at Kaimana in the past on teams like the Diva Cup Dragons, The Pastriarchy, and Gothic Wonderland.  A few of us have also won spirit at some other large tournaments, like Sunbreak (Emergency Bourbon).
`;

export function Spirit() {
  return (
    <div className="clear-both">
      <h1 className="text-2xl sm:text-4xl my-8">Spirit</h1>
      <Polaroid {...shoee} caption="Shoeys with the Boyz! (Kiamana 2020)" side="left" />
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
