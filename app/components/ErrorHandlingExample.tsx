/* Error Handling Example:- Error handling we can implement with a special file called Error.tsx 
-> for example in reviews/[reviewId] folder page.tsx will throw exception when random equal to 1 this error diectly will not display
in browser.
-> error.tsx file will acts error boundary around page. if any error throws in page.tsx file it will be passed as a param 
to error.tsx file and error boundaries must be client components.
-> reviews/[reviewId] folder page.tsx and error.tsx file
-> test this using products/1/reviews/1

error.tsx :-
-> It automatically wraps route segements and their nested children in a React Error Boundary
-> You can create custom error UIs for specific segements using the file-system hireracgy.
-> It isolates errors to affect segemenst while keeping the rest of your app functional
-> It enables you to attempt to recover from an error without requiring a full page reload.
*/