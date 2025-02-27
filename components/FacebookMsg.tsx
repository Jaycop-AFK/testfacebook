"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1195398152594629" chatSupport>
      <CustomChat pageId="538960199305317" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
