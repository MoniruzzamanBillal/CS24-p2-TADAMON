import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";

const GetUserRole = (id) => {
  const { axiosPublicUrl } = UseAxiosPublic();
  console.log(id);
  const {
    data: Role,
    isLoading: userRoleLoading,
    refetch: userRoleRefetch,
  } = useQuery({
    queryKey: ["userRole"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get(`/api/users/${id}/roles`);

      return response?.data;
    },
  });

  return {
    Role,
    userRoleLoading,
    userRoleRefetch,
  };
};

export default GetUserRole;
