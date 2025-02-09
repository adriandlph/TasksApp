import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/page/HomePage.tsx";
import CalendarPage from "./components/page/CalendarPage.tsx";
import PageNotFound from "./components/page/PageNotFound.tsx";
import TasksPage from "./components/page/TasksPage.tsx";
import TaskPage from "./components/page/TaskPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/task" element={<TasksPage />} />
        <Route path="/task/:id" element={<TaskPage />} />

        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
