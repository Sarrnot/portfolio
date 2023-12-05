import Link from "next/link";
import AnchorLink from "./AnchorLink";

type Props = {
    children?: React.ReactNode;
    href?: string;
    id?: string;
};

const NavigationLink = (props: Props) => {
    const { id, href, children } = props;

    if (id) {
        return (
            <AnchorLink id={id} className="hover:text-secondaryLight">
                {children}
            </AnchorLink>
        );
    }

    if (href) {
        return (
            <Link href={href} className="hover:text-secondaryLight">
                {children}
            </Link>
        );
    }

    return <></>;
};

export default NavigationLink;
