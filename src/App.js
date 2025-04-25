import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './Components/about';
import Home from './Components/homePage';
import Profile from './Components/profile';
import Results from './Components/results';
// TODO: These imports are required for auth
// import { AuthProvider } from 'react-auth-kit';
// import RouteComponent from './routes';

function App() {
  // TODO: When connecting the API, use the commented block for authentication
  // return (
  //   <AuthProvider
  //     authType="cookie"
  //     authName="_auth"
  //     cookieDomain={window.location.hostname}
  //     cookieSecure={window.location.protocol === "https:"}
  //   >
  //     <RouteComponent />
  //   </AuthProvider>
  // );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;