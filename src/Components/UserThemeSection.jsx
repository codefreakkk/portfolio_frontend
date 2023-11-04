import React from "react";
import UserThemeCard from "./UserThemeCard";

function UserThemeSection() {
  return (
    <>
      {/* <h5 className="mb-2">Themes</h5> */}
      <div class="row">
        <UserThemeCard borderColor={"border-primary"} themeName={"Theme name"} themeDescription={"Some quick example text to build"}/>
        <UserThemeCard borderColor={""} themeName={"Theme name"} themeDescription={"Some quick example text to build"}/>
        <UserThemeCard borderColor={""} themeName={"Theme name"} themeDescription={"Some quick example text to build"}/>
        <UserThemeCard borderColor={""} themeName={"Theme name"} themeDescription={"Some quick example text to build"}/>
      </div>
    </>
  );
}

export default UserThemeSection;
