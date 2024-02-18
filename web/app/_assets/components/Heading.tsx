export const H2 = ({ children }: { children?: React.ReactNode }) => {
    return <h2 className="text-3xl text-center font-bold mb-8">{children}</h2>;
};

export const H3 = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3 className={`text-xl text-center font-bold mb-6 ${className}`}>
            {children}
        </h3>
    );
};
