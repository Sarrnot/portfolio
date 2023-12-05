import { HomeIcon } from "@heroicons/react/24/solid";
import NavigationLink from "./NavigationLink";

type Props = {
    children?: React.ReactNode;
};

const NavigationBar = (props: Props) => {
    const { children } = props;

    return (
        <div className={`bg-primary fixed w-full z-10 h-12`}>
            <nav className="container flex justify-between items-center h-full text-white text-lg">
                <NavigationLink href="/">
                    <HomeIcon className="h-8 w-8" />
                </NavigationLink>
                <div className="flex gap-8">{children}</div>
            </nav>
        </div>
    );
};

export default NavigationBar;
