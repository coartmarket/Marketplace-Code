import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CollectionList from '../../components/CollectionList';
import MainHeader from '../../components/MainHeader';
import './assets/styles.scss';

export function HomePage() {
  useEffect(() => {}, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <MainHeader />
      <div className="home-page-content">
        <CollectionList />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  /* loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func, */
};

export default HomePage;
