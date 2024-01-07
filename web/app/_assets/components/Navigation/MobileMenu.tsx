"use client";

import NAVBAR_HEIGHT from "@/_assets/constants/NAVBAR_HEIGHT";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
    children: React.ReactNode;
};

const STYLE = { top: `${NAVBAR_HEIGHT.rem}rem` };

const MobileMenu = (props: Props) => {
    const { children } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="sm:hidden">
            <div className="hover:cursor-pointer" onClick={handleToggle}>
                {isOpen ? (
                    <XMarkIcon className="w-8 h-8" />
                ) : (
                    <Bars3Icon className="w-8 h-8" />
                )}
            </div>
            <div
                className={`fixed w-full h-full bg-white left-0 opacity-70 ${
                    !isOpen && "hidden"
                }`}
                style={STYLE}
                onClick={handleToggle}
            ></div>
            <div
                className={`fixed w-full left-0 p-4 bg-primaryLight ${
                    !isOpen && "hidden"
                }`}
                style={STYLE}
            >
                <div
                    className="text-text bg-primaryLight flex flex-col gap-6"
                    onClick={handleToggle}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
