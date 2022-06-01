import { Menu, Transition } from "@headlessui/react";
import {
  DocumentSearchIcon,
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Tooltip } from "@mui/material";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState, Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import stateCheck from "../../../atoms/stateCheck";
import stateClosed from "../../../atoms/stateClosed";
import stateIndex from "../../../atoms/stateIndex";
import stateModalAppointment from "../../../atoms/stateModalAppointment";
import tabSelector from "../../../atoms/tabSelector";
import { app } from "../../../config/firebase";
import Spinner from "../../utils/Spinner";

const Rejected = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);

  const [selected, setSelected] = useRecoilState(stateCheck);
  const [closed, setClosed] = useRecoilState(stateClosed);
  const [index, setIndex] = useRecoilState(stateIndex);
  const [isCheck, setIsCheck] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(stateModalAppointment);
  const tabIndex = useRecoilValue(tabSelector);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    setIndex(index + 1);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
      isCheck.splice(0, 1);
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    if (index > 0) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [index, setSelected]);

  useEffect(() => {
    if (closed) {
      setIndex(0);
      //setIsCheckAll(!isCheckAll);
      setIsCheck([]);
    }
  }, [closed, setIndex]);

  const handleSelectAll = (e) => {
    let lgt = appointments.length;
    setIsCheckAll(!isCheckAll);
    setIsCheck(appointments.map((li, idx) => li.id));
    setIndex(lgt);
    if (isCheckAll) {
      setIndex(0);
      setIsCheck([]);
    }
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "appointments"),
          where("status", "==", "REJECTED")
        ),
        (snapshot) => {
          const act = [];
          snapshot.forEach((doc) => {
            act.push(doc.data());
          });
          setAppointments(act);
          setLoading(false);
        }
      ),
    [db]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-10">
        <Spinner />
      </div>
    );
  }

  if (appointments.length < 1) {
    return (
      <div className="dark:text-neutral-500 text-sm flex justify-center">
        <div className="">
          {/* <DocumentSearchIcon className="h-24" /> */}
          <p className="">Non ci sono appuntamenti rifiutati</p>
        </div>
      </div>
    );
  }

  return (
    <table className="w-full rounded-lg border dark:bg-neutral-700 bg-gray-200 overflow-hidden text-sm text-left text-gray-500 dark:text-neutral-400">
      <thead className="text-xs text-gray-500 bg-gray-50 border-b border-b-gray-100 dark:border-b-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
        <tr className="">
          {/* <th scope="col" className="p-[5px]"></th> */}
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="selectall"
                checked={isCheckAll}
                onChange={handleSelectAll}
                type="checkbox"
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-600 dark:focus:ring-teal-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            Time
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            Product name
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            Color
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            Category
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            Price
          </th>
          <th scope="col" className="px-6 font-medium py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      {appointments.map((data) => {
        return (
          <tbody key={data.id} className="rounded-lg overflow-hidden">
            <tr className="bg-white rounded-md hover:bg-gray-50 dark:hover:bg-neutral-700 border-b border-b-gray-100 overflow-hidden dark:border-r-neutral-900 dark:bg-neutral-800 dark:border-neutral-700">
              {/* <td className="bg-red-500 w-[1px] relative shrink-0"></td> */}
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={data.id}
                    type="checkbox"
                    key={data.id}
                    onChange={handleClick}
                    checked={isCheck.includes(data.id)}
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
                      ? "bg-green-100 dark:bg-green-800"
                      : data?.status === "PENDING"
                      ? "bg-yellow-100 dark:bg-yellow-800"
                      : "bg-red-100 dark:bg-red-800"
                  } pointer-events-none p-1 px-2.5 rounded-full dark:text-white`}
                >
                  <p
                    className={`${
                      data?.status === "APPROVED"
                        ? "text-green-800 dark:text-green-100"
                        : data?.status === "PENDING"
                        ? "text-yellow-800 dark:text-yellow-100"
                        : "text-red-800 dark:text-red-100"
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
                  <Tooltip enterDelay={600} title="Edit">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="mr-4 dark:hover:bg-neutral-600 hover:bg-gray-100 p-1 rounded-lg"
                    >
                      <PencilAltIcon className="h-5" />
                    </button>
                  </Tooltip>
                  <Tooltip enterDelay={600} title="Delete">
                    <button className="mr-4 dark:hover:bg-neutral-800 hover:bg-gray-100 p-1 rounded-lg">
                      <TrashIcon className="h-5 text-red-500" />
                    </button>
                  </Tooltip>
                  <Tooltip enterDelay={600} title="More">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md dark:hover:bg-neutral-800 hover:bg-gray-100 p-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <DotsVerticalIcon
                            className="h-5"
                            aria-hidden="true"
                          />
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
                  </Tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Rejected;
