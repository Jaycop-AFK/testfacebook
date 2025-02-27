"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1832413670927392" chatSupport>
      <CustomChat pageId="538960199305317" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
