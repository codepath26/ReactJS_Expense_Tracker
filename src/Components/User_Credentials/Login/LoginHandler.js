import axios from "axios";

async function sendRequest(user) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      user
    );
    console.log(response);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
}

export default sendRequest;
