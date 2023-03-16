import React from "react";
import './Main.css';
import Education from "../Education/Education";
import School from "../School/School";
import BecomeList from "../BecomeList/BecomeList";
import Become from "../Become/Become";


function Main() {
    return (
        <main className="main">
            <Education />
            <BecomeList />
            <School />
        </main>
    )
}
export default Main;