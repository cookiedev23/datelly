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
            Appointments
          </span>
          <Tabs />

          <Card />
          <SelectedStatus />
        </div>
      </div>
      <ModalEditAppointment />
    </div>
  );
};

export default Appointments;
