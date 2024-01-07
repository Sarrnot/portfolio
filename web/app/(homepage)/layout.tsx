import "./globals.css";
import NavigationBar from "../_assets/components/Navigation/NavigationBar";
import NavbarContent from "./_assets/helpers/NavbarContent";

export { default as metadata } from "@/_assets/config/metadata";

const RootLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <html className="motion-safe:scroll-smooth" lang="cz">
            <body className="text-text">
                <NavigationBar mobileMenu={true}>
                    <NavbarContent />
                </NavigationBar>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
