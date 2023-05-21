import Signin from "./Components/screen/SignIn";
import Signup from "./Components/screen/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import PropertyView from "./Components/getList/PropertyView";
// import Logout from "../logout/logout";
// import Proctected from "./Components/routes/protected.jsx";
import AddProperty from "./Components/addProperty/main";
import PropertyView from "./Components/getList/PropertyView";
import EditPage from "./Components/EditPage/EditPage";
// import PropertyList from "./Components/propertyList/propertylist";
import Main from './Components/addProperty/main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/listproperty" element={<Main/>}></Route>
          <Route path="/editproperty" element={<EditPage/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route element={<Proctected />}> */}
            <Route path="/home" element={<PropertyView />}></Route>
            <Route path="/addproperty" element={<AddProperty />}></Route>
          {/* </Route> */}
          {/* <Route path="/logout" element={<Logout />}></Route> */}
          <Route path="*" element={<div><h1>404</h1>Page not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;