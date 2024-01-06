import Overview from "./_assets/parts/Overview";
import ServerList from "./_assets/parts/ServerList";

const HomePage = () => {
    return (
        <main className="container flex flex-col gap-6 py-6">
            <Overview />
            <ServerList />
        </main>
    );
};

export default HomePage;
