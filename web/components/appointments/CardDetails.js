import { Menu, Transition } from "@headlessui/react";
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

const CardDetails = ({ data, idx }) => {
  const [value, setValue] = useState([]);

  const onChange = (id) => {
    setValue((prev) => [...prev, idx]);
    console.log("array", value);
  };

  return (
    <>
      <tbody className="rounded-lg overflow-hidden">
        <tr className="bg-white rounded-md hover:bg-gray-50 border-b border-b-gray-100 overflow-hidden dark:border-r-gray-900 dark:bg-gray-900 dark:border-gray-700">
          {/* <td className="bg-red-500 w-[1px] relative shrink-0"></td> */}
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                checked={value.includes(idx)}
                onChange={(id) => onChange(id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-normal text-gray-900 dark:text-white whitespace-nowrap"
          >
            {data?.time}
          </th>
          <th
            scope="row"
            className="px-6 py-4 font-normal text-gray-900 dark:text-white whitespace-nowrap"
          >
            {data?.activity_name}
          </th>
          <td className="px-6 py-4 font-normal text-gray-900 dark:text-white whitespace-nowrap">
            {data?.type}
          </td>
          <td className="px-6 py-4 font-normal text-gray-900 dark:text-white whitespace-nowrap">
            {data?.duration}
          </td>
          <td className="px-6 py-4 font-normal text-white dark:text-white w-10">
            <div
              className={`${
                data?.status === "APPROVED"
                  ? "bg-green-100"
                  : data?.status === "PENDING"
                  ? "bg-yellow-100"
                  : "bg-red-100"
              } pointer-events-none p-1 px-2.5 rounded-full dark:text-white`}
            >
              <p
                className={`${
                  data?.status === "APPROVED"
                    ? "text-green-800"
                    : data?.status === "PENDING"
                    ? "text-yellow-800"
                    : "text-red-800"
                } text-center font-medium text-[13px]`}
              >
                {data?.status === "APPROVED"
                  ? "Approvato"
                  : data?.status === "PENDING"
                  ? "In attesa"
                  : "Rifiutato"}
              </p>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex justify-end items-center">
              <button className="mr-4 dark:hover:bg-gray-800 hover:bg-gray-100 p-1 rounded-lg">
                <PencilAltIcon className="h-5" />
              </button>
              <button className="mr-4 dark:hover:bg-gray-800 hover:bg-gray-100 p-1 rounded-lg">
                <TrashIcon className="h-5 text-red-500" />
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md dark:hover:bg-gray-800 hover:bg-gray-100 p-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <DotsVerticalIcon className="h-5" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="fixed overflow-hidden z-50 right-16 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-lg dark:bg-gray-800 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1.5">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "dark:bg-gray-700 bg-brand text-white"
                                : "text-gray-900 dark:text-white"
                            } group flex w-full items-center px-2 py-2 text-sm`}
                          >
                            Report
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CardDetails;
