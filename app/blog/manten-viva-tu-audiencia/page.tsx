import DetailBlog from "@/components/component/blog-detail-template";
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";

export default function BlogMantenVivaTuAudiencia() {
    return (
        <>
            <NavBarResp />
            <DetailBlog titulo={""} />
            <FooterService />
        </>
    );
}