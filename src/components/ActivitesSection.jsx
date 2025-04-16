import React from 'react'
import ActiviteCard from '../resuseable/ActiviteCard';

function ActivitesSection() {
  return (
    <>
        <div>
            <ActiviteCard
                avatar='avatr.png'
                name='Leslie Sako'
                location='Toronto, Canada'
                date='09/11/2023'
                ratingIcon='star.png'
                feedback={[
                     "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
                     "Another short paragraph for demonstration."
                ]}
                images={['sako1.png', 'sako2.png','sako3.png']}
                linkText='Discover'
                linkHref='#'
            />
        </div>
    
    </>
  )
}

export default ActivitesSection;