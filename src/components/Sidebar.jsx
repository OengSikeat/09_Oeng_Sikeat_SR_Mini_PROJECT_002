import Image from "next/image";
import React from "react";
import Logo from "./logo";
import { getAllWorkSpaces } from "@/app/service/workspace.service";
import Link from "next/link";
import { Input } from "./ui/input";
import WorkspaceToggleForm from "./inputWorkspace";

const Sidebar = async () => {
  const { payload: workspace } = await getAllWorkSpaces();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const NormalWorkspace = workspace.filter((wk) => !wk.isFavorite);
  const FavouriteWorkSpace = workspace.filter((wk) => wk.isFavorite);

  return (
    <aside className="flex flex-col w-full h-screen px-5 py-8 overflow-y-auto  rtl:border-r-0 rtl:borderL dark:bg-gray-900 dark:border-gray-700">
      <a href="#" className="text-center">
        <Logo></Logo>
      </a>

      <div className="flex flex-col flex-1 mt-6 h-[100vh]">
        <div className="flex flex-col justify-between h-[90%]">
          <div className="w-[90%]">
            <WorkspaceToggleForm></WorkspaceToggleForm>
      
            <div className="flex flex-col gap-24">
              <div>
                <nav className="mt-4 -mx-3 space-y-3 ">
                  {NormalWorkspace.map((data) => (
                    <Link
                      href={`/workspace/${data.workspaceId}`}
                      key={data.workspaceId}
                    >
                      <button className="flex items-center justify-between w-full px-3 py-2 text-md font-medium text-gray-600 transition-colors duration-300 transform roundedLg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <div className="flex items-center gap-x-2 ">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: getRandomColor() }}
                          ></span>
                          <span>{data?.workspaceName}</span>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 rtl:rotate-180"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-400 dark:textWhite">
                    Favourite
                  </h2>

                  <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 roundedLg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.1009 8.61001C22.1409 8.95001 22.6209 10.43 21.1509 11.89L18.6709 14.37C18.2509 14.79 18.0209 15.6 18.1509 16.18L18.8609 19.25C19.4209 21.68 18.1309 22.62 15.9809 21.35L12.9909 19.58C12.4509 19.26 11.5609 19.26 11.0109 19.58L8.02089 21.35C5.88089 22.62 4.58089 21.67 5.14089 19.25L5.85089 16.18C5.98089 15.6 5.75089 14.79 5.33089 14.37L2.85089 11.89C1.39089 10.43 1.86089 8.95001 3.90089 8.61001L7.09089 8.08001C7.62089 7.99001 8.26089 7.52002 8.50089 7.03001L10.2609 3.51001C11.2109 1.60001 12.7709 1.60001 13.7309 3.51001L15.4909 7.03001C15.5909 7.24001 15.7709 7.45001 15.9809 7.62001"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="mt-4 -mx-3 space-y-3 ">
                  {FavouriteWorkSpace.map((data) => (
                    <Link
                      href={`/workspace/${data.workspaceId}`}
                      key={data.workspaceId}
                    >
                      <button
                        key={data.workspaceId}
                        className="flex items-center justify-between w-full px-3 py-2 text-md font-medium text-gray-600 transition-colors duration-300 transform roundedLg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      >
                        <div className="flex items-center gap-x-2 ">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: getRandomColor() }}
                          ></span>
                          <span>{data?.workspaceName}</span>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 rtl:rotate-180"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </Link> 
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <button className="flex gap-4 items-center text-[#009990] font-bold text-xl hover:bg-gray-100 w-40 px-4 py-2 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.5002 13V15.26C21.5002 19.73 19.7102 21.52 15.2402 21.52H15.1102C11.0902 21.52 9.24016 20.07 8.91016 16.53"
                stroke="#009990"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999"
                stroke="#009990"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9991 12H3.61914"
                stroke="#009990"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                stroke="#009990"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
