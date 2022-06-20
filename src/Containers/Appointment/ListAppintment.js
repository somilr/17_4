import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListAppintment() {
  const [data, setData] = useState([]);

  return (
<section id="appointment" classname="appointment">
  <div classname="container">
    <div classname="section-title">
      <h2>Make an Appointment</h2>
      <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
    </div>
    <div classname="row ">
      <div classname="col-6 text-center ">
        <NavLink to={"/BookAppointment"}>BookAppoinment</NavLink>
      </div>
      <div classname="col-6">
       <NavLink to={"/ListAppointment"}>List Appointment </NavLink>
      </div>
    </div>
  </div>
  <div>
    
  </div>
</section>


  )
}
