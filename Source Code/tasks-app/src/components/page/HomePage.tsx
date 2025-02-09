import NavBar from "../NavBar.tsx";
import NextTasks from "../NextTasks.tsx";
import { GET_ALL_USER_TASKS } from "../../URL.tsx";
import { useState, useEffect } from "react";
import BasePage from "./BasePage.tsx";

function HomePage() {
  var [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(GET_ALL_USER_TASKS);
      result.json().then((json) => {
        setTasksList(json["data"]);
      });
    };

    fetchData();
  });

  return (
    <>
      <BasePage>
        <div className="w-4/5 mx-auto">
          <NextTasks tasks={tasksList} />
        </div>
      </BasePage>
    </>
  );
}

export default HomePage;
