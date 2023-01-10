import React from 'react';
import { Helmet } from 'react-helmet';
import './assets/styles.scss';

export default function FeaturePage() {
  return (
    <div className='artist-page'>
      <Helmet>
        <title>Artist Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      {/* ARTIST HEADER */}
      <div className="artist-page-content">ARTIST PAGE</div>
    </div>
  );
}
