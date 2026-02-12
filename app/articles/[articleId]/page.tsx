import Link from "next/link";
import {use} from 'react';

/* Params and Search params Introduction:-
  For a given URL, params is a promise that resolves to an object containing the dynamic route parameters like id.
  -> Search params is a promise that resolves to an object containing the query parameters like filters and sprting.
create below two links in app/page.tsx file
<Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
    <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>

    here breaking-news-123 is dynamic route parameter and lang=fr is query parameter.
    -> now define a parameter for article define article folder and articleid folder 
    How routing will happen:-
    when we hit http://localhost:3000/ routing will come to app/page.tsx after that based on routing data will display

    How to get params and search params from NewsArticle compoennts and display them in ui:-  means  from this url 
    http://localhost:3000/articles/breaking-news-123?lang=fr we have to get params(breaking-news-123) and search paramsn(lang=fr)
    -> destructure params and searchParams params in NewsArticle component.
    -> params is a promise that resolves to an object that containing dynamic route parameter, in our case 
    articleId is dynamic route parameter.
    -> searchParams is a promise that resolves an object containing the query parameters. in this lang is a query parameter and value can be englis, spanish etc.
    -> since params and searchParams are promises, we will need to await them in the component. await means we are getting the value.
    -> NewsArticle is a client component so it will not support async and await so to access the params and searchParams in client 
    component so to access these we need to use use hook from react.
    -> to access we will use async awit for server component and use for client component in Next.js
    Note:- while page.tsx has access to both params and searchPArams and layout.tsx only has access to params.
    */ 

export default  function NewsArticle({params, searchParams}:{
    params: Promise<{articleId: string}>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr"}>;
}){
    const {articleId} = use(params);
   const { lang = "en"} =  use(searchParams);
   // here lang for searchParams has default value english.
    /* here we are accessing params from url
    <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>

    */
    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}