import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export default function ListAppintment() {
  const history =   useHistory();
  const [data, setData] = useState([]);

  const loaddata = () => {
    const loaddata = JSON.parse(localStorage.getItem("users"));

    setData(loaddata)
  }

  useEffect(
    () => {
      loaddata()
    },
    [])

  // const handleDelete = (id) => {
  //   let loaddata = JSON.parse(localStorage.getItem("users"))

  //   let filterData = loaddata.filter((v, i) => v.id !== id);

  //   localStorage.setItem("users", JSON.stringify(filterData));
    
  //   setData(loaddata)

  // }

  // const handleEdit = (id) => {



  // }
  

  return (
    <section id="appointment" classname="appointment">
      <div classname="container">
        <div classname="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <NavLink to={"/BookAppointment"}>Book Appoinment</NavLink>
          </div>
          <div className="col-6">
            <NavLink to={"/ListAppintment"}>List Appoinment</NavLink>
          </div>
        </div>
      </div>
      <div> 
        {/* {
          data.map((d, i) => {
            return (
              <div className='row text-center'
              >
                <h5>{d.name}</h5>
                <h5>{d.email}</h5>
                <h5>{d.phone}</h5>
                <h5>{d.date}</h5>
                <h5>{d.department}</h5>
                <h5>{d.message}</h5>
                <button onClick={(() => handleDelete(d.id))}>Delete</button>
                <button onClick={(() => handleEdit(d.id))}>Edit</button>
              </div>
            )
          })
        } */}
      </div>
    </section>
  )
}
