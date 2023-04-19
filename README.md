# Build a Basic Blog

In this activity, you must add logic to an existing React app to render a list of blog post titles
fetched from a backend web API and submit newly added blog posts to that same API. The
backend API used is https://jsonplaceholder.typicode.com/, which is a dummy API that
doesn't actually store any data you send to it. It will always return the same dummy data,
but it's perfect for practicing sending HTTP requests.

Unfortunately this code was written without tests...the first thing you should do is bring the code under test. 
Write tests as necessary to cover your code before starting to add new functionaity!

As a bonus, you can also add logic to change the text of the submit button while the HTTP
request to save the new blog post is on its way.

Use your knowledge about effects and browser-side HTTP requests to implement a solution.

## Steps for Success

After downloading the code and running `npm install` in the project folder to install all
required dependencies, the solution steps are as follows:
1. Send a `GET` HTTP request to the dummy API to fetch blog posts inside the `App` component (when the component is first rendered).
1. Display the fetched dummy blog posts on the screen.
1. Handle form submissions and send a `POST` HTTP request (with some dummy data) to the dummy backend API.
1. Bonus: Set the button caption to "Saving..." while the request is on its way (and to
"Save" when it's not).


