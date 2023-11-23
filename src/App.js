import React from "react";

import AuthContextProvider from "./Context/AuthContext";
import RouterProvider from "./Router/RouterProvider";
import ProductsProvider from "./Context/ExpensesContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductsProvider>
        <RouterProvider />
      </ProductsProvider>
    </AuthContextProvider>
  );
}

export default App;
