/*
Navigating Programatically Example:- Instead of links we can navigate programatically also.
-> For example in amazon once we submit your order it will auomatically redirect to order confirmation page this kind of programatic navigation is 
essential  for form submission and for many other real world scenerios, we can achieve this using next.js app router.
-> for example we will create  a basic scenerio where place order button in order-product page navigate to home page.
Steps:- 
-> create order-product folder inside app folder and add a page.tsx file inside it.
-> see order-product folder example.

-> to navigate programatically we will use useRouter from next.js then setup the router then use the push method to handle 
navigation. 
-> useRouter only works with client component so decalre use Router.
-> to test navigate to /order-product the click on place order button it will navigate to home page
-> one more way to navigate programatically that is by using redirect function.

*/
"use client";

import { redirect, useRouter } from "next/navigation";

export default function OrderProduct(){

    //setup the router
    const router = useRouter();
    const handleClick = ()=>{
        console.log("placing your order");
        //push router for navigation.
        router.push("/");
        // one more way to route programatically.
        //redirect("/")
    }
return (
    <>
    <h1>Order Product</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
    
)
}