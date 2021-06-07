import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Bet With Friends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default HomePage;
