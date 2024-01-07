import { HomeIcon } from "@heroicons/react/24/solid";
import NavigationLink from "./NavigationLink";
import NAVBAR_HEIGHT from "../../constants/NAVBAR_HEIGHT";
import MobileMenu from "./MobileMenu";

type Props = {
    children?: React.ReactNode;
    bgColor?: string;
    mobileMenu?: boolean;
};

const NavigationBar = (props: Props) => {
    const { children, bgColor = "bg-primary", mobileMenu = false } = props;

    return (
        <>
            <div className={`invisible ${NAVBAR_HEIGHT.tailwind}`}></div>
            <div
                className={`${bgColor} fixed w-full z-20 ${NAVBAR_HEIGHT.tailwind} top-0`}
            >
                <nav className="container flex justify-between items-center h-full text-white text-lg">
                    <NavigationLink href="/">
                        <HomeIcon className="h-8 w-8" />
                    </NavigationLink>
                    <div
                        className={`flex gap-8 ${
                            mobileMenu && "hidden sm:flex"
                        }`}
                    >
                        {children}
                    </div>
                    {mobileMenu && <MobileMenu>{children}</MobileMenu>}
                </nav>
            </div>
        </>
    );
};

export default NavigationBar;
