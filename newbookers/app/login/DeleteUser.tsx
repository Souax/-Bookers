import { getServerSession } from "next-auth";
import authOptions from "../../src/pages/api/auth/[...nextauth]";
import DeleteButton from "@/src/components/auth/DeleteButton";

type SessionType = {
  user: {
    email: string;
  };
};

const DeleteUser = async () => {
  const session = (await getServerSession(authOptions)) as SessionType | null;

  if (session && session.user && session.user.email) {
    return <DeleteButton email={session.user.email} />;
  }
  return null;
};

export default DeleteUser;
