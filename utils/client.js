import axios from "axios";


let url = process.env.NEXT_PUBLIC_API_URL

const client = axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json",
 //       "Access-Control-Allow-Origin":'*',
    }
})

// List of endpoints that don't need authentication
const noAuthRequired = ['/signup', '/signin', '/login'];

// client.interceptors.request.use(
//     async function(config) {         
//       if (!config.headers["Authorization"]) {
//         var accessToken = localStorage.getItem("token") || "";
//         config.headers["Authorization"] = accessToken
//           ? "Bearer " + accessToken
//           : undefined;
//       }
//       return config;
//     },
//     function(error) {
//       return Promise.reject(error);
//     }
//   );
  
//   client.interceptors.response.use(
//     function(response) {
//       return response;
//     },
//     async function(error) {
//       if (error.request) {
//         return handleRequestError(error);
//       } else {
//         return handleSetupError(error);
//       }
//     }
//   );
  
  function handleRequestError(error) {
    console.error("Request error:", error);
    console.error(
      "No response received. The request was made but there was no response."
    );
    return Promise.reject(error);
  }
  
  function handleSetupError(error) {
    console.error("Error:", error);
    console.error("Error setting up the request:", error.message);
    console.error("Error config:", error.config);
    return Promise.reject(error);
  }

  export default client;