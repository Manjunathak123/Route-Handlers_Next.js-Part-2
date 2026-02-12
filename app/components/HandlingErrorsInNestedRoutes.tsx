/* Handling Errors in Nested Routes:- Errors always bubble up to find the closest parent error
 boundary this means an error.tsx file handles errors not just for its own folder, but for all 
 the nested child segments below it too.
-> By Strategically placing error.tsx files at different levels in your route folders, yoy can
control exactly how detailed you error handling gets 
-> for our error.tsx file from [reviewId] folder upto the products route when we refresh the browser  and trigger an error 
we will see same error message but there is a difference entire products folder replaces the error.tsx file that is because
 error form page.tsx in the [reviewId] folder bubbles up until it find the nearest error boundary which no in the products folder.
 -> Where you put error.tsx file makes a huge difference it determines exactly which parte=s of your UI get affected when 
 things go wrong. 

*/