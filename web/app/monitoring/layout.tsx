import NavigationBar from "@/_assets/components/Navigation/NavigationBar";
import "./globals.css";
import NavbarContent from "./_assets/helper/NavbarContent";

export { default as metadata } from "@/_assets/config/metadata";

const RootLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <html className="motion-safe:scroll-smooth" lang="cz">
            <body className="bg-primaryDark text-text">
                <NavigationBar bgColor="bg-surface">
                    <NavbarContent />
                </NavigationBar>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
