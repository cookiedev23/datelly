import React, { useState, useEffect, Fragment } from "react";
import CardDetails from "./CardDetails";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../config/firebase";
import Spinner from "../utils/Spinner";
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import stateCheck from "../../atoms/stateCheck";
import stateIndex from "../../atoms/stateIndex";
import stateClosed from "../../atoms/stateClosed";
import tabSelector from "../../atoms/tabSelector";
import { Tooltip } from "@mui/material";
import stateModalAppointment from "../../atoms/stateModalAppointment";
import All from "./tabs/all";
import Approved from "./tabs/approved";
import Pending from "./tabs/pending";
import Rejected from "./tabs/rejected";

const Card = () => {
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

  const row = isCheck.length;

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
      onSnapshot(query(collection(db, "appointments")), (snapshot) => {
        const act = [];
        snapshot.forEach((doc) => {
          act.push(doc.data());
        });
        setAppointments(act);
        setLoading(false);
      }),
    [db]
  );

  const switcher = () => {
    if (tabIndex === 1) {
      return <All />;
    } else if (tabIndex === 2) {
      return <Approved />;
    } else if (tabIndex === 3) {
      return <Pending />;
    } else {
      return <Rejected />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-10">
        <Spinner />
      </div>
    );
  }

  return switcher();
};

export default Card;
