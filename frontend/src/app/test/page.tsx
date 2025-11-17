"use client";

import { useSession } from "next-auth/react";
import React from "react";
import GridLayout from "../blog/create-blog/childComponent/gridLayout/GridLayout";
import ImageCard from "../blog/create-blog/childComponent/imageComponent/ImageCard";

import HeadingText from "../blog/create-blog/childComponent/headingText/HeadingText";
import ButtonBox from "../blog/create-blog/childComponent/buttonBox/ButtonBox";

const page = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <>
      <div>
        <h1>{status}</h1>
        <p>{JSON.stringify(data)} </p>
        ==============================================================
      </div>
      <div>
        <GridLayout>
          <ImageCard
            URL="https://a-static.besthdwallpaper.com/fifa-world-cup-with-soccer-ball-on-green-field-in-stadium-wallpaper-1680x1050-95465_5.jpg"
            ALT="hello"
          />
          <GridLayout>
            <HeadingText heading="h4">Sample Heading</HeadingText>
            <HeadingText heading="h4">Sample Heading</HeadingText>
            <HeadingText heading="h4">Sample Heading</HeadingText>
            <HeadingText heading="h4">Sample Heading</HeadingText>
          </GridLayout>
          <ButtonBox>Click Me</ButtonBox>
        </GridLayout>
      </div>
    </>
  );
};

export default page;
