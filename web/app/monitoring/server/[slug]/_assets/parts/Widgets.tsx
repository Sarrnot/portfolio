import Widget from "../components/Widget";
import configs from "./configs";

type Props = {
    slug: string;
};

const Widgets = (props: Props) => {
    const { slug } = props;

    return (
        <section className="grid gap-6 auto-cols-fr">
            {configs(slug).map((config) => (
                <Widget slug={slug} config={config} />
            ))}
        </section>
    );
};

export default Widgets;
