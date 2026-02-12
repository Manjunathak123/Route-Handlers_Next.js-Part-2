/* Loading Example:- tile now we learned some special files like page.tsx, layout.tsx 
and temaplte.tsx and not-found.tsx files.

Loading.tsx file:- This file helps us create loading states that users see while waiting for content
to load ina  asepecific route segment.
-> The loading states appear instantly when navigating, letting users know that the application is 
responsive and actively loading content.
-> to create a loading state we need to create loading.tsx file
-> create loading.tsx file in blog folder. loading.tsx file automatically wraps page.tsx file 
and its nested childern with in a react suspense boundary.
-> to see a loading state create 2 seconds delay
-> see blog folder page.tsx file

*/

import { Metadata } from "next"

export const metaData: Metadata = {
    title:{
        absolute:"Blog"
    }
}
//in this function we will set delay 2 sec
export default async function Blog(){
    await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("intentional delay")
        }, 2000)
    })
    return <h1> Blog Example</h1>
}