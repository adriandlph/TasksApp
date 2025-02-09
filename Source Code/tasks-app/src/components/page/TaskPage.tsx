import { useNavigate, useParams } from "react-router";
import Task from "../../model/task/Task";

function TaskPage() {
  const params = useParams();
  const navigate = useNavigate();
  // Not defined task id
  if (!params.id) navigate("/task", { replace: true });

  // Try to get task id
  var myId: number = Number(params.id);
  if (isNaN(myId)) {
    // Not valid id
    if (!params.id) navigate("/task", { replace: true });
  }

  const task: Task = {
    id: myId,
    name: "tarea",
  };

  return (
    <div>
      <h1>{task.name}</h1>
      <p className="text-center text-3xl text-bold">ID= {task.id}</p>
    </div>
  );
}

export default TaskPage;
