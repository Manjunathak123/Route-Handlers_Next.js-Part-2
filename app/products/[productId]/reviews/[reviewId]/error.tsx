"use client";

import { useRouter } from "next/navigation";
import { start } from "node:repl";
import { startTransition } from "react";

/* Error Handling Example:- Error handling we can implement with a special file called Error.tsx 
-> for example in reviews/[reviewId] folder page.tsx will throw exception when random equal to 1 this error diectly will not display
in browser.
-> error.tsx file will acts error boundary around page. if any error throws in page.tsx file it will be passed as a param 
to error.tsx file and error boundaries must be client components.
-> reviews/[reviewId] folder page.tsx and error.tsx file
-> test this using products/1/reviews/1

*/

/* Recovering From Errors:-
Previously we learned how to handle errors using error.tsx file, while some errors are serious others might
be temporary and can be fix with a simple retry now we will look at how to recover from errors.
-> apart from error error boundary provides one more prop called reset function.
-> we can make use of this reset function by adding button in jsx that triggers it onclick
-> test this using products/1/reviews/1
-> to attempt server side recovery we need reliy on start transition from react and useRouter from next.js
-> so import useRouter and startTransition.
*/

/*
// below is for error.tsx file example
export default function ErrorBoundary({error}:{error:Error}){
    return <div>{error.message}</div>
}

*/

//Recovering from erros example

export default function ErrorBoundary({error, reset}:
    {error:Error, reset: ()=> void}){
        const router =  useRouter();
        //define reload function that wraps router.refresh and reset.
        const reload = ()=>{
          startTransition(()=>{
            router.refresh();
            reset();
          })
        }
    return(
        <div>
<p>{error.message}</p>
<button onClick={()=> reload()}>Try Again</button>
</div>
    )
}