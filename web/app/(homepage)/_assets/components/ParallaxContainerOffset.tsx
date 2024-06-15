type Props = {
    children: React.ReactNode;
};

const ParallaxContainerOffset = (props: Props) => {
    const { children } = props;

    return (
        <div className="h-full w-full [clip:rect(0_auto_auto_0)] overflow-hidden absolute top-0 -z-10">
            {children}
        </div>
    );
};

export default ParallaxContainerOffset;
