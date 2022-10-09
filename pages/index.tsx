import type { NextPage } from 'next';

import CommentThread from '../components/CommentThread';
import { Competativness } from '../components/Competativness';
import { History } from '../components/History';
import { Spirit } from '../components/Spirit';
import { Volanteerism } from '../components/Volanteerism';
import { Who } from '../components/Who';

const Home: NextPage = () => (
  <div className="flex justify-center w-full">
    <main className="m-4 max-w-[900px] bg-[#35013F] bg-opacity-50 py-4 px-8 rounded-md text-slate-200">
      <Who />
      <Spirit />
      <Competativness />
      <Volanteerism />
      <History />
      <div className="mt-16">
        <CommentThread id="kaimana" />
      </div>
    </main>
  </div>
);

export default Home;
