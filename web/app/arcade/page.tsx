import NAVBAR_HEIGHT from "@/_assets/constants/NAVBAR_HEIGHT";
import Arcade from "./_assets/Arcade/Arcade";

const ArcadePage = () => {
    return (
        <main
            style={{ height: `calc(100svh - ${NAVBAR_HEIGHT.rem}rem)` }}
            className={`w-full py-2`}
        >
            <section className="container h-full relative">
                <Arcade />
            </section>
        </main>
    );
};

export default ArcadePage;
