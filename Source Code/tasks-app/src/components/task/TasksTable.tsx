import { useState } from "react";
import TaskTableRow from "./TaskTableRow";
import Task from "../../model/task/Task";
import { useNavigate } from "react-router";

interface TasksTableProps {
  tasks: Task[];
  onSelect?: { (taskId: number | undefined): void };
}

function TasksTable(props: TasksTableProps) {
  const { tasks, onSelect } = props;
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  const onClick = (id: number) => {
    let auxId: number | undefined = id;

    if (selected) {
      if (selected === id) {
        // Deselect
        auxId = undefined;
      }
    }

    if (onSelect) onSelect(auxId);
    setSelected(auxId);
  };

  const onDoubleClick = (id: number) => {
    navigate("/task/" + id);
  };

  return (
    <div className="grid w-2/3 mx-auto mt-10 divide-y divide-stone-200 dark:divide-stone-700 border border-stone-600 rounded-md text-black dark:text-white">
      {tasks.map((e) => {
        return (
          <TaskTableRow
            task={e}
            selected={selected !== undefined && e.id === selected}
            onClick={() => onClick(e.id)}
            onDoubleClick={() => onDoubleClick(e.id)}
          />
        );
      })}
    </div>
  );
}

export default TasksTable;
