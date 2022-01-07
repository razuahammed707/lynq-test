import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import ExclusiveContentInner from "layouts/ExclusiveContentInner";

function ExclusiveContent() {
  return (
    <div>
      <ExclusiveContentInner />
    </div>
  );
}

ExclusiveContent.layout = Admin;

export default ExclusiveContent;
