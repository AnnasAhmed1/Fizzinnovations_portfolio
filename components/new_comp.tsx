import React from 'react'
import ServiceDetailsCard from './service_details_card'
import ServiceDetailsCardHover from './service_details_card_hover'

const NewComp = () => {
  return (
    <div>
        <ServiceDetailsCard
        className={``}
        />
        <ServiceDetailsCardHover/>
    </div>
  )
}

export default NewComp