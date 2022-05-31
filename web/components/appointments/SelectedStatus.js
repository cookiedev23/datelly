import { Transition } from "@headlessui/react";
import {
  ArchiveIcon,
  EyeOffIcon,
  TrashIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useState, Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import stateCheck from "../../atoms/stateCheck";
import stateClosed from "../../atoms/stateClosed";
import stateIndex from "../../atoms/stateIndex";

const SelectedStatus = () => {
  const [selected, setSelected] = useRecoilState(stateCheck);
  const [closed, setClosed] = useRecoilState(stateClosed);
  const selectedIdx = useRecoilValue(stateIndex);

  const handleClose = () => {
    setSelected(!selected);
    setClosed(true);
  };

  return (
    <Transition
      as={Fragment}
      show={selected}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-y-52"
      enterTo="translate-y-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-52"
    >
      <div className="selectedBox">
        <button onClick={handleClose}>
          <XIcon className="h-5 dark:text-white text-gray-900" />
        </button>
        <div className="ml-6">
          <div className="rounded-md p-1 text-black px-2 inline-flex dark:bg-neutral-700 bg-white">
            {selectedIdx}
          </div>
          <span className="pl-2 text-black">
            {selectedIdx > 1 ? "items selected" : "item selected"}
          </span>
        </div>
        <div className="ml-12">
          <button
            type="button"
            className="inline-flex mr-2 dark:bg-neutral-800 items-center px-4 py-2 border dark:border-neutral-700 border-gray-300 rounded-md shadow-sm text-sm font-medium dark:text-white text-gray-700 bg-white dark:hover:bg-neutral-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
          >
            <ArchiveIcon className="h-5 pr-1" />
            Archive
          </button>
          <button
            type="button"
            className="inline-flex mr-4 dark:bg-neutral-800 items-center px-4 py-2 border dark:border-neutral-700 border-gray-300 rounded-md shadow-sm text-sm font-medium dark:text-white text-gray-700 bg-white dark:hover:bg-neutral-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
          >
            <EyeOffIcon className="h-5 pr-1 " />
            Hide
          </button>
          <button
            type="button"
            className="inline-flex mr-2 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            <TrashIcon className="h-5 pr-1 " />
            Delete
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default SelectedStatus;
