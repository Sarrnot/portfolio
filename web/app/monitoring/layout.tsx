import NavigationBar from "@/_assets/components/NavigationBar";
import "./globals.css";

export { default as metadata } from "@/_assets/config/metadata";

const RootLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <html className="motion-safe:scroll-smooth" lang="cz">
            <body className="bg-primaryDark text-text">
                <NavigationBar bgColor="bg-surface"></NavigationBar>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
