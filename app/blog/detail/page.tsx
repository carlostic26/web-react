import DetailBlog from "@/components/component/blog-detail";
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";

export default function Home() {
    return (
        <>
            <NavBarResp />
            <DetailBlog />
            <FooterService />
        </>
    );
}