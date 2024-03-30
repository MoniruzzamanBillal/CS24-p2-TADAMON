import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";

const GetSingleUser = (id) => {
  const { axiosPublicUrl } = UseAxiosPublic();

  const {
    data: user,
    isLoading: userLoading,
    refetch: userDataRefetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get(`/api/users/${id}`);

      return response?.data;
    },
  });

  return { user, userLoading, userDataRefetch };
};

export default GetSingleUser;
