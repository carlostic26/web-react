"use client"
import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardForm } from "../ui/cardform";


export function ContentFormContact() {

    return <div className="space-y-8 md:space-y-10 lg:space-y-12 text-rigth ">
        <CardForm className="rounded-lg  bg-white">
            <CardHeader className="text-left pl-6 pt-2 pr-3">
                <CardTitle className="text-2xl font-bold">Agendar reunión</CardTitle>
                <CardDescription>Hacemos tu página tal y como necesitas con tráfico orgánico.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4 text-left pt-5">
                    <div className="space-y-1">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Correo</Label>
                        <Input id="mail" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="datetime">Programar fecha y hora</Label>
                        <div className="flex space-x-2">
                            <Input id="date" type="date" className="flex-1" />
                            <Input id="time" type="time" className="flex-1" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <Input
                            id="mensaje"
                            placeholder="Escriba un mensaje"
                            className="h-[150px] bg-gray-100 text-left"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Agendar
                    </Button>
                </form>
            </CardContent>

        </CardForm>


        <Card className="bg-gray-100 rounded-lg p-6">
            <CardHeader>
                <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-muted-foreground">Personal Blogger</div>
                    </div>
                </div>
                <p className="mt-4">
                    Hi, I'm John Doe, a passionate personal blogger who loves to share my thoughts and experiences with
                    the world. I'm here to inspire, educate, and connect with like-minded individuals.
                </p>
            </CardContent>
        </Card>
    </div>
}