import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import DonorDetails from "./DonorDetails";
import NotFound from "./NotFound";
import HomeWelcome from './HomeWelcome';
import EditDonor from "./EditDonor";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/list" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/donors/:id" element={<DonorDetails />} />
            <Route path="/donors/:id/edit" element={<EditDonor />} />
            <Route path="/" element={<HomeWelcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
