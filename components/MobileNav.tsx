"use client";

import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width="30"
                        height="30"
                        alt="Menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link
                        href="/"
                        className="flex cursor-pointer items-center gap-1 px-4"
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

                    <div className="mobile-nav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive =
                                        pathname === item.route ||
                                        pathname.startsWith(`${item.route}/`);

                                    return (
                                      <SheetClose asChild key={item.route}>
                                        <Link
                                            href={item.route}
                                            className={cn("mobilenav-sheet_close w-full", {
                                                "bg-bank-gradient": isActive,
                                            })}
                                        >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        "brightness-[3] invert-0":
                                                            isActive,
                                                    })}
                                                />
                                            <p
                                                className={cn("text-16 font-seminbold text-black-2", {
                                                    "text-white": isActive,
                                                })}
                                            >
                                                {item.label}
                                            </p>
                                        </Link>
                                      </SheetClose>
                                    );
                                })}

                                {/* User */}
                            </nav>
                        </SheetClose>

                        {/* Footer */}
                        <Footer user={user} type="mobile" />
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
