/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import UsersFeedbackDetails from "./views/UsersFeedbackDetails";
import Create from "./views/Create";
import Edit from "./views/Edit";
import Blog from "./views/Blog"; // Import Blog component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/usersFeedbacks/:id/details"
          element={<UsersFeedbackDetails />}
        />
        <Route path="/create" element={<Create />} />
        <Route path="/usersFeedbacks/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
