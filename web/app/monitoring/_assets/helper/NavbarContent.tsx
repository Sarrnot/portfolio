"use client";

import { usePathname } from "next/navigation";
import NavigationLink from "@/_assets/components/Navigation/NavigationLink";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const serverDetail = (
    <>
        <NavigationLink href="/monitoring">
            <ArrowLeftIcon className="w-8 h-8" />
        </NavigationLink>
    </>
);

export default (): JSX.Element => {
    const path = usePathname();

    if (path !== "/monitoring") {
        return serverDetail;
    }

    return <></>;
};
