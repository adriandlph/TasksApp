import { useState } from "react";
import BasePage from "./BasePage";
import Button from "../Button";
import TasksTable from "../task/TasksTable";
import Task from "../../model/task/Task";
import CreateTaskPopUp from "../task/CreateTaskPopUp";

function TasksPage() {
  var [createTaskVisible, setCreateTaskVisible] = useState(false);
  var [selected, setSelected] = useState<number | undefined>();

  var tasks: Task[] = [
    {
      id: 1,
      name: "Tarea 1",
    },
    {
      id: 2,
      name: "Tarea 2",
    },
    {
      id: 3,
      name: "Tarea 3",
    },
    {
      id: 4,
      name: "Tarea 4",
    },
    {
      id: 5,
      name: "Tarea 5",
    },
    {
      id: 6,
      name: "Tarea 6",
    },
    {
      id: 7,
      name: "Tarea 7",
    },
    {
      id: 8,
      name: "Tarea 8",
    },
    {
      id: 9,
      name: "Tarea 9",
    },
    {
      id: 10,
      name: "Tarea 10",
    },
  ];

  return (
    <BasePage>
      <div>
        <h2>Filter by:</h2>
        <ul>
          <li> - With name</li>
          <li> - Status: completed - not completed</li>
          <li> - Start date from to</li>
          <li> - End date from to</li>
          <li> - Category</li>
        </ul>
        default: show from today to today-7days
      </div>
      <TasksTable
        tasks={tasks}
        onSelect={(taskId) => {
          setSelected(taskId);
        }}
      />

      <div className="flex space-x-5 justify-center mt-5">
        <Button
          text="Create task"
          type="main"
          onClick={() => {
            setCreateTaskVisible(true);
          }}
        />
        <Button
          text="Delete task"
          type="delete"
          disabled={!selected}
          onClick={() => deleteTask(selected)}
        />
      </div>

      <CreateTaskPopUp
        visible={createTaskVisible}
        onHide={() => setCreateTaskVisible(false)}
      />
    </BasePage>
  );
}

function deleteTask(taskId: number | undefined): void {
  if (!taskId) return;

  console.log("Elimnando " + taskId + "...");
}

export default TasksPage;
