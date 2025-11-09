"use client";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <div>
      <h1>{status}</h1>
      <p>{JSON.stringify(data)} </p>
    </div>
  );
};

export default page;
