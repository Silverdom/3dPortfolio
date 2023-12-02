import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center py-5'>
      { text }
    </p>
    <Link to={ link } className='neo-brutalism-white neo-btn'>
      { btnText }
      <img src={ arrow } className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Soham</span>👋
      <br />
      A Software Engineer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Worked on different projects"
      link="/projects"
      btnText="View Projects"
    />
  ),
  4: (
    <InfoBox
      text="Feel free to contact me"
      link="/contact"
      btnText="Lets Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  console.log(renderContent[currentStage]);
  return renderContent[currentStage];
}

export default HomeInfo
