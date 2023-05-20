import "./propertylist.css"
import { FaRegImages } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { useEffect, useState } from "react";
import axios from 'axios';
const PropertyList = ( ) => {

  const soldstyle = {
    color: '#416899',
    background: '#F5FAF5',

  }

  const [propertydetails ,setpropertydetails ]=useState([])

 useEffect(()=>{

  axios.get('http://localhost:5000/getpropertylist').then((response)=>{
            console.log(response.data.result);
            setpropertydetails(response.data.result);
            console.log(propertydetails,'information')
    }).catch(error=>console.log(error))
   
 })

  return (
    <>
      <div className='propertycontainer'>
        <table>
          <thead>
            <tr className='tablehead' >
              <th className="thtext ppdidhead">PPD Id</th>

              <th className="thtext">Image</th>

              <th className="thtext">Property</th>

              <th className="thtext">Contact</th>

              <th className="thtext">Area</th>

              <th className="thtext">Views</th>

              <th className="thtext">Status</th>

              <th className="thtext thdayleft">Days Left</th>

              <th className="thtext actiontxt">Action</th>
            </tr>
          </thead>
          <tbody>
            {propertydetails.map((propertydata, i) => (
              <tr className='tabledata' key={i}><td className="tdtext ppdidtxt">{propertydata._id}</td>
                <td className="tdtext"><FaRegImages /></td>
                <td className="tdtext">{propertydata.propertyType}</td>
                <td className="tdtext tdmobile">{propertydata.mobile}</td>
                <td className="tdtext">{propertydata.totalArea}</td>
                <td className="tdtext">{propertydata.views}</td>
                <td className="tdtext tdstatus" style={soldstyle}>{propertydata.Status}</td>
                <td className="tdtext tddays">{propertydata.daysLeft}</td>
                <td className="tdtext">

                  <div className="actionbtn">
                    <AiFillEye />
                    <MdEdit />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </>
  )
}
export default PropertyList