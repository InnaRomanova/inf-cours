import React from "react";
import "./ProgrammCourses.css";

function ProgrammCourses({isOpen, onClose, onAddCours}) {

  return (
   <div className="propgramm" isOpen={isOpen} onClose={onClose} onSubmit={onAddCours}>
    <div className="propgramm__container">

    </div>
   </div>
  );
}

export default ProgrammCourses;
