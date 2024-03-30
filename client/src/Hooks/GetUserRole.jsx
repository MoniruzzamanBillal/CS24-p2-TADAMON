import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UseAxiosPrivate from "./UseAxiosPrivate";

const GetUserRole = (id) => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: Role,
    isLoading: userRoleLoading,
    refetch: userRoleRefetch,
  } = useQuery({
    queryKey: ["userRole"],
    queryFn: async () => {
      const response = await axiosPrivateUrl.get(`/api/users/${id}/roles`);

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
