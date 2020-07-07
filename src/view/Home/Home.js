import React from 'react';
import MenuSideBar from '../../Components/MenuSideBar/MenuSideBar';
import CardGreeting from '../../Components/CardGreeting/CardGreeting';
import InfoPerson from '../../Components/InfoPerson/InfoPerson';
import CardProject from '../../Components/CardProject/CardProject';
import CardIndexPerson from '../../Components/CardIndexPerson/CardIndexPerson';
import CardSkill from '../../Components/CardSkill/CardSkill';
import CardEdu from '../../Components/CardEdu/CardEdu';
import CardExperience from '../../Components/CardExperience/CardExperience';
import CardContact from '../../Components/CardContact/CardContact';

const Home = (props) => {
  return (
    <>
      <MenuSideBar />
      <div id="colorlib-main">
        <CardGreeting />
        <InfoPerson />
        <CardProject />
        <CardIndexPerson />
        <CardSkill />
        <CardEdu />
        <CardExperience />
        <CardContact />
      </div>
    </>
  );
};

export default Home;
