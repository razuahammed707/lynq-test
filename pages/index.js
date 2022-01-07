import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";
import Profile from "layouts/Profile";

function Index() {
  return (
    <div>
      <Profile />
    </div>
  );
}

Index.layout = Admin;

export default Index;
