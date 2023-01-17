import React, { useState } from "react";
import { CreateUser, CurrentUser } from "./";

const UserData = () => {
  const [currentView, setCurrentView] = useState("");

  const handleClick = (view) => {
    setCurrentView(view);
  };
  return (
    <div class="container">
      <br />
      <div class="row">
        <div className="col btn-wrapper">
          <button
            className="btn btn-outline-secondary btn-user"
            type="radio"
            id="create"
            onClick={() => handleClick("create-user")}
          >
            Create User
          </button>
        </div>
        <div className="col btn-wrapper">
          <button
            type="radio"
            className="btn btn-outline-secondary btn-user"
            id="current"
            onClick={() => handleClick("current-user")}
          >
            Current User
          </button>
        </div>
      </div>
      <br />
      {currentView === "create-user" && <CreateUser />}
      {currentView === "current-user" && <CurrentUser />}
    </div>
  );
};

export default UserData;
