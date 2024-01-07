type Props = {
    data: string;
};

const SingleValue = (props: Props) => {
    const { data } = props;

    return (
        <div className="flex justify-center items-center text-3xl h-full text-center">
            {data}
        </div>
    );
};

export default SingleValue;
