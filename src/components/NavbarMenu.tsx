'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function NavbarMenu() {

    const [active, setActive] = useState<string | null>(null);

  return (
    <>
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem item="Home" setActive={setActive} active={active}></MenuItem>
                </Link>

                <Link href={'/about'}>
                    <MenuItem item="About" setActive={setActive} active={active}></MenuItem>
                </Link>

                <Link href={'/contact'}>
                    <MenuItem item="Contact Us" setActive={setActive} active={active}></MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Projects">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href='#'>Project 1</HoveredLink>
                    <HoveredLink href='#'>Project 2</HoveredLink>
                    <HoveredLink href='#'>Project 3</HoveredLink>
                </div>
                </MenuItem>
            </Menu>
        </div>
    </>
  )
}

export default NavbarMenu