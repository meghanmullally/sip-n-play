import React from "react";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Footer/>
        </div>
    );
}

export default App;
