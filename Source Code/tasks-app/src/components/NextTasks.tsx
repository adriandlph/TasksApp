import { useState } from "react";
import Moment from "moment";

interface TaskListProps {
  tasks: TaskProps[];
}

interface TaskProps {
  id: number;
  name: string;
  description: string;
  start?: Date;
  stop?: Date;
}

function NextTasks(props: TaskListProps) {
  var { tasks } = props;
  var [selectedOption, setSelectedOption] = useState<null | number>(null);

  Moment.locale("es");

  return (
    <>
      <h2 className="text-lg font-bold py-4">Next tasks</h2>
      <ul
        role="list"
        className="divide-y divide-gray-200 border-2 rounded-xl border-stone-500 overflow-y-auto overflow-x-hidden"
      >
        {tasks.slice(0, 5).map((task: TaskProps) => (
          <li
            key={task.id}
            className={
              selectedOption == null || task.id !== selectedOption
                ? "flex justify-between gap-x-6 py-5 p-4"
                : "flex justify-between gap-x-6 py-5 p-4 bg-orange-300"
            }
            onClick={() => {
              setSelectedOption(task.id);
            }}
          >
            <div className="flex min-w-0 gap-x-4 items-center">
              <p className="text-base/6 font-semibold text-gray-900 align-middle">
                {task.name}
              </p>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              {task.start && task.stop ? (
                <>
                  <p className="text-stone-500">
                    {Moment(task.start).format("DD-MMMM")}
                  </p>
                  <p className="text-stone-500">
                    {Moment(task.start).format("HH:mm")}
                  </p>
                </>
              ) : (
                <p></p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NextTasks;
