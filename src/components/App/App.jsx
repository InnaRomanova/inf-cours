import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ProgrammCourses from "../ProgrammCourses/ProgrammCourses";

function closePopup() {
  console.log("hello");
  // setIsCoursesPopupOpened(false);
  // setOpenModal(false);
}
function App({}) {
  const [currentUser, setCurrentUser] = useState({});
  const [isCoursesPopupOpened, setIsCoursesPopupOpened] = useState(false);
  const [list, setList] = useState([]);
  const [selectCard, setSelectCard] = useState({});
  const [openModal, setOpenModal] = useState(true);

  function handleAddCoursSubmit(card) {
    setSelectCard(card);
    setIsCoursesPopupOpened(true);
  }

  const closeByEsc = (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  };

  function all() {
    console.log("hi");
  }

  const closeByOverlay = (e) => {
    if (e.target.classList.contains(".navigation")) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isCoursesPopupOpened) {
      document.addEventListener("keydown", closeByEsc);
    }
    return () => document.removeEventListener("keydown", closeByEsc);
  }, [isCoursesPopupOpened]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Routes>
            <Route
              exac
              path="/inf-cours"
              element={
                <>
                  <Header />
                  <Main
                    list={list}
                    setList={setList}
                    onAddCours={handleAddCoursSubmit}
                  />
                  <Footer />
                </>
              }
            ></Route>
            {/* <Route
              exac
              path="/courses"
              element={
                <ProgrammCourses
                  // component={ProgrammCourses}
                  active={openModal}
                  all={() => {
                    all();
                  }}
                />
              }
            ></Route> */}
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
