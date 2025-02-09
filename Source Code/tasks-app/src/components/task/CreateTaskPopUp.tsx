import { KeyboardEventHandler, useState } from "react";
import Button from "../Button";

interface CreateTaskPopUpProps {
  visible: boolean;
  onHide?: { (): void };
}

function CreateTaskPopUp(props: CreateTaskPopUpProps) {
  var { visible, onHide } = props;

  const hide = () => {
    visible = false;
    if (onHide) onHide();
  };

  const createTask = () => {
    let created = true;
    alert("created");
    if (created) hide();
  };

  if (!visible) return <></>;

  return (
    <div
      tabIndex={0} // To be able to get key pressed in a Div
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          hide();
        }
      }}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 dark:bg-black/80"
        onClick={hide}
      ></div>

      <form className="fixed bg-stone-200 dark:bg-stone-900 left-1/3 top-40 w-1/3 rounded-md px-10 py-5 text-black dark:text-white border border-black/50 dark:border-white/50">
        <div className="flex flex-row my-2 place-items-center">
          <span className="w-40">Name:</span>
          <input
            autoFocus
            className="w-2/3 rounded-md px-4 py-2 border border-black dark:border-white text-black"
            type="text"
          />
        </div>
        <div className="flex flex-row my-2">
          <span className="w-40 pt-2">Description:</span>
          <textarea className="w-2/3 h-60 rounded-md px-4 py-2 border border-black dark:border-white text-black resize-none"></textarea>
        </div>
        <div className="flex flex-row my-2 place-items-center">
          <span className="w-40">Start:</span>
          <input
            className="w-2/3 rounded-md px-4 py-2 border border-black dark:border-white text-black"
            type="datetime-local"
          />
        </div>
        <div className="flex flex-row my-2 place-items-center">
          <span className="w-40">End:</span>
          <input
            className="w-2/3 rounded-md px-4 py-2 border border-black dark:border-white text-black"
            type="datetime-local"
          />
        </div>

        <div className="flex flex-row my-2 place-items-center">
          <span className="w-40">Add file:</span>
          <input
            className="w-2/3 rounded-md px-4 py-2 border border-black dark:border-white text-black dark:text-white"
            type="file"
            multiple
          />
        </div>
        <div className="flex flex-row space-x-2 justify-end mt-8">
          <Button text="Create" type="main" onClick={createTask} />
          <Button text="Cancel" type="delete" onClick={hide} />
        </div>
      </form>
    </div>
  );
}

export default CreateTaskPopUp;
