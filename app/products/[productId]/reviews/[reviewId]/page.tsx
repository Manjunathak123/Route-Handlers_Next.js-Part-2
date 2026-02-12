
function getRandomeInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ProductReview ({params}:{
params: Promise<{productId: string; reviewId:string}>
}){
   const random =  getRandomeInt(2);
   if(random){
    throw new Error("error loading review");
   }
    const {productId, reviewId} = await params;
    return (
        <h1> Review {reviewId} for product{productId}</h1>
    )
}