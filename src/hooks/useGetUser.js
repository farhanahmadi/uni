import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/services/usersServices";

export const useGetUser = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  return useQuery({
    queryKey: ["get-user"],
    queryFn: async () => {
      const data = await getUserProfile();
      if (!data) throw new Error("کاربر یافت نشد");
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};
