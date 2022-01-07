import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import BackMyProjectInner from "layouts/BackMyProject/BackMyProjectInner";

function ExclusiveContent() {
  return (
    <div>
      <BackMyProjectInner />
    </div>
  );
}

ExclusiveContent.layout = Admin;

export default ExclusiveContent;
