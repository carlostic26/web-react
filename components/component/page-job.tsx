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
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-10 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="mb-10 text-center text-2xl font-bold text-primary-foreground">Quienes somos</h1>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/img_test.webp"
                  alt="Team Member 1"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">John Doe, CEO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt aliquet, nunc nunc lacinia nunc, nec tincidunt nisl nunc nec nunc. Sed euismod, nunc nec.</p>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/img_test.webp"
                  alt="Team Member 1"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">Jane Smith, Designer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt aliquet, nunc nunc lacinia nunc, nec tincidunt nisl nunc nec nunc. Sed euismod, nunc nec.</p>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="mb-4" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                <AvatarImage
                  src="/img_test.webp"
                  alt="Team Member 1"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </Avatar>
              <p className="text-sm text-muted-foreground">Bob Johnson, Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt aliquet, nunc nunc lacinia nunc, nec tincidunt nisl nunc nec nunc. Sed euismod, nunc nec.</p>

            </div>
          </div>


        </div>
      </section>


      <section className="py-10 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
            <div className="space-y-5">

              <Carousel />
            </div>
            <div className="space-y-2">

              <Carousel />
            </div>
            <div className="space-y-2">

              <Carousel />
            </div>
            <div className="space-y-2">

              <Carousel />
            </div>
            <div className="space-y-2">

              <Carousel />

              <h2 className="text-2xl font-bold">Creación de páginas web</h2>
              <h2 className="text-2xl font-bold">Trabajos realizados</h2>
              <h2 className="text-2xl font-bold">Creacion de contenido</h2>
              <h2 className="text-2xl font-bold">Restaruación de imagen</h2>
              <h2 className="text-2xl font-bold">Desarrollo de aplicaciones móviles</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
