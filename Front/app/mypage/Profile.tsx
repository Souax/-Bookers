import { NextPage } from "next";
import { Session, getServerSession } from "next-auth";
import React from "react";

const Profile: NextPage = async () => {
  const session: Session | null = await getServerSession();
  return <div>Profile</div>;
};

export default Profile;
