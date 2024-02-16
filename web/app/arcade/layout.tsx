import NavigationBar from "@/_assets/components/Navigation/NavigationBar";
import "./globals.css";

export { default as metadata } from "@/_assets/config/metadata";

const RootLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <html className="motion-safe:scroll-smooth" lang="cz">
            <body className="bg-surface text-text">
                <NavigationBar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
