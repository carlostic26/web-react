"use client"
import React, { useState } from 'react'
import { BookmarkIcon, Share2Icon, Clock3Icon, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/component/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function DetailBlog() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ color: 'white' }} className="flex flex-col lg:flex-row bg-slate-900 text-white min-h-screen bg-personalizado-background">
      <aside className={`transition-all duration-500 ${collapsed ? "w-200" : "w-full lg:w-1/3"} p-4 lg:p-6`}>
        <div className="flex justify-between items-center mb-4">
          {!collapsed && <h2 className="ml-5 mt-5 text-xs font-semibold">Otras personas también vieron ...</h2>}
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        </div>
        <ScrollArea className={`h-[calc(100vh-8rem)] overflow-auto"}`}>
          {[...Array(55)].map((_, i) => (
            <Card key={i} className={`mb-4 bg-slate-800 transition-all duration-500 ease-in-out ${collapsed ? "w-20" : "w-full"}`}>
              <CardContent className={`p-4 flex items-start space-x-4 ${collapsed ? "justify-center p-0" : ""}`}>
                <div className={`${collapsed ? "w-full" : "w-1/3"}`}>
                  <Image width={200} height={200} className="aspect-video bg-slate-700 rounded-md" src="/edicion de video.webp" alt="Portada blog" />
                </div>
                {!collapsed && (
                  <div className="w-2/3">
                    <h3 className="font-semibold">¡Deja de CONFUNDIR el 5G con el 5 GHz!</h3>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </aside>
      <Separator orientation="vertical" className="bg-white lg:block" />
      <main className="flex-1 p-4 lg:p-6 overflow-auto h-[calc(100vh-8rem)] w-full">
        <article className="mx-20px">
          <h1 className="text-2xl font-bold mb-1">¡Deja de CONFUNDIR el 5G con el 5 GHz!</h1>
          <p className="text-gray-600 text-xs font-light">Por: Carlos Peñaranda</p>
          <p className="text-gray-600 text-xxxs font-light mb-2">4/09/2024</p>
          <div className="bg-slate-700 rounded-lg mb-1 mr-20 flex items-start justify-start">
            <img src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2019/02/Que-es-un-blog.webp" alt="Descripción de la imagen" className="w-full h-80 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-between mb-6 mr-20">
            <div className="flex items-center space-x-2">
              <Clock3Icon className="w-4 h-4 mr-1" />
              <span className="text-sm">5 min de lectura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Share2Icon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <p className="mb-4 mr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            <span className="font-bold"> magna aliqua</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            <span className="font-bold"> qui officia deserunt mollit anim id est laborum</span>.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravi...
          </p>
        </article>
      </main>


    </div>
  )
}