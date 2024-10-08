/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uJ6yNSCY7CP
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CardBlogH } from "./card-blog-h"
import { mapBlogs } from "../app/data/blogData";

export function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <main className="flex-1 py-8 px-6">
        <div className="container mx-auto grid gap-8">
          <div className="grid gap-4">
            {Object.keys(mapBlogs).map((key) => (
              <CardBlogH
                key={key}
                objBlog={mapBlogs[key]}
                link={`blog/${key.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
            {/* <CardBlogH />

            <CardBlogH />
            <CardBlogH />
            <CardBlogH /> */}

          </div>
        </div>
      </main>
    </div>
  )
}

