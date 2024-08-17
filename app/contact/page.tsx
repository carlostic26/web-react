
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";
import { ContactPage } from "@/components/contact-page";

export default function Home() {
    return (
        <>
            <NavBarResp />
            <ContactPage />
            <FooterService />
        </>
    );
}
