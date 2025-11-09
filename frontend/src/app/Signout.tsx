"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const Signout = () => {
  return <Button onClick={async () => await signOut()}>Logout</Button>;
};

export default Signout;
