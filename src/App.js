import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles/main.css";

// =================
// ******** Components START *********
// =================
import AllProducts from './components/PLP/AllProducts';
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Categories/Category";
import PDP from "./components/PDP/PDP";
// =================
// // ******** Components END *********
// =================


class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
          <Navbar />
          <Routes>
              <Route exact path='/' element={<AllProducts />} />
              <Route path='/category/:category_name' element={<Category />} />
              <Route path='/category/:category_name/:id' element={<PDP />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;