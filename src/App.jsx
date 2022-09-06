import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Fetch from './components/Produtos/Fetch'
import Compartilhe from "./components/Compartilhe";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Header />

      <MainContent />

      <Fetch />

      <Compartilhe />

      <Footer />
    </>
  );
}

export default App;
