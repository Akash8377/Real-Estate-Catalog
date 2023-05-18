import "./header.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";



const Header = () => {
    const userId = localStorage.getItem('user');
    const n1 = JSON.parse(userId)
    // const n1.email = userId.split(':')[2]
    const val = n1.email
    const name = val.split('@')[0]

    // const userEmail = userId.email
    // const id = userEmail.split('@')[0]
    // console.log(userName)
    const id = n1._id.slice(20)
    console.log(id)

    const navigate = useNavigate()

    return (
        <>
            <div className='headercontainer'>
                <div className='userid'>USER ID: {id}</div>
                <div className='dropdown'><BiUser /> {name.toUpperCase()}<CgChevronDown />
                    <div className="dropdown-content"
                        onClick={() => {
                            localStorage.clear()
                            navigate('/')
                        }}
                    >Logout</div>
                </div>
            </div>
            <div className="headerbtmline"></div>
        </>
    )
}
export default Header