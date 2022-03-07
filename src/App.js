import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "Pages/Home";
import Dashboard from "Pages/Dashboard";
import Note from "Pages/Note";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;
