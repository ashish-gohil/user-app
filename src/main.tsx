import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../redux/store.ts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import UsersTable from "./pages/usersTable.tsx";
import UserData from "./pages/user.tsx";
import Header from "./components/Header.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersTable />} />
      <Route path="/users/:userId" element={<UserData />} />
      <Route path="/*" element={<div>404 Not Found!</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
