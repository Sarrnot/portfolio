"use client";

import scrollIntoView from "@/(homepage)/_assets/helpers/scrollIntoView";

type Props = {
    id: string;
    className?: string;
    children?: React.ReactNode;
};

const AnchorLink = (props: Props) => {
    const { id, className, children } = props;

    return (
        <button
            onClick={() => {
                scrollIntoView(id);
            }}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

export default AnchorLink;
