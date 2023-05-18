import "../propertyList/propertylist.css"
import PropertyList from "../propertyList/propertylist"
import { BsSearch, BsPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AddProperty from "../addProperty/main";

const SearchRes = ({ property }) => {
  const [addinput, setAddInput] = useState();
  const [submitted, setSubmitted] = useState(false)
  const isEnabled = (addinput !== undefined)
  const issubmitted = isEnabled && submitted
  const handleInputChange = (e) => {
    setAddInput(e.target.value)
  }
  const [updatedproperty, setProperty] = useState([...property]);

  const handleDown = () => {
    setSubmitted(false)
  }

  const authToken = localStorage.getItem("authorization")
  const handleSearch = () => {
    fetch(``, {//fetching our data with backend render
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: authToken
      },
    }).then(res =>
      res.json()).then(result => {
        setSubmitted(true)
        setProperty(result)
      }).catch(err => console.log(err))



  }

  return (
    <>

      <div className='seracharea'>

        <div class="searchbtn">
          <input type="text" placeholder="Search ppd id" className="isearch" name='id' id='id' onKeyDown={handleDown} onChange={(e) => { handleInputChange(e) }} />
          <button type="submit" className="isearchbtn" disabled={!isEnabled} onClick={() => handleSearch()} ><BsSearch className="btncolor" />

          </button>
        </div>
        <Link to='/addproperty'><button type='sumbit' className='addbtn' onClick={AddProperty}>
          <BsPlus /> Add Property
        </button></Link>
      </div>

      <div className="propertylstpart"> <PropertyList propertydetails={issubmitted ? updatedproperty : property} /></div>
    </>
  )
}
export default SearchRes