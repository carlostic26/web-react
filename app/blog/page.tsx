
import { BlogPage } from "@/components/blog-page";
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";

export default function Home() {
    return (
        <>
            <NavBarResp />
            <BlogPage />
            <FooterService />
        </>
    );
}
