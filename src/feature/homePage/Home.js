import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../app/routes/Nav';
// import Articles from '../articles/getArticles/GetAllArticlesComponent';
import './Home.scss';

const Home = () => (
  <div>
    <header className="App-header">
      <Nav />
    </header>
    <div />
  </div>
);

export default withRouter(Home);
