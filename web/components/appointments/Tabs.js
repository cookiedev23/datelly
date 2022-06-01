import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import tabSelector from "../../atoms/tabSelector";
import { app } from "../../config/firebase";

const Tabs = () => {
  const [selected, setSelected] = useRecoilState(tabSelector);
  const [all, setAll] = useState([]);
  const [approved, setApproved] = useState([]);
  const [pending, setPending] = useState([]);
  const [rejected, setRejected] = useState([]);
  const db = getFirestore(app);

  const handleClick = (n) => {
    setSelected(n);
  };

  useEffect(
    () =>
      onSnapshot(query(collection(db, "appointments")), (snapshot) => {
        const act = [];
        snapshot.forEach((doc) => {
          act.push(doc.data());
        });
        setAll(act);
      }),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "appointments"),
          where("status", "==", "APPROVED")
        ),
        (snapshot) => {
          const act = [];
          snapshot.forEach((doc) => {
            act.push(doc.data());
          });
          setApproved(act);
        }
      ),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "appointments"), where("status", "==", "PENDING")),
        (snapshot) => {
          const act = [];
          snapshot.forEach((doc) => {
            act.push(doc.data());
          });
          setPending(act);
        }
      ),
    [db]
  );

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
          setRejected(act);
        }
      ),
    [db]
  );

  return (
    <div className="text-sm font-medium text-center my-8 text-neutral-500 border-b border-neutral-200 dark:text-neutral-400 dark:border-neutral-800">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <button
            onClick={() => handleClick(1)}
            className={
              selected === 1
                ? "tabSelect text-teal-600 hover:border-teal-600 border-teal-600 hover:text-teal-600"
                : "tabSelect"
            }
          >
            All {all.length > 0 && `(${all?.length})`}
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick(2)}
            className={
              selected === 2
                ? "tabSelect text-teal-600 hover:border-teal-600 border-teal-600 hover:text-teal-600"
                : "tabSelect"
            }
          >
            Rejected {rejected.length > 0 && `(${rejected?.length})`}
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick(3)}
            className={
              selected === 3
                ? "tabSelect text-teal-600 hover:border-teal-600 border-teal-600 hover:text-teal-600"
                : "tabSelect"
            }
          >
            Pending {pending.length > 0 && `(${pending?.length})`}
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick(4)}
            className={
              selected === 4
                ? "tabSelect text-teal-600 hover:border-teal-600 border-teal-600 hover:text-teal-600"
                : "tabSelect"
            }
          >
            Rejected {rejected.length > 0 && `(${rejected?.length})`}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
