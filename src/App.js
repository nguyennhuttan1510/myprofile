/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import './App.css';
import MenuSideBar from './Components/MenuSideBar';
import CardGreeting from './Components/CardGreeting';
import InfoPerson from './Components/InfoPerson';
import CardProject from './Components/CardProject';
import CardIndexPerson from './Components/CardIndexPerson';
import CardSkill from './Components/CardSkill';
import CardEdu from './Components/CardEdu';
import CardExperience from './Components/CardExperience';
import CardRecentWork from './Components/CardRecentWork';
import CardBlog from './Components/CardBlog';
import CardContact from './Components/CardContact';
const App = () => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </a>
        <MenuSideBar />
        <div id="colorlib-main">
          <CardGreeting />
          <InfoPerson />
          <CardProject />
          <CardIndexPerson />
          <CardSkill />
          <CardEdu />
          <CardExperience />
          <CardRecentWork />
          <CardContact />
        </div>
      </div>
    </div>
  );
};

export default App;
