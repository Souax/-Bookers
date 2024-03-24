import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "../../src/pages/api/auth/[...nextauth]";
import LogoutButton from "@/src/components/auth/LogoutButton";

const Logout = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <LogoutButton />
    </div>
  );
};

export default Logout;
