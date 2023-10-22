import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/postdetail/:id"
          element={<PostDetail></PostDetail>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
