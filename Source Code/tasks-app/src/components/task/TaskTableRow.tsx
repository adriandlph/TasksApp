import Task from "../../model/task/Task";

interface TaskTableRowProp {
  task: Task;
  selected?: boolean;
  onClick?: { (): void };
  onDoubleClick?: { (): void };
}

function TaskTableRow(props: TaskTableRowProp) {
  const { task, selected, onClick, onDoubleClick } = props;

  let className = "flex flex-row px-4 py-4";
  if (selected) className += " bg-main-color/75";

  return (
    <div className={className} onClick={onClick} onDoubleClick={onDoubleClick}>
      <p className="w-2/3">{task.name}</p>
      <p className="w-1/3 text-right">Date</p>
    </div>
  );
}

export default TaskTableRow;
