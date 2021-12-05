import axios from "axios";

// DIGITAL_API_KEY = process.env.REACT_APP_API_DIGITAL_ACCESS_KEY;
export default axios.create({
  //baseURL: "https://uc-davis-wellness-dk24p.ondigitalocean.app/api/",
  baseURL: "http://721c-2600-1700-f770-8340-ac71-4024-644a-eacb.ngrok.io/api/",
});