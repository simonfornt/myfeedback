import React from 'react'
import HeroBetila from '../Betilacomponent/HeroBetila';
import BetilaGallary from '../Betilacomponent/BetilaGallary';
import BetilaInfo from '../Betilacomponent/BetilaInfo';
import Ratting from '../Betilacomponent/Ratting';
import ReviewSection from '../Betilacomponent/ReviewSection';
import Discover from '../Betilacomponent/Discover';


function Betila() {
  return (
    <>
        <HeroBetila/>
        <BetilaGallary/>
        <BetilaInfo/>
        <Ratting/>
        <ReviewSection/>
        <Discover/>
        
    </>
  )
}

export default Betila;