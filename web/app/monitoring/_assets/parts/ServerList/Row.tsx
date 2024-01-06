import { Key } from "react";

type Props = {
    children?: React.ReactNode;
    href?: string;
    className?: string;
};

const STYLES =
    "grid gap-1 group/row grid-cols-[auto_4rem] sm:grid-cols-[4fr_2fr_4rem] md:grid-cols-[4fr_3fr_2fr_4rem]";

const Row = (props: Props) => {
    const { children, href, className } = props;

    if (!href) {
        return <div className={`${STYLES} ${className}`}>{children}</div>;
    }

    return (
        <a className={STYLES} href={href}>
            {children}
        </a>
    );
};

export default Row;
