/* Not found example:- to display not found messsage based on path params we use usepathname hook and this requires use CLient
so import this at top.
test with this url - http://localhost:3000/products/1/reviews/1001

*/

"use client";

import { usePathname } from "next/navigation";

export default function NotFoundExample(){
   const pathname = usePathname();
  const productId = pathname.split("/")[2];
   const reviewId = pathname.split("/")[4];

   return(
    <h1>review {reviewId} not found for product{productId}</h1>
   )
}