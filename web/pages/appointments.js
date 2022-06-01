import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Tabs from "../components/appointments/Tabs";
import ActivitySidebar from "../components/sidebar/activity";
import Card from "../components/appointments/Card";
import SelectedStatus from "../components/appointments/SelectedStatus";
import ModalEditAppointment from "../components/appointments/ModalEditAppointment";
import stateModalAppointment from "../atoms/stateModalAppointment";
import { useRecoilState } from "recoil";

const Appointments = () => {
  const [isOpen, setIsOpen] = useRecoilState(stateModalAppointment);

  return (
    <div className="">
      <ActivitySidebar />

      <div className="pl-60 dark:bg-neutral-900 flex min-h-screen">
        <div className="container mx-auto p-10">
          <span className="font-medium text-xl xl:text-2xl dark:text-white">
            Appointments - edit button opens right modal
          </span>
          <Tabs />

          <div className="items-center mb-4 justify-between flex">
            <div className="flex-1 mr-8">
              <form className="flex w-full items-center">
                <label className="sr-only">Search</label>
                <div className="relative shadow-sm w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon className="h-5 text-gray-500 dark:text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="dark:outline-none block p-2 pl-10 w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:ring-teal-600 focus:border-teal-600 dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-teal-600 dark:focus:border-teal-600 dark:focus:outline-neutral-900 focus:outline-teal-600"
                    placeholder="Search"
                    required
                  ></input>
                </div>
              </form>
            </div>

            <div>
              <button
                type="button"
                className="inline-flex mr-2 dark:bg-neutral-800 items-center px-4 py-2 border dark:border-neutral-700 border-gray-300 rounded-md shadow-sm text-sm font-medium dark:text-white text-gray-700 bg-white dark:hover:bg-neutral-700 hover:bg-gray-50 focus:outline-none focus:ring-0"
              >
                Filter
              </button>

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-0"
              >
                New appointment
              </button>
            </div>
          </div>
          <Card />
          <SelectedStatus />
        </div>
      </div>
      <ModalEditAppointment />
    </div>
  );
};

export default Appointments;
