import React from "react";
import Logout from "@/app/login/Logout";
import Login from "@/app/login/Login";
import { Session } from "next-auth";
import DeleteUser from "@/app/login/DeleteUser";

const AuthClientButton = ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <div>
          <p>ようこそ、 {session.user && session.user.name}さん</p>
          <div>
            <Logout />
          </div>
          <div>
            <DeleteUser />
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
};

export default AuthClientButton;
