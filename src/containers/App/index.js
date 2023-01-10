import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch ,Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage/Loadable';
import ArtistPage from '../../containers/ArtistPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import { path } from '../../constants/navigation.constant';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/shared.scss';
import '../../assets/scss/vendor/line-awesome/css/line-awesome.min.css';
import './assets/styles.scss';
import MainFooter from '../../components/MainFooter';

export default function App() {
  return (
    <div className='app-container'>
      <Helmet
        titleTemplate="%s - CoArt"
        defaultTitle="CoArt"
      >
        <meta name="description" content="CoArt application" />
      </Helmet>
      <Switch>
        <Route exact path={path.HOME} component={HomePage} />
        <Route path={path.ARTIST} component={ArtistPage} />
        <Route path={path.ARTIST_SECTION} component={ArtistPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <MainFooter />
    </div>
  );
}
