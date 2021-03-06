import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import './app.css'
import { Navbar, HomePage, Cryptocurrencies,News, CryptoDetails } from "./Components";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
          <Route exact path="/news" element={<News/>}/>
        </Routes>
      </Layout>
     
      <div className="footer" >
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          CryptoVerse <br/>
          ALl Rights Reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
    </div>
    </div>
  );
}

export default App;
