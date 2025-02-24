import http from "@/services/httpService";

export function createCourse(data) {
  return http.post("/courses", data).then(({ data }) => data);
}
export function getCourses() {
  return http.get("/courses/").then(({ data }) => data.coursesList);
}
