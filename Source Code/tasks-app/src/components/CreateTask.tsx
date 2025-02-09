import { XMarkIcon } from "@heroicons/react/24/outline";

interface CreateTaskProps {
  visible: boolean;
  onHide(): void;
}

function CreateTask(props: CreateTaskProps) {
  var { visible, onHide } = props;

  if (!visible) return <></>;

  return (
    <>
      <form className="border border-orange-400 border-[2px] absolute w-[700px] h-[300px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-5">
        <div className="flex items-center">
          <span className="w-1/3">Name: </span>
          <input
            type="text"
            placeholder="Name"
            className="border border-black rounded-md px-4 py-2 box-border w-2/3"
          />
        </div>
        <div className="mt-5 flex items-start">
          <span className="w-1/3">Description: </span>
          <textarea
            placeholder="Description"
            className="border border-black rounded-md px-4 py-2 box-border w-2/3 h-40 resize-none"
          ></textarea>
        </div>

        <button
          className="rounded-full bg-red-500 px-4 py-2"
          onClick={() => onHide()}
        >
          Cancel
        </button>
        <button
          className="rounded-full bg-green-500 px-4 py-2"
          onClick={() => createTask()}
        >
          Create
        </button>
      </form>
    </>
  );
}

function createTask() {
  alert("Task created!");
}

export default CreateTask;
