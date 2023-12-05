type Props = {
    heading: string;
    items: string[];
};

const Box = ({ heading, items }: Props) => (
    <div className="shadow-xl bg-white p-8">
        <div className="text-xl text-center border-b pb-2 border-primaryLightest">
            {heading}
        </div>
        <ul className="flex flex-wrap justify-center gap-6 mt-6 list-[square] list-inside marker:text-primary">
            {items.map((item, i) => (
                <li key={i} className="">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default Box;
