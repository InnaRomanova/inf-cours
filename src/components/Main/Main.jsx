import React from "react";
import './Main.css';
import Education from "../Education/Education";
import School from "../School/School";
import BecomeList from "../BecomeList/BecomeList";
import Choice from "../Сhoice/Сhoice";


function Main() {
    return (
        <main className="main">
            <Education />
            <BecomeList />
            <School />
            <Choice />
        </main>
    )
}
export default Main;