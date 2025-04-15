import http from "@/services/httpService";

export function getUsers() {
  return http.get("/users").then(({ data }) => data);
}
export function createUser(data) {
  return http.post("/users", data).then(({ data }) => data);
}
export function checkOtp(data) {
  return http.post("/users/checkOtp", data).then(({ data }) => data);
}
export function getUserProfile() {
  return http.get("/users/getUser").then(({ data }) => data.user);
}
export function updateCart(data) {
  return http.post("/users/cart", data).then(({ data }) => data);
}
export function submitOrder(data) {
  return http.post("/users/cart/submit", data).then(({ data }) => data);
}
export function deleteOrder(data) {
  return http.put("/users/cart/delete", data).then(({ data }) => data);
}
