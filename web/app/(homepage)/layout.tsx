import type { Metadata } from "next";
import "./globals.css";
import "../components.css";
import NavigationBar from "./_assets/components/NavigationBar";
import NavbarContent from "./_assets/helpers/NavbarContent";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio - Zdeněk Horáček",
};

const RootLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <html className="motion-safe:scroll-smooth" lang="cz">
            <body>
                <NavigationBar>
                    <NavbarContent />
                </NavigationBar>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
