import "../propertyList/propertylist.css"
import PropertyList from "../propertyList/propertylist"
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AddProperty from "../addProperty/main";
import axios from "axios";

const SearchRes = ({ property }) => {
  const [addinput, setAddInput] = useState();
  const [submitted, setSubmitted] = useState(false)
  const isEnabled = (addinput !== undefined)
  // const issubmitted = isEnabled && submitted
  const handleInputChange = (e) => {
    setAddInput(e.target.value)
  }
  // const [updatedproperty, setProperty] = useState();
  // console.log(updatedproperty)
  const handleDown = () => {
    setSubmitted(false)
  }

  const [propertydetails ,setpropertydetails ]=useState([])
  // const authToken = localStorage.getItem("authorization")
  useEffect(()=>{
      axios.get('http://localhost:5000/getpropertylist').then((response)=>{
              console.log(response.data.result);
              setpropertydetails(response.data.result);
              console.log(propertydetails,'information')
      }).catch(error=>console.log(error))
     },[])


  const handleSearch = () => {
    const addinputValue = addinput; // Replace 'addinput' with the actual value you want to pass as the query parameter
    axios.get(`http://localhost:5000/search?ppid=${encodeURIComponent(addinputValue)}`).then((response)=>{
      console.log(response.data.result);
      setpropertydetails(response.data.result);
      console.log(propertydetails,'information')
    }).catch(error=>console.log(error))
};
  



  return (
    <>

      <div className='seracharea'>

        <div className="searchbtn">
          <input type="text" placeholder="Search ppd id" className="isearch" name='id' id='id' onKeyDown={handleDown} onChange={(e) => { handleInputChange(e) }} />
          <button type="submit" className="isearchbtn" disabled={!isEnabled} onClick={() => handleSearch()} ><BsSearch className="btncolor" />

          </button>
        </div>
        <Link to='/addproperty'><button type='sumbit' className='addbtn' onClick={AddProperty}>
          + Add Property
        </button></Link>
      </div>

      <div className="propertylstpart"> <PropertyList propertydetail={ propertydetails } /></div>
    </>
  )
}
export default SearchRes