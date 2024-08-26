import Link from 'next/link';
import { SVGProps } from 'react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const FooterService = () => {
    return (
        <footer className="bg-[#122431] text-muted-foreground py-6 px-4 md:px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="flex items-center gap-2 order-1 md:order-2 md:mx-auto">

                    <LogoIcon />
                    <p className="text-sm text-white">© UnaTecla Copyright 2024</p>
                </div>
                <nav className="flex items-center gap-4">
                    <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                        <FacebookIcon />
                    </Link>
                    <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                        <InstagramIcon />
                    </Link>
                    <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                        <WhatsappIcon />
                    </Link>
                </nav>

            </div>
        </footer>
    );
};

function LogoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200.000000 200.000000" width="30px" height="30px"
        >

            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                fill="white" stroke="none">
                <path d="M855 1590 l-176 -211 73 -68 c40 -37 88 -81 106 -97 l33 -29 -70 -72
                        -70 -73 -97 10 -96 10 -97 -89 c-128 -118 -181 -176 -181 -199 0 -10 18 -63
                        40 -118 l41 -99 -72 -146 c-74 -152 -80 -181 -37 -195 18 -5 14 -13 -46 -73
                        -36 -36 -66 -70 -66 -74 0 -9 1685 -10 1729 -1 l31 6 0 867 0 866 -227 -225
                        c-331 -327 -490 -479 -462 -443 13 18 73 91 132 163 l109 130 -69 64 c-157
                        145 -338 306 -345 306 -4 0 -86 -95 -183 -210z m170 -529 l57 -54 -193 -193
                        c-107 -107 -197 -194 -200 -194 -3 0 -9 48 -12 107 -7 144 -1 140 -172 117
                        l-40 -6 60 61 60 61 104 -6 104 -7 81 86 c44 47 84 85 88 84 3 -1 32 -26 63
                        -56z m-443 -382 c3 -71 6 -83 28 -101 l24 -19 -150 -150 c-82 -82 -152 -149
                        -156 -149 -4 0 25 66 64 146 l71 145 -36 90 c-19 49 -34 89 -34 90 3 1 160 26
                        173 28 8 1 13 -27 16 -80z"/>
                <path d="M613 1218 c-33 -16 -48 -61 -33 -98 15 -36 37 -50 77 -50 77 1 106
99 41 144 -26 18 -53 19 -85 4z"/>
            </g>
        </svg>
    )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" stroke="none" viewBox="0 0 50 50" width="30px" height="30px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" /></svg>

    )
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" stroke="none" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>

    )
}

function WhatsappIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" /></svg>

    )
}



function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#162E3E"><path d="M160-186.67v-380q0-15.83 7.08-30 7.09-14.16 19.59-23.33L440-810q17.45-13.33 39.89-13.33T520-810l253.33 190q12.5 9.17 19.59 23.33 7.08 14.17 7.08 30v380q0 27.5-19.58 47.09Q760.83-120 733.33-120h-140q-14.16 0-23.75-9.58-9.58-9.59-9.58-23.75v-213.34q0-14.16-9.58-23.75-9.59-9.58-23.75-9.58h-93.34q-14.16 0-23.75 9.58-9.58 9.59-9.58 23.75v213.34q0 14.16-9.58 23.75-9.59 9.58-23.75 9.58h-140q-27.5 0-47.09-19.58Q160-159.17 160-186.67Z" /></svg>

    )
}
export default FooterService;