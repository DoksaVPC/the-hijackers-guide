import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Section from '../components/section';

function GuidelinesPage() {

  let location = useLocation();

  return (
    <div
      className="flex-wrapper"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {location.pathname === "/guidelines" && (
        <h1>
          {" "}
          The Hijacker's Guide <br /> to Digital Activism{" "}
        </h1>
      )}

      <Section sectionId="01" color="red" />

      <Section sectionId='02' color="green" />

      <Section sectionId='03' color='blue' />

      <Section sectionId='04' color='lightblue' />
    </div>
  );
}

export default GuidelinesPage;
