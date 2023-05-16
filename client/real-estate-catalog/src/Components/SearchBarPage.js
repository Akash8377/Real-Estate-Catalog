import React from 'react'
import Logo from '../Images/Logo'
import '../Styles/SearchBarPage.css'
import Home from '../Images/Home.png' 
import Tag from '../Images/Tag.png' 
import Arrow from '../Images/Arrow.png' 
import Dot from '../Images/Dot.png' 
import Eye from '../Images/Eye.png' 
import Bell from '../Images/Bell.png' 
import ArrowDown from '../Images/ArrowDown.png'


const SearchBarPage = () => {
  return (
    <div>
      <div id='sidebar'>
        <img className='logoimage' src={Logo} alt=''/>
        <div id='icondiv'>
          <div id='homeimagediv' className='imagediv'>
            <img className='icon' id='homeimage' src={Home} alt=''/>
          </div>
          <div id='tagimagediv' className='imagediv'>
            <img className='icon' id='tagimage' src={Tag} alt=''/>
          </div>
          <div id='arraowimagediv' className='imagediv'>
          <img className='icon' id='arrowimage' src={Arrow} alt=''/>
          </div>
            <div id='eyeimage' className='imagediv'> 
                <img id='dotimage' className='icon' src={Dot} alt=''/>
                <img id='eyeimage' className='icon' src={Eye} alt=''/>
            </div>
            <div id='bellimagediv' className='imagediv'>
            <img className='icon' id='bellimage' src={Bell} alt=''/>
            </div>
            <div id='arrowimagediv' className='imagediv'>
            <img id='arrowdownimage' className='icon' src={ArrowDown} alt=''/>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default SearchBarPage
