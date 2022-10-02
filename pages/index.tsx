import type { NextPage } from 'next';
import Head from 'next/head';

import CommentThread from '../components/CommentThread';

import { Header } from '../components/Header';

const Home: NextPage = () => (
  <div className="mx-auto max-w-[700px] p-4">
    <Head>
      <title>Kaimana Koed</title>
      {/* <meta name="description" content="Spooky scary internet themed frisbee memes" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header page="home" />
    <main>some content here</main>
    <div className="mt-16">
      <CommentThread id="example" />
    </div>
  </div>
);

export default Home;
