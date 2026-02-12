/* Temaplates Example:- to undertand this first we need to understand specific behaviour of layouts.
   -> For example in (auth) folder layout.tsx file will handle navigation between three links that /register, /login
   and /forgot-password. in this layout add an input element to collect data.
   -> Then navigate to /register in this type some data in input field. if we navigate from register to login the input field
   value will not reset this is where templates file.
   -> to create a fresh instance for each navigation(means data will be cleared in forms for each navigation)
    we will use template files. just chnage the layout.tsx file to template.tsx

    Templates:- Templates are similar to layouts in that they are also UI shared between multiple pages in your application
    -> whenever a user navigates between routes sharing a temaplate, ypu get  a complete fresh start.
    -> a new template component instance is mounted
    -> DOMelements are recreated
    -> state is clared
    -> effected are re-synchronized
    -> create a template by exporting a default React component from a template.js or template.tsx file
    -> Like layouts, template need to accept a children prop to render the nested route segments.
*/