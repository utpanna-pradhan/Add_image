import React, { useState } from 'react';
import img3 from './image/img3.png';
import img2 from './image/img2.png';

const Top = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const renderContent = () => {
    switch (activeTab) {
      case 'aboutMe':
        return <div className='p-2'>
          <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>


        </div>;
      case 'experiences':
        return <div className='p-2'>

          <p>
          I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>;
      case 'recommended':
        return <div className='p-2'>

          <p>
          I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg right_top">
      <div className='flex'>
      <div className='icons'>
      <img
      src={img3}
      className="w-100 shadow-1-strong rounded mb-4 "
      alt="Boat on Calm Water"
    />
      </div>
      <div className="flex top_nav ">
        <button
          className=  {`about_btn   flex-1 p-2 
             ${activeTab === 'aboutMe' ? 'bg-gray-500 text-white' : 'bg-black-200'}`
          }
          onClick={() => setActiveTab('aboutMe')}
        >
          About Me
        </button>
        <button
          className={`about_btn flex-1 p-2 ${activeTab === 'experiences' ? 'bg-gray-500 text-white' : 'bg-black-200'}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`about_btn flex-1 p-2 ${activeTab === 'recommended' ? 'bg-gray-500 text-white' : 'bg-black-200'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      </div>
     
<div className='flex'>
      <div className='icons'>
      <img
      src={img2}
      className="w-100 shadow-1-strong rounded mb-4 img2 "
      alt="Boat on Calm Water"
    />
      </div>
      <div className="mt-4">
        
        {renderContent()}
      </div>
      </div>
    </div>
  );
};

export default Top;
