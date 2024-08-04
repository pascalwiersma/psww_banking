"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Form } from "./ui/form";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            address1: "",
            city: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setisLoading(true);
        
        try {
            if(type === "sign-up") {
                // Sign up logic
                // const newUser = await signUp(data);

                // setUser(newUser);

            }

            if(type === "sign-in") {
                // Sign in logic
                // const response = await signIn({
                //     email: data.email,
                //     password: data.password
                // });
                
                // if (response) router.push("/");


            }
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link
                    href="/"
                    className="flex cursor-pointer items-center gap-1"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="PSWW Bank"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        PSWW
                    </h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user
                            ? "Link Account"
                            : type === "sign-in"
                            ? "Sign In"
                            : "Sign Up"}
                    </h1>
                    <p className="text-16 font-normal text-gray-600">
                        {user
                            ? "Verbind je acount om verder te gaan"
                            : "Vul je gegevens in om verder te gaan"}
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">{/* Plaid link */}</div>
            ) : (
                <>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            {type === "sign-up" && (
                                <>
                                    <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="firstname"
                                            label="Voornaam"
                                            placeholder="Voer je voornaam in."
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="lastname"
                                            label="Achternaam"
                                            placeholder="Voer je achternaam in."
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name="address1"
                                        label="adres"
                                        placeholder="Voer je adres in."
                                    />
                                    <CustomInput
                                        control={form.control}
                                        name="city"
                                        label="Stad"
                                        placeholder="Voer je stad in."
                                    />
                                    <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="state"
                                            label="Land"
                                            placeholder="Voer je land in."
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="postalCode"
                                            label="Postcode"
                                            placeholder="1234CX"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name="dateOfBirth"
                                            label="Geboortedatum"
                                            placeholder="dd/mm/yyyy"
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name="ssn"
                                            label="BSN"
                                            placeholder="12345678"
                                        />
                                    </div>
                                </>
                            )}

                            <CustomInput
                                control={form.control}
                                name="email"
                                label="E-Mail"
                                placeholder="Voer je E-Mailadres in."
                            />
                            <CustomInput
                                control={form.control}
                                name="password"
                                label="Wachtwoord"
                                placeholder="Voer je wachtwoord in."
                            />

                            <div className="flex flex-col gap-4">
                                <Button
                                    type="submit"
                                    className="form-btn"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2
                                                size={20}
                                                className="animate-spin"
                                            />{" "}
                                            &nbsp;
                                            <span>Bezig met laden...</span>
                                        </>
                                    ) : type === "sign-in" ? (
                                        "Inloggen"
                                    ) : (
                                        "Registreren"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">
                            {type === "sign-in"
                                ? "Nog geen account?"
                                : "Heb je al een account?"}
                        </p>
                        <Link
                            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className="form-link"
                        >
                            {type === "sign-in" ? "Registreren" : "Inloggen"}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
