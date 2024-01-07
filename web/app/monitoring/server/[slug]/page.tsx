import Overview from "./_assets/parts/Overview";
import Widgets from "./_assets/parts/Widgets";

type Props = {
    params: {
        slug: string;
    };
};

const ServerDetailPage = (props: Props) => {
    const { slug } = props.params;

    return (
        <main className="container flex flex-col gap-6 py-6">
            <Overview slug={slug} />
            <Widgets slug={slug} />
        </main>
    );
};

export default ServerDetailPage;
