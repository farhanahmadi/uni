import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// app.interceptors.request.use(
//   (res) => res,
//   (err) => Promise.reject(err)
// );

// app.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response?.status === 401 && !originalConfig._retry) {
//       originalConfig._retry = true;
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/users/getUser`,
//           {
//             withCredentials: true,
//           }
//         );
//         if (data) app(originalConfig);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//   }
// );

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
