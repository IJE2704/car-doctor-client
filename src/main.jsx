import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import AuthProvideer from "./Provider/AuthProvideer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1140px] mx-auto">
      <AuthProvideer>
        <RouterProvider router={router} />
      </AuthProvideer>
    </div>
  </React.StrictMode>
);
