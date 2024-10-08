/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dLFZxQMEZZ2
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

// import { JSX, SVGProps } from "react"
import { ContentFormContact } from "./component/form-contact"
import { ContactTextSection } from "./component/contact-text-section"

interface ContactPageProps {
  show: boolean;
  handleShow: () => void;
  handleMensaje: (nuevoMensaje: string) => void;
}

export function ContactPage({ show, handleShow, handleMensaje }: ContactPageProps) {
  return (
    <div className="bg-primary ">

      <main className="container mx-auto max-w-7xl py-4 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr] lg:gap-12">

          <div className="w-[90%]">
            <ContactTextSection />

          </div>
          <div className="w-[90%] ml-0">
            <ContentFormContact show={show} handleShow={handleShow} handleMensaje={handleMensaje} />

          </div>
        </div>
      </main>


    </div>
  )
}

// function PenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//     </svg>
//   )
// }
