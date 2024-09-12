1.  Explain the differences between `client-side routing` and `server-side routing`.

Client side routing allows users to navigate an application without reloading the entire page by handling the routing using JavaScript instead of sending a request to the server. This makes things load much faster. The initial page load is usually slower because you have to load all the routes up front.

Server side routing uses different URLs to load different pages. The initial load will be faster than client side because you only have to load one page but navigating between pages is slower because you have to load a whole new page. Server side routing has been the norm and search engines are optimized to rank pages that use server side routing.

1.  What does HTTP stand for?

Hypertext Transfer Protocol

1.  What does CRUD stand for?

Create, Read, Update, and Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create : Post
Read: Get
Update: Put
Delete: Delete

1.  Mention three tools we can use to make AJAX requests

XMLHttpRequest
fetch
axios.get
