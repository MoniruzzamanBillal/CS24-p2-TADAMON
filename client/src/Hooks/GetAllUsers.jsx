import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";

const GetAllUsers = () => {
  const { axiosPublicUrl } = UseAxiosPublic();

  const {
    data: users,
    isLoading: usersLoading,
    refetch: usersDataRefetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get("/api/users");

      return response?.data;
    },
  });

  return { users, usersLoading, usersDataRefetch };
};

export default GetAllUsers;
