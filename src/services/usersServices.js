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
