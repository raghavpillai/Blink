<img src="src/images/LogoA.png" width="400">
Blink is dedicated to bridging the gap between interactive learning and the online environment for students and teachers. Blink strives to promote an enganging setting that follows in-person learning through real-time interactive classroom activities.    
  
### Online classroom activities featured
* Teacher-student private dm
* Real time mini quizzes with time limits to make sure students are engaged
* Full online calling access(camera and mic) through browswer
  
   
 ### Services offered
 * APIs open to use for classroom activities
 * APIs are open source to create new features or use in your own applications
 
 ## Installation
 1. Clone Repo
 2. run `npm install` in repo
 3. To start app, run `npm run start`
 4. To start server, run `node server index.js`

## Important Routes/Pages
`/organizations`  
&emsp;Classroom page to access video calls for specific classes; routed after login  
`/login`  
&emsp;Login page: sample login provided in node server  
&emsp;User: Student  
&emsp;Password: Password  
`/studentview`  
&emsp;Video call page for students  
`/teacherview`  
&emsp;Video call page for teachers  
`/test`  
&emsp;Test page to play around with the api and formatting

 

## Techstack and Techologies Used

* React.js
* Node.js
* Tailwind css
* Agora.io API
  * for online messaging and call services 
