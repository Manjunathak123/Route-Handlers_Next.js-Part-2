/* Handling Errors in Layouts:- An error.tsx file will handle errors for all its nested child 
segments but there is an interesting catch with layouts.tsx components in the same segments.
-> The error boundary won't catch erros thrown in layout.tsx within the same segement because of 
how component hirerachy works.
-> The layout actually sits above the error boundary in the component tree.
-> for example copy error.tsx file from [reviewid] folder into the [productid] folder and in [productId] 
layout.tsx file add same random error throw logic which is there in error.tsx file.
then reload the page then runtime error will come because error.tsx file won't handle errors from a layout.tsx file 
in the same segment so the solutions is we need to move error.tsx file upto the layout parent segment means we have
 to move to products route

*/