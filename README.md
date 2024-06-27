# Full-Stack-Development-1

## Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

- My project frontend uses Express HTML, JavaScript, and Angular. Express manages routing between multiple pages, responding to HTML requests, and rendering HTML pages for the user. This project utilized Express HTML for the frontend when I first started working on it. A problem with using Express HTML alone was that the HTML was hardcoded into the application and data could not be altered. To fix this issue, I used JavaScript to build the application API. It interfaces with the database, allowing for a more dynamic frontend that responds to changes in data. Next, I introduced Angular to my project, transforming it into an SPA. When the application frontend was built with Express HTML and JavaScript alone, users would be routed between pages whenever they clicked on a link. This resulted in frequent page loads and broke up the user experience. By using an SPA, this problem is resolved, as the entire application is loaded onto a single page. The initial loading of the website may be a bit longer, but once a user is on the single page, their experience should be seamless.

Why did the backend use a NoSQL MongoDB database?

- The backend utilized a NoSQL MongoDB database to create a more dynamic application. With the database storing the website's data, the application can adapt as data is added, changed, or removed from the database. MongoDB is powerful, flexible, and easy to implement, making it a good choice for most projects in need of a database. Since my application has no special requirements for its database, MongoDB is an optimal choice because of how simple it is to set up and use.

## Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

- JSON (JavaScript Object Notation) is a data format whereas JavaScript is a programming language. Although it has been used with other languages, JSON was developed for JavaScript. Since the MEAN stack is JavaScript-based, JSON is the best format for transmitting data through the entire stack. On the backend, MongoDB stores documents in JSON format. When the application requests a document, it receives a JSON, when it wants to add a new document, it passes MongoDB a JSON. A requested JSON will likely be parsed and changed into a functional object before it reaches the frontend, but the frontend still uses JSON frequently. For example, data models are built in JSON and the Angular components and services use JSON for their parameters.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components. 

- The application I started with had its data hardcoded in HTML, and I needed to connect a MongoDB database to make the website more dynamic. This required the creation of an API to communicate with the database and render dynamic UI. The addition of this API made my application much more efficient because the data could now be edited without changing the application code. The new interface also consisted of more reusable components. Previously, making major additions or adjustments to the application would be complicated, but now I can create and edit pages by repurposing existing components with relative ease. Another benefit of reusable UI components is that I could implement them in other projects. I would simply need to modify the components I already have, which would save me time and guarantee that the code would work.

## Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

- I did a lot of my testing using Postman API, a tool that can test API endpoints using HTML requests. Postman was useful throughout the development process for testing backend functionality before the frontend was complete. I loved getting to make sure a new backend function worked before implementing it in the frontend, something I haven't been able to do for previous projects. My frontend testing was mostly conducted with the inspect tool of my browser. When I had an error, I then needed to pinpoint where it was by using Postman to make sure it wasn't a backend issue. Testing became more complicated when I added basic security to the application. For a while, I had errors logging in as an existing user, so there was no way to access any other part of the application until I had sorted that out. Security also added a new dimension to testing, as I had to verify the application worked as intended with both logged-in and logged-out users. 

## Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

- This course has given me a foundational understanding of full-stack development, a valuable skill to have in the workplace. I've gained a better understanding of how web development works, a host of new tools to experiment with, a much better grasp of JavaScript, and most importantly, I've developed my critical thinking skills. Full-stack developers are highly sought after in the job market, and even if I don't end up working directly in this sphere of computer science, my takeaways from this course can still help me prove to employers that I am well-rounded and adaptable.
