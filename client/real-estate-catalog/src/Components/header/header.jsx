import "./header.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";



const Header = () => {
    const userId = localStorage.getItem('user');
    const n1 = JSON.parse(userId)
    // const n1.email = userId.split(':')[2]
    const val = n1.email
    const name = val.split('@')[0]
    // const userEmail = userId.email
    // const id = userEmail.split('@')[0]
    // console.log(userName)
    console.log(n1.email)


    return (
        <>
            <div className='headercontainer'>
                <div className='userid'>USER ID: {name}  </div>
                <div className='dropdown'><BiUser />{name} <CgChevronDown />
                    <div className="dropdown-content">
                        
                    </div>
                </div>
            </div>
            <div className="headerbtmline"></div>
        </>
    )
}
export default Header