"use client";

import { usePathname } from "next/navigation";
import SECTION_ID from "../constants/SECTION_ID";
import NavigationLink from "@/_assets/components/NavigationLink";

const homepage = (
    <>
        <NavigationLink id={SECTION_ID.about}>About</NavigationLink>
        <NavigationLink id={SECTION_ID.portfolio}>Portfolio</NavigationLink>
        <NavigationLink id={SECTION_ID.technologies}>
            Technologies
        </NavigationLink>
        <NavigationLink id={SECTION_ID.contact}>Contact</NavigationLink>
    </>
);

const dictionary: Record<string, JSX.Element> = {
    "/": homepage,
} as const;

export default (): JSX.Element => {
    const path = usePathname();

    if (path in dictionary) {
        return dictionary[path];
    }

    return <></>;
};
