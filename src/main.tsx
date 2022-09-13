import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";

import AppRoutes from "./routes";
import { client } from "./api";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  </React.StrictMode>
);
