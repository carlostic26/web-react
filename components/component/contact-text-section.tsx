
import { TextTitle } from "./text-title";


export function ContactTextSection() {

    return <div className="text-left">
        <TextTitle title={"Contacto"} ></TextTitle>
        <h2 style={{ color: 'white' }}>Infórmanos sobre el servicio que necesitas.</h2>
        <br />
        <p style={{ color: 'white' }}>
            Descubre cómo podemos impulsar tu negocio. Agenda una reunión por videollamada o contáctanos por correo para explorar nuestros servicios:<br /><br />
            - Marketing en redes sociales.<br />
            - Diseño de páginas web.<br />
            - Edición multimedia.<br />
            - Asesorías de desarrollo.<br /><br />
            Nuestros clientes satisfechos respaldan la calidad de nuestro trabajo. En una breve videollamada, podrás conocer a nuestro equipo y compartir tus objetivos. Juntos, desarrollaremos la estrategia perfecta para maximizar el potencial de tu empresa.<br /><br />
            Aprovecha nuestra asesoría inicial gratuita y completa. Agenda ahora y da el primer paso hacia el éxito de tu negocio.
        </p>
    </div>
}