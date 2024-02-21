import {
    UserCircleIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { H2 } from "@/_assets/components/Heading";
import SECTION_ID from "../constants/SECTION_ID";

const ContactSection = () => {
    return (
        <section
            className="flex flex-col items-center gap-4 mb-12"
            id={SECTION_ID.contact}
        >
            <H2>Contact</H2>
            <InfoRow Icon={UserCircleIcon} text="Zdeněk Horáček" />
            <InfoRow Icon={GlobeAltIcon} text="Czech Republic" />
            <InfoRow
                Icon={DevicePhoneMobileIcon}
                text="+420 776 457 107"
                href="tel:+420-776-457-107"
            />
            <InfoRow
                Icon={EnvelopeIcon}
                text="sarrnot@sarrnot.com"
                href="mailto:sarrnot@sarrnot.com"
            />
        </section>
    );
};

type InfoRowProps = {
    Icon: typeof UserCircleIcon;
    text: string;
    href?: string;
};

const InfoRow = ({ Icon, text, href }: InfoRowProps) => (
    <div className="flex items-center gap-4 text-2xl">
        <Icon className="w-8 h-8 text-primary" />
        {href ? (
            <a className="underline hover:text-primary" href={href}>
                {text}
            </a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

export default ContactSection;
