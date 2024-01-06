type Props = {
    children?: React.ReactNode;
    className?: string;
    background?: string;
};

const Cell = (props: Props) => {
    const {
        children,
        className,
        background = "bg-surface group-hover/row:bg-primary",
    } = props;

    return (
        <div className={`${background} px-3 py-1 text-center ${className}`}>
            {children}
        </div>
    );
};

export default Cell;
