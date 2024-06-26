import React from "react";
import { Link } from 'react-router-dom'
import InputForm from "../Components/InputForm";

function Header(){
  return(
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                   
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                to="/"
                                className= 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                                >
                                    HOME
                                </Link>
                            </li>

                            <li>
                                <Link
                                to=" "
                                className= 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li>
                                <Link
                                to="/subjects"
                                className= 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                                >
                                    SUBJECTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/attendancechart"
                                className= 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                                >
                                    ATTENDANCE CHART
                                </Link>
                            </li>

                            <li>
                                <Link
                                to="/stats"
                                    className= 'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                                    >
                                      STATS
                                </Link>
                            </li>

                            </ul>
                    </div>
                </div>
            
            

            </nav>
        </header>
    );
}


export default Header