import Header from "../Components/Header";
import "./App.css";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../Store/Postliststore";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
