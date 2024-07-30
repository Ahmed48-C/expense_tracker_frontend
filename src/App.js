import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
      />
      <BrowserRouter>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
