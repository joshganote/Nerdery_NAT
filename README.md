# Nerdery Frontend Challenge

Thank you for giving me the opportunity to apply for this position. With this project I hope you get an understanding of my current programming knowledge and passion for React.

#### Installation

* Install Node.js, version >= 10.0.0
* From a terminal in the server folder, run the `npm install` command
* Once complete, run `npm start` to start the server on port 3000

#### Frontend

I just wanted to start off a say that I really enjoyed working through this challenge. After going through a couple challenges with job seeking in the past this one was the most clear with what the functionality and visual requirements where. 

* External Libraries used:
- Axios
- Material UI
- React Icons
- Redux

I hope you find the code comments left in the files will help you understand my goal with some of the functions I wrote and my thought process while using them. If I had more time on this project there are some things that I would have liked to have done. I would have liked to have dug deeper into Redux to better use reducers to store data from api requests and used that to help manage state changes with the user voting. I also would've moved all the text into global library file and used that context throughout the app.

#### The API

I made a couple changes to the Nerdery_Server to help with this challenge. I changed the port to 3001 and I felt I needed to add more data to the snacks array in the config.js file. The UI mock up files showed snacks in the Snack Voting section that I couldn't find in the Nerdery_Server config.js file. In my frontend application I added a api/snackData file to show you what I added. The POST call in the snacks route is looking for an id to match from what the user sends to what is available on the server. I wasn't sure how to account for this with what I saw in the starter files so you will need to add those objects I created in the api/snackData file to the snacks array in the Nerder_Server routes/snacks in order for the application to run correctly. That may have been out of scope for the project and if I did miss where that data was supposed to be coming from I do apologize.