import React from 'react'
import HeroBetila from '../Betilacomponent/HeroBetila';
import BetilaGallary from '../Betilacomponent/BetilaGallary';
import BetilaInfo from '../Betilacomponent/BetilaInfo';
import Ratting from '../Betilacomponent/Ratting';
import ReviewSection from '../Betilacomponent/ReviewSection';


function Betila() {
  return (
    <>
        <HeroBetila/>
        <BetilaGallary/>
        <BetilaInfo/>
        <Ratting/>
        <ReviewSection/>
        
    </>
  )
}

export default Betila;