/* Unmatched Routes:- When navigating through the UI like clicking links, next.js keeps showing whatever was
 in the unmatched slots before.
 -> create Link in notification page.tsx file and create archive folder in notifications folder.
 once we click on archied link then changes the url to complext-dashboard/archived and ui shows the archived view and 
 clicking on default view changes back to complex-dashboard.
 -> In case of unmatched routing if you navigate complext-dashboard it will display the segments that is user, revenue etc
 when you route complext-dashboard/archived then also it will show all the segments with archived in this case only archieved 
 notification is matched and remining are unmatched but still it will display and it will be handled unmatched routed differently 
 depending on you navigation.
 -> When navigating through the UI like clicking links, next.js keeps showing whatever was
 in the unmatched slots before.
 when page reload:-
 -> when we reload the page Next.js looks for a default.tsx file in each unmatched slot.
 ->  this file is critical as it serves as a fallback to render content  when the framwork cannot retrive a slots active 
 state from the current URL.
 -> Without the file you will get 404 error so create four default.tsx file to avoid 404. see default.tsx file in complex-dashboard
 then once we reload the page it will diplay the data which is there in default.tsx file in all folders
-> By using this parallel routes we can display multiple pages simultaneously without changing the url.
*/