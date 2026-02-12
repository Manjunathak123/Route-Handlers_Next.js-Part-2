/* Loading Example:- tile now we learned some special files like page.tsx, layout.tsx 
and temaplte.tsx and not-found.tsx files.

Loading.tsx file:- This file helps us create loading states that users see while waiting for content
to load in a  asepecific route segment.
-> The loading states appear instantly when navigating, letting users know that the application is 
responsive and actively loading content.
-> to create a loading state we need to create loading.tsx file
-> create loading.tsx file in blog folder. loading.tsx file automatically wraps page.tsx file 
and its nested childern with in a react suspense boundary.
-> to see a loading state create 2 seconds delay
-> see blog folder page.tsx file

loading.tsx file benefits:-
1. It gives users immediate feedback when they navigate somewhere new. This makes your app 
feel snappy and responsive, and users know thei click actually did something.
2. Next.js keeps shared layouts interactive while new content loads users can still use things like 
navigation menus or sidebars even if the main content isn't ready yet
*/