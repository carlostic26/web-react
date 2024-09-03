/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zbSokpVTOgn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface objBlog {
  titulo: string;
  imagenes: string[];
  contenido: string;
  autor: string;
  fecha: Date;
}
// "/img_test.webp"
export function CardBlogH({ objBlog, link }: { objBlog: objBlog, link: string }) {
  return (
    <Card className="flex flex-row items-center gap-6 bg-primary p-6 ml-40 mr-40 rounded-lg shadow-sm ">
      <img
        src={objBlog.imagenes[0]}
        alt="Card Image"
        className="w-[400px] h-[400px] rounded-lg object-cover"
        width="400"
        height="200"
        style={{ aspectRatio: "400/200", objectFit: "cover" }}
      />
      <div className="space-y-2 flex-1 relative">
        <h3 style={{ color: 'white' }} className="text-2xl font-semibold text-white">{objBlog.titulo}</h3>
        <div className="relative max-h-[300px] overflow-hidden">
          <p className="text-muted-foreground max-h-[400px] overflow-hidden relative">
            {objBlog.contenido}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-primary to-transparent"></div>
        </div>


        <Link href={link} passHref>
          <div className="flex justify-end">
            <Button className="mt-2 w-full text-lg font-bold  bg-[#f87171] style={{ color: 'white' }}" >Ver más</Button>
          </div>
          {/* <Link href={link} className="text-sm text-primary hover:underline" prefetch={false}>
          Learn More */}
        </Link>
      </div>
    </Card>
  );
}

