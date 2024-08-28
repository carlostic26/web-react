/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/KbCYax31ukg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import React from 'react';
import Carousel from './carousel';

export function PageJob() {

  const imagesTrabajosRealizados = [
    { src: "/img-btmstudio-project.webp", alt: "btm-studio-webside", link: "https://example.com/btmstudio" },
    { src: "/img-cursinapp-project.webp", alt: "Web Page 2", link: "https://play.google.com/store/apps/details?id=app.cursin.appcursin" },
    { src: "/img-natillera-project.webp", alt: "Web Page 3", link: "https://natillera.com/" },
    { src: "/img-repolla-project.webp", alt: "Web Page 4", link: "https://repolla.com/" },
    { src: "/img-repuestos-merida-project.webp", alt: "Web Page 5", link: "https://play.google.com/store/apps/details?id=com.btmstudio.rep_merida" },
    { src: "/img-robotapp-project.webp", alt: "Web Page 6", link: "https://play.google.com/store/apps/details?id=com.robotdepantalla.blogspot" },
    { src: "/img-hubiaap-project.webp", alt: "Web Page 7", link: "https://play.google.com/store/apps/details?id=com.blogspot.hubiaapp" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary py-10 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-10 text-center text-2xl font-bold text-primary-foreground">Quienes somos</h1>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/eliasprofile.webp"
                  alt="Team Member Elias"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">Desarrollador Elias Motilla. Con mas de 10 años de experiencia en el sector trabajando con tecnologías como Html, Css, Js, Next.js, React, Flutter, Android, Java, ...

                <br /><br />Especialidad: Mobile, Web, Destokp</p>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/img_test.webp"
                  alt="Team Member 1"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">Desarrollador Alvaro Gallo, con mas de 25 años de experiencia en desarrollo web y hosting trabajando en el sector con herramientas como Lavaravel, php, ...

                <br /><br />Especialidad: Web, hosting, servidores</p>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/img-profile-carlos.webp"
                  alt="Team Member 1"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">Desarrollador Carlos Peñaranda, con mas de 2 años de experiencia trabajando en el sector Mobile usando tecnologias como flutter, dart, kotlin...

                <br /><br />Especialidad: Mobile (Flutter, dart, kotlin), edicion multimedia (Capcut, Sony vegas, Premiere).
              </p>

            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-center mt-5">Creación de páginas web</h2>
              <Carousel
                images={imagesTrabajosRealizados}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-center mt-5">Trabajos realizados</h2>
              <Carousel
                images={imagesTrabajosRealizados}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-center mt-5">Creación de contenido</h3>
              <Carousel
                images={imagesTrabajosRealizados}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-center mt-5">Restaruación de imagen</h2>
              <Carousel
                images={imagesTrabajosRealizados}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-center mt-5">Desarrollo de aplicaciones móviles</h2>
              <Carousel
                images={imagesTrabajosRealizados}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
