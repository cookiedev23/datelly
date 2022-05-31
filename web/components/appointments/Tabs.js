import React from "react";

const Tabs = () => {
  return (
    <div className="text-sm font-medium text-center my-8 text-neutral-500 border-b border-neutral-200 dark:text-neutral-400 dark:border-neutral-800">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 text-teal-600 rounded-t-lg border-b-2 border-teal-600 active"
          >
            All (15)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
            aria-current="page"
          >
            Approved (12)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
          >
            Pending (2)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
          >
            Rejected (1)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
