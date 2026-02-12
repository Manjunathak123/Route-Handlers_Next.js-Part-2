/* Parallel Routes Example:- Parallel routing is an advanced routing mechanism that lets us render
 multiple pages simultaneously within the same layout.
 -> For example Builiding a complex dashboard for web application for example in dashboard we need 
 to display User analytics, Revenue  metrics and notifications all at once in the same route. the traditional way is we need
  to display three seperate components for each part and organize them in a layout.tsx file inside a dashboard folder inside the  app
  folder. then we need to create layout.tsx file inside complex-dashboard folder and we need to organize them. for rendering 
  we will create page.tsx file. while this traditional way works well but this paralle routes achieve some extra benefits.
  
  How to set Parallel routes:-
  -> Parallel routes in Next.js are defined using a feature known as "slots".
  -> Solts help organize content in a modular way.
  -> To create a slot, we use the "@folder" naming convention.
  -> Each defined slot automatically becomes a prop in its corresponding 'layout.tsx' file
  -> for our complex dashboard we will create three folders @user folder for user analytics inside 
  this we will create page.tsx file
  -> After creating three folders with @folder in complex-dashboard we can use these three slots in layout.tsx file,
  these three tsx files automatically passed as a props to layout.tsx file and no imports are needed.
  -> test this using /complext-dashboard route we will see complex dashboard and important thing is slots are not route 
  segments and don't effect url structure. means /complext-dashboard/users or /complext-dashboard/@users we won't see
   userAnalytics we will got 404.

   Parallel route use cases:-
   - Dashboards with multiple sections
   - Spli-view interfaces
   - multi-pane layouts
   - complex -admin features

   Parallel routes benefits:-
  1. Parallel routes are great for splitting a layout into managable slots(especially when different 
  teams work on different parts) 

  Independent route handling:-
  -> Each slot in your layout, can handle its own loading and error states.
  -> This granualar control is particularly useful in scenerios where different sections of the page load at 
  varying speeds or encounter unique errors

  Subnavigations in routes:-
  -> Each slot can essentially funcion as a mini-application, complete with ist own navigation add state management
  -> Users can interact with each section seperately, applying filters, sorting data or navigating through pages 
  without affecting other parts.

*/