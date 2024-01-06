import AnchorLink from "@/_assets/components/AnchorLink";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
    text?: string;
    sectionId: string;
};

const ScrollNext = (props: Props) => {
    const { text, sectionId } = props;

    return (
        <AnchorLink
            id={sectionId}
            className="text-sm text-center absolute bottom-10 group/scrollNext"
        >
            {text && (
                <>
                    {text}
                    <br />
                </>
            )}
            <ChevronDownIcon className="h-10 w-10 text-primary inline mt-3 group-hover/scrollNext:text-primaryLight" />
        </AnchorLink>
    );
};

export default ScrollNext;
