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
    -> see app/articles/[articleId]/page.tsx file
*/