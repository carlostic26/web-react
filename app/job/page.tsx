
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";
import { PageJob } from "@/components/component/page-job";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <NavBarResp />
            <PageJob />
            <FooterService />
        </>
    );
}
