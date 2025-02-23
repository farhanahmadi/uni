import http from "@/services/httpService";

export function createCourse(data) {
  return http.post("/courses", data).then(({ data }) => data);
}
