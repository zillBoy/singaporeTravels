import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import Cards from './components/Cards';
import ThingsToDo from './components/ThingsToDo';
import TravelSection from './components/TravelSection';
import VideoSection from './components/VideoSection';
import Contacts from './components/Contacts';


class App extends Component {
  render() {
    return(
      <div>
        <MainHeader />
        <Cards />
        <ThingsToDo />
        <TravelSection  image="swimming.png" heading="NATURE" />
        <VideoSection />
        <TravelSection image="culture.jpg" heading="CULTURE" />
        <Contacts />
      </div>
    );
  }
}

export default App;