import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CardSection } from "../ui/cardform"

export default function AsiTrabajamos() {
    const steps = [
        { title: "Cuales son tus necesidades", description: "Antes de comenzar, es importante que sepas exactamente qué necesitas. ¿Buscas una página web 🌐, una campaña de marketing 📈, edición de video 🎥 o asesoría 💼? Cuéntanos tus necesidades para que podamos ofrecerte la mejor solución." },
        { title: "Conoce los Límites", description: "Es fundamental que conozcas los límites de nuestros servicios. Nos especializamos en la creación de landing pages 🖥️, edición de videos comerciales para TikTok 📱 y asesorías en ciertos lenguajes. Así, sabrás exactamente qué esperar de nosotros." },
        { title: "Ponte en Contacto", description: "Estamos aquí para ayudarte. Puedes agendar una reunión directamente en este sitio web 📅 o enviarnos un correo 📧 para recibir una asesoría personalizada sobre el servicio que necesitas. ¡Estamos a un clic de distancia!" },
        { title: "Te mostramos un avance", description: "Con lo acordado en la reunión, comenzaremos a trabajar y te presentaremos el avance para que decidas continuar." },
        { title: "Manos a la Obra", description: "Una vez decidas continuar y haber realizado el pago 💳, podrás detallar la elaboración del servicio hasta llegar a un resultado que se estableció desde el inicio. Te mantendremos informado con avances regulares y te entregaremos el producto final en los tiempos establecidos." },
    ]

    return (
        <CardSection className="w-full max-w-2xl mx-auto p-4 pt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Asi trabajamos 🚀</h2>
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <Card key={index} className="w-full">
                        <CardHeader className="flex flex-row items-center ml-4 gap-2 pb-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                                {index + 1}
                            </div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{step.description}
                                {index === steps.length - 1 && (
                                    <>
                                        <br />
                                        ¡Estamos emocionados de trabajar contigo!🎉
                                    </>
                                )}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </CardSection>
    )
}