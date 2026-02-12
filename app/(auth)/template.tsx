"use client";

import Link  from "next/link";
import  {usePathname } from "next/navigation";
import { useState } from "react";

/*
Active Links:- to find which link is active next js provides usePathName. server components are
default in next js but hooks are client components so we need to add useClient at the top of our file.
-> to provide the styles using tailwind css we use className
-> "font-bold mr-4" and  "text-blue-500 mr-4" these are the tailwind css styles. font-bold will give us font bold
text-blue-500 gives us a nice blue color. mr-4.
these styles will not show in browser because we removed global css file earlier. so create a styles.css file in auth folder.
*/

const navLinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href:"/login"},
    {
        name: "Forgot Password",
        href: "/forgot-password"
    }
];

export default function AuthLayout({children}: {children: React.ReactNode}){
    const pathName = usePathname();
    const [input, setInput] = useState("");
    return(
        <div> 
            <div>
                <input value={input} onChange={(e) =>setInput(e.target.value)}/>
            </div>
            {navLinks.map((link)=>{
                const isActive = pathName === link.href || (pathName.startsWith(link.href) &&
            link.href !== "/")
                return (
                    <Link 
                    className={isActive ? "font-bold mr-4": "text-blue-500 mr-4"}
                    href={link.href} key={link.name}>
                    {link.name}
                    </Link>
                )
            })}
            {children}
         </div>
    )}