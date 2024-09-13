"use client"
import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardForm } from "../ui/cardform";
import { useState } from "react";
import SelectList from "./select-list";

interface ContentFormContactProps {
    show: boolean;
    handleShow: () => void;
    handleMensaje: (nuevoMensaje: string) => void;
}

export function ContentFormContact({ show, handleShow, handleMensaje }: ContentFormContactProps) {

    const [selectedOption, setSelectedOption] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [servicio, setServicio] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        setServicio(event.target.value);
    };

    const options = [
        { value: 'opcion1', label: 'Desarrollo Web' },
        { value: 'opcion2', label: 'Desarrollo Mobile' },
        { value: 'opcion3', label: 'Creación de contenido' },
        { value: 'opcion4', label: 'Asesoría Técnica' },
    ];

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // cambia a true para mostrar el dialogo 
        // Busca la opción seleccionada
        const selectedOptionObject = options.find(option => option.value === selectedOption);

        const formData = {
            nombre,
            email,
            selectedOption: selectedOptionObject ? selectedOptionObject.label : selectedOption,
            fecha: date,
            hora: time,
            telefono: phone,
            mensaje,
        };

        console.log(formData);

        try {
            const response = await fetch('/api/guardaragenda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {

                // Manejar éxito
                // alert("Se ha agendado la reunión.");
                handleMensaje("Se ha agendado la reunión.");
                handleShow();
            } else {

                // Manejar error
                const errorData = await response.json();
                console.error('AGENDAR ELSE Error:', errorData);

                // alert("Hubo un error al agendar la reunión");
                handleMensaje("Hubo un error al agendar la reunión");
                handleShow();

            }
        } catch (error) {
            console.error('AGENDAR catch Error:', error);
            handleMensaje("Hubo un error al enviar los datos");
            handleShow();
            // alert("Hubo un error al enviar los datos");
        }
    };

    return (
        <div className="space-y-7 md:space-y-10 lg:space-y-7 text-right">
            <CardForm className="rounded-lg bg-white">
                <CardHeader className="text-left pl-6 pt-2 pr-3">
                    <CardTitle className="text-2xl font-bold">Agendar reunión</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">Hacemos tu página tal y como necesitas con tráfico orgánico.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-2 text-left pt-5" onSubmit={handleSubmit}>
                        <div className="block text-sm font-medium text-gray-700">
                            <Label htmlFor="name">Nombre</Label>
                            <Input onChange={(e) => setNombre(e.target.value)} id="name" placeholder="Escribe tu nombre" />
                        </div>
                        <div className="space-y-1 block text-sm font-medium text-gray-700">
                            <Label htmlFor="email">Correo</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} id="mail" type="email" placeholder="Escribe tu email" />
                        </div>
                        <div className="space-y-1 block text-sm font-medium text-gray-700">
                            <Label htmlFor="email">Whatsapp</Label>
                            <Input onChange={(e) => setPhone(e.target.value)} id="mail" type="text" placeholder="Escribe tu telefono (+57 320 87654321)" />
                        </div>
                        <div className="space-y-1">
                            <SelectList options={options} onChange={handleChange} />
                        </div>

                        <div className="space-y-1 block text-sm font-medium text-gray-700">
                            <Label htmlFor="datetime">Programar fecha y hora</Label>
                            <div className="flex space-x-2">
                                <Input onChange={(e) => setDate(e.target.value)} id="date" type="date" className="flex-1" />
                                <Input onChange={(e) => setTime(e.target.value)} id="time" type="time" className="flex-1" />
                            </div>
                        </div>
                        <div className="space-y-1 block text-sm font-medium text-gray-700">
                            <Label htmlFor="mensaje">Mensaje</Label>
                            <textarea
                                id="mensaje"
                                onChange={(e) => setMensaje(e.target.value)}
                                placeholder="Escriba un mensaje"
                                className="w-full h-[150px] bg-gray-100 text-left placeholder-center placeholder-top p-2 border border-gray-300 rounded-lg"
                                style={{
                                    display: 'block',
                                    paddingTop: '10px',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Agendar
                        </Button>
                    </form>
                </CardContent>
            </CardForm>
        </div>
    );
}
