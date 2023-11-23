import React from 'react';

import AuthContextProvider from './Context/AuthContext';
import   RouterProvider  from './Router/RouterProvider';

function App() {
    
  
  return (
    <AuthContextProvider>
      <RouterProvider/>
    </AuthContextProvider>
  );
}

export default App;
