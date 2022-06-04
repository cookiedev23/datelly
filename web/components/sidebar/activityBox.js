import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  CogIcon,
  DownloadIcon,
  ExternalLinkIcon,
  LogoutIcon,
  PlusIcon,
  SpeakerphoneIcon,
  SupportIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React, { Fragment } from "react";

const ActivityBox = () => {
  return (
    <>
      <div className="mb-5">
        <div className="">
          <Menu as="div" className="relative w-full inline-block text-left">
            <div>
              <Menu.Button className="flex items-center w-full rounded-md justify-between px-3 py-2 cursor-pointer dark:hover:bg-neutral-800 transition-all duration-75 hover:bg-gray-100 mt-auto">
                <div className="flex items-center">
                  <div className="h-7 w-7 bg-red-200 rounded-full" />
                  <div className="pl-2">
                    <p className="font-medium dark:text-white text-sm">
                      Sderlenga
                    </p>
                    <p className="text-xs -translate-x-[2px] dark:text-neutral-400 text-gray-500">
                      Workspace
                    </p>
                  </div>
                </div>
                <ChevronDownIcon className="h-4 dark:text-gray-200 " />
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
              <Menu.Items className="absolute dark:border dark:border-neutral-700 shadow-lg z-50 w-56 top-0 overflow-hidden left-0 right-0 rounded-md origin-top-left dark:bg-neutral-800 bg-white divide-y dark:divide-neutral-700 divide-gray-200 ring-1 ring-black ring-opacity-10 focus:outline-none">
                <div className="py-1 px-2">
                  <Menu.Item>
                    <div className="flex pointer-events-none mb-1 py-1.5 items-center">
                      <div className="h-8 w-8 bg-red-200 rounded-full" />
                      <div className="pl-2">
                        <p className="font-medium text-sm dark:text-white">
                          Sderlenga
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          Workspace
                        </p>
                      </div>
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-gray-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center border mb-2 dark:border-neutral-600 border-gray-200 w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        Switch to user profile
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        <UserCircleIcon
                          className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                          aria-hidden="true"
                        />
                        Your profile
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1 mt-1 px-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center mt-1 w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        <CogIcon
                          className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                          aria-hidden="true"
                        />
                        Workspace settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center mt-1 w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        <PlusIcon
                          className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                          aria-hidden="true"
                        />
                        Invite your team
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className="py-1 mt-1 px-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center justify-between w-full mt-1 p-1.5 rounded-md px-2 text-sm`}
                      >
                        <div className="flex items-center">
                          <DownloadIcon
                            className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                            aria-hidden="true"
                          />
                          Downloads
                        </div>
                        <ExternalLinkIcon
                          className="h-5 ml-2 dark:text-neutral-400 text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center justify-between w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        <div className="flex items-center">
                          <SupportIcon
                            className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                            aria-hidden="true"
                          />
                          Help and support
                        </div>
                        <ExternalLinkIcon
                          className="h-5 ml-2 dark:text-neutral-400 text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center justify-between w-full p-1.5 rounded-md px-2 text-sm`}
                      >
                        <div className="flex items-center">
                          <SpeakerphoneIcon
                            className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                            aria-hidden="true"
                          />
                          What&apos;s new
                        </div>
                        <ExternalLinkIcon
                          className="h-5 ml-2 dark:text-neutral-400 text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className="py-1 mt-1 px-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 text-gray-900"
                            : "text-gray-900 dark:text-neutral-100"
                        } group flex items-center w-full p-1.5 mt-1 rounded-md px-2 text-sm`}
                      >
                        <LogoutIcon
                          className="h-5 mr-2 dark:text-neutral-400 text-gray-500"
                          aria-hidden="true"
                        />
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className="py-1 mt-1 px-2">
                  <Menu.Item>
                    <div className="flex my-1 pointer-events-none items-center w-full p-1.5 dark:text-neutral-400 text-gray-400 rounded-md px-2 text-xs">
                      Version 1.0.0 (Alpha)
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default ActivityBox;
