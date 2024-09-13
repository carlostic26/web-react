
"use client"
import ModalCard from "@/components/component/alerta";
import FooterService from "@/components/component/footer";
import { NavBarResp } from "@/components/component/nav-bar-resp";
import { ContactPage } from "@/components/contact-page";
import { useState } from "react";

export default function Home() {

    const [showCard, setShowCard] = useState(false); // true o false
    const [cardMensaje, setCardMensaje] = useState('Todo bien o q');

    const handleShowCard = () => { // cambian el estado 
        setShowCard(true);
    };

    const handleCloseCard = () => {
        setShowCard(false);
    };

    const actualizarMensaje = (nuevoMensaje: string) => {
        setCardMensaje(nuevoMensaje);
    };

    return (
        <>
            <NavBarResp />
            <ContactPage show={showCard} handleShow={handleShowCard} handleMensaje={actualizarMensaje} />
            <FooterService />
            <ModalCard
                showCard={showCard}
                message={cardMensaje}
                onClose={handleCloseCard}
            />
        </>
    );
}
