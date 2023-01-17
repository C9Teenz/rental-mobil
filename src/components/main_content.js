import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DasboardAdmin,
  Users,
  Brands,
  CreatePageItem,
  CreateUserPage,
  CreateBrandPage,
  EditBrandPage,
  EditItemPage,
  EditUserPage,
  LoginPage,
} from "../pages/admin";
import { Home, Detail, InputUser } from "../pages/users";

const MainContent = () => {
  return (
    <div className="Routers">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route path="/input-user/:id" element={<InputUser></InputUser>}></Route>

        <Route path="/admin" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/dasboard"
          element={<DasboardAdmin></DasboardAdmin>}
        ></Route>

        <Route path="/brands" element={<Brands></Brands>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route
          path="/create-item"
          element={<CreatePageItem></CreatePageItem>}
        ></Route>
        <Route
          path="/create-user"
          element={<CreateUserPage></CreateUserPage>}
        ></Route>
        <Route
          path="/create-brand"
          element={<CreateBrandPage></CreateBrandPage>}
        ></Route>

        <Route
          path="dasboard/edit-item/:id"
          element={<EditItemPage></EditItemPage>}
        ></Route>
        <Route
          path="users/edit-user/:id"
          element={<EditUserPage></EditUserPage>}
        ></Route>
        <Route
          path="brands/edit-brand/:id"
          element={<EditBrandPage></EditBrandPage>}
        ></Route>
      </Routes>
    </div>
  );
};
export default MainContent;
