import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Session, getServerSession } from "next-auth";

const Logout = async () => {
  const session: Session | null = await getServerSession();

  if (session) {
    return (
      <div>
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    );
  }
  return null;
};

export default Logout;
