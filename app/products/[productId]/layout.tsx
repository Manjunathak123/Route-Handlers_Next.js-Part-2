/* Nested layout example:- 
here cildern prop represents [productId} page.tsx content
*/

export default function ProductDetailsLayout({children}:{
children: React.ReactNode
}){
return(
    <>
    {children}
    <p>Featured products</p>
    </>
)
}