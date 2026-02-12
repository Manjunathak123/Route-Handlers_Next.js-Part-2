/* Dynamic routing:- every page in app router receives route parameters through the params prop. so we destructure it as params.
type of params is a promise that resolves to an object containing dynamic segment as key value pairs in our case that productid.
we will use async await to resolev the promise and access the dynamic segment.

*/
export default async function ProductDetails({params }:{
    params: Promise<{productId:string}>
}){
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>
}