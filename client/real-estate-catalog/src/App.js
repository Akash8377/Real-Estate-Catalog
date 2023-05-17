import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchBarPage from "./Components/SearchBarPage";
import SignUp from './Components/screen/SignUp';
import SignIn from './Components/screen/SignIn';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<SearchBarPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
