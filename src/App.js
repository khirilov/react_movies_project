import React from 'react'
import Header from './layout/Header'
import './index.css'
import Footer from './layout/Footer'
import Main from './layout/Main'


function App() {

  return  (
    <>
      <Header />
      <Main className="grey darken-4"/>
      <Footer />
    </>
  );
  
}

export default App;
