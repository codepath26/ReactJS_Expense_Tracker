import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext({
  products: [],
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

const initialState = {
  products: [],
  totalPrice: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedPrice = state.totalPrice + Number(action.product.price);
    const existingProductIndex = state.products.findIndex(
      (item) => item.id === action.product.id
    );

    const existingProduct = state.products[existingProductIndex];
    let updatedProducts;
    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: Number(existingProduct.quantity) + 1,
      };
      console.log("updatedproduct", updatedProduct);
      updatedProducts = [...state.products];
      updatedProducts[existingProductIndex] = updatedProduct;
    } else {
      console.log("else");
      //  let updatedProduct = {...action.product , quantity : 1}
      updatedProducts = state.products.concat(action.product);
      console.log(updatedProducts);
    }
    return {
      products: updatedProducts,
      totalPrice: updatedPrice,
    };
  }
  if (action.type === "REMOVE") {
    const productIndex = state.products.findIndex(
      (item) => item.id === action.id
    );
    const product = state.products[productIndex];
    console.log(product.price, typeof product.price, "price");
    console.log(product.quantity, typeof product.quantity, "quantity");
    const updatedPrice = Number(
      state.totalPrice - Number(product.price * product.quantity)
    );
    console.log(updatedPrice, typeof updatedPrice);
    const updatedProducts = state.products.filter(
      (item) => item.id !== action.id
    );
    return {
      products: updatedProducts,
      totalPrice: updatedPrice,
    };
  }
};

const CartProvider = ({ children }) => {
  const [cartDetails, dispatch] = useReducer(reducer, initialState);
  const { token } = useAuthContext();
   console.log(token)
  
  const addProduct = async (product) => {
    const email = localStorage.getItem('email');
    let cleanedEmail = email.replace(/[@.]/g, '');
    console.log(cleanedEmail);
    dispatch({
      type: "ADD",
      product: product,
    });

    // Storing the data into the crud crud api.
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CRUD_CRUD_URL}/cart${cleanedEmail}`,
        product
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  return (
    <CartContext.Provider value={{ cartDetails, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export function useProduct() {
  return useContext(CartContext);
}
