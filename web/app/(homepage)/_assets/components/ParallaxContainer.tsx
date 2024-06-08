type Props = {
    children: React.ReactNode;
};

const ParallaxContainer = (props: Props) => {
    const { children } = props;

    return (
        <div className="h-full w-full overflow-hidden absolute top-0">
            {children}
        </div>
    );
};

export default ParallaxContainer;
