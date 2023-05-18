import Form from "./form"
import SideNavBar from "../asidebar/aside";
import Header from "../header/header";


const AddProperty = () => {
    return (
        <>
            <div className="maincontainer">
                <div className="sidenav">
                    <SideNavBar />
                </div>
                <div className="subpart">
                    <div className="headerpart">
                        <Header />
                    </div>
                    <div className="propertylstpart"> <Form /></div>
                </div>

            </div>
        </>
    )
}

export default AddProperty;