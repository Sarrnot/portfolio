type Props = {
    children: React.ReactNode;
};

const Container = (props: Props) => {
    const { children } = props;

    return <div className="flex flex-col gap-3 md:gap-2">{children}</div>;
};

export default Container;
