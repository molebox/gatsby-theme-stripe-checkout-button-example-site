import React from "react";
import { Global, css } from "@emotion/core";

export default ({ children }) => (
  <>
    <Global
      styles={css`
      body {
        margin: 0;
        padding: 0;
        background: #663399;
        font-family: Montserrat;
        }
      `}
    />
    {children}
  </>
)