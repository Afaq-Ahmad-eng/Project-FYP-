import React from 'react'
import Tripdata from './Tripdata'
import Trip1 from '../Assets/8.jpg'
import Trip2 from '../Assets/9.jpg'
import Trip3 from '../Assets/13.jpg'


function Trip(props) {
  return (
    <div className='trip'>
    <h1>Rcent Trips </h1>
    <p>u can discover diffenert area through google map</p>
    <div className='tripcard'>
        <Tripdata 
        image= {Trip1}
        heading="Trip in area name"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce ullamcorper, eros eget cursus volutpat, erat libero tempus libero, id facilisis quam lacus eget dolor. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas its another compnent by using props."
        
        />

<Tripdata 
        image= {Trip2}
        heading="Trip in area name"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce ullamcorper, eros eget cursus volutpat, erat libero tempus libero, id facilisis quam lacus eget dolor. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas its another compnent by using props."
        
        />
    <Tripdata 
        image= {Trip3}
        heading="Trip in area name"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce ullamcorper, eros eget cursus volutpat, erat libero tempus libero, id facilisis quam lacus eget dolor. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas its another compnent by using props."
        
        />        
    </div>
      
    </div>
  )
}

export default Trip
