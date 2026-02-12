/* Handling Global Erros:- If an error boundary can't catch errors in the layout.tsx file from the 
same segment, what about erros in the root layout.
-> it doesn't have a parent segment - how do we handle those errors?
-> for this Next.js provides a special file called global-error.tsx that goes in your root app directory.
-> This is your last line of defense when something goes catastrophically wrong at the higesht level of your app.
-> to introduce error in root layout we will create error-wrapper.tsx file and add a global-error.tsx file in the
 app folder.
 -> To test this navigate to localhost:3000 then we will see newly included wrapper component wrapping page.tsx 
 file in the app folder.
 -> Then in layout.tsx file import the component and add it to jsx around the children. but we will get error because 
 global error boundary works only with production mode.
 -> to start server in production mode run npm run build command and then npm run start

*/