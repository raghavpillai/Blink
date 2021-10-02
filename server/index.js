const express = require("express");

const PORT = process.env.PORT || 3001;

const blinkapp = express();

// Default user ID: 7
// Default class ID: 5

var users = {
    "root": {
        permission: "Admin", // Admin, teacher, student
        displayName: "Administrator",
        password: "password",
        classes: [],
    }
}

var classes = { // ID: { questionNumber[int]: { questionID[int]: usersCompleted[int][] } }
    math8: {
        // Class attributes
        teacher: "testTeacher",
        name: "testClass",
        desc: "testDesc",

        // Current question
        active: false, // if question is still valid
        startTime: 1633168636, // time in unix 
        question: "What is 1 + 1?", // question
        time: 20, // time (in seconds) to be valid
        answers: { // questions (answer[string]: valid[boolean])
            "2": true, "5": false, "3": false, "1": false
        },
        answeredStudents: { // students who have answered (username[string]: answerchoice[boolean/string])
            //"username": true
        },
        questionHolder: {},


        // Misc. 
        questions: { // silent questions by student (username[string]: question[string])
            /*question: {
                time: 0,
                username: username
            }*/
        },
        
        hands: {
            //"username": true
        }
    }/*,

    test: {
        // Class attributes
        teacher: "testTeacher",
        name: "testClass",
        desc: "testDesc",

        // Current question
        active: false, // if question is still valid
        startTime: 1633168636, // time in unix 
        question: "What is 1 + 1?", // question
        time: 20, // time (in seconds) to be valid
        answers: { // questions (answer[string]: valid[boolean])
            "2": true, "5": false, "3": false, "1": false
        },
        answeredStudents: { // students who have answered (username[string]: answerchoice[boolean/string])
            //"username": true
        },
        questionHolder: {
            1: {
                time: 100,
                question: "What is 1 + 1",
                answers: { "2": true, "5": false, "3": false, "1": false },
                answeredStudents: { "username1": true, "username2": true, "username3": true, "username4": true }
            }
        },


        // Misc. 
        questions: { // silent questions by student (username[string]: question[string])
            
        },

        hands: {
            //"username": true
        }
    }*/
}

function findStudentResponse(idTable, username) { // Find student response from question (input answeredstudents, username)
    for (const [name, answer] of Object.entries(idTable)) {
        if (name == username) {
            return true
        }
    }
    return false
}

function seeClassRoster(classID) { // See class roster (input class ID), returns username array
    let usernames = []
    let displayNames = []
    for (const [username, table] of Object.entries(users)) {
        if (table["classes"].includes(classID)) {
            usernames.push(username)
            displayNames.push(table["displayName"])
        }
    }
    return [usernames, displayNames]
}

/*  
    CLASS FUNCTIONS API
    ------------------
*/

blinkapp.get("/api/class/end/:class", (req, res) => { // Ending class for analytics
    let classid = req.params.class
    let questions = [classes[classid]["questionHolder"]]
    
    res.json(questions)
})

blinkapp.get("/api/class/hand/:class/:username/:value", (req, res) => { // Put hand up or down
    let classid = req.params.class
    let username = req.params.username
    let value = req.params.value

    classes[classid]["hands"][username] = value

    res.json("Hand value is now " + value)
})

blinkapp.get("/api/class/question/:class/:question/:username", (req, res) => { // Silently ask a question
    let classid = req.params.class
    let question = req.params.question
    let username = req.params.username

    classes[classid]["questions"][question] = {} // Create new question
    classes[classid]["questions"][question]["time"] = Math.round(Date.now() / 1000)
    classes[classid]["questions"][question]["username"] = username

    res.json("Asked question " + question)
})

blinkapp.get("/api/class/roster/:class", (req, res) => { // See class roster
    let classid = req.params.class

    res.json(seeClassRoster(classid))
})

blinkapp.get("/api/class/enroll/:class/:username", (req, res) => { // Enroll a student in a class [Username not UserID]
    let newClass = req.params.class
    let username = req.params.username

    if (users[username]) { // If user exists
        if (classes[newClass]) {  // If class exists
            if (users[username]["classes"].includes(newClass)) {
                res.json("Already enrolled in class!")
            } else { // User not in class
                users[username]["classes"].push(newClass)
                res.json(users[username]["classes"])
            }
        } else { // Class doesn't exist
            res.json('Class does not exist!')
        }
    } else { // User doesn't exist
        res.json('User does not exist!')
    }
})

/*  
    USER FUNCTIONS API
    ------------------
*/

blinkapp.get("/api/user/login/:username/:password", (req, res) => { // User logins
    let username = req.params.username
    let password = req.params.password

    if (users[username]) { // If user exists
        if (users[username]["password"] == password) { // Password is right
            res.json(users[username]["permission"])
        } else { // Incorrect ID
            res.json("INCORRECT ID")
        }
    } else { // No user found
        res.json("non-existant")
    }
})

blinkapp.get("/api/user/create/:username/:password/:displayname", (req, res) => { // Create student
    let username = req.params.username
    let password = req.params.password
    let displayName = req.params.displayname

    if (users[username]) { // If user exists
        res.json("User exists already!")
    } else { // No user found
        users[username] = {}
        users["displayName"] = displayName
        users["password"] = password
        users["classes"] = []

        res.json("User " + username + " created!")
    }
})

blinkapp.get("/api/user/info/classes/:username", (req, res) => { // See what classes a user is in or hosts
    let username = req.params.username
    if (users[username]) { // If valid user
        if (users[username]["permission"] == "Admin") {
            res.json(classes)
        } else if (users[username]["permission"] == "Teacher") {
            let newClasses = {}
            for (const [classname, table] of Object.entries(classes)) {
                if (table["teacher"] == username) {
                    newClasses[classname] = table
                }
            }
            res.json(newClasses)
        } else if (users[username]["permission"] == "Student") {
            res.json(users[username]["classes"])
        }
    } else { // Invalid user
        res.json("Invalid user!")
    }
})

blinkapp.get("/api/user/info/overview/:username", (req, res) => { // See what classes a user is in or hosts
    let username = req.params.username
    if (users[username]) { // If valid user
        res.json(users[username]) // Return user data
    } else { // Invalid user
        res.json("Invalid user!")
    }
})

/*  
    QUIZ FUNCTIONS API
    ------------------
*/

blinkapp.get("/api/question/check/:room/:username", (req, res) => { // Check for new questions
    let room = req.params.room
    let username = req.params.username

    if (classes[room]["active"] == false) { // If class does not have active question
        res.json(false)
    } else { // If class has active question
        const studentResponses = classes[room]["answeredStudents"]
        if (findStudentResponse(studentResponses, username)) { // If student has responded to question
            res.json(true)
        } else { // Awaiting student question
            const newestQuestionData = classes[room]
            res.json(newestQuestionData)
        }
    }
})

blinkapp.get("/api/question/create/:room/:json", (req, res) => { // Create question for room
    let room = req.params.room
    let json = req.params.json
    let obj = JSON.parse(json)
    console.log(obj)

    if (classes[room]["active"] == true) { // If question already in play
        res.json(false)
    } else { // New question attributes
        /* http://localhost:3001/api/question/create/5/{
            "question":"What is 1+1?",
            "time":20,
            "answers":{"2":true,"5":false,"3":false,"1":false}
        }
        */
        // Assign values to room question
        classes[room]["active"] = true
        classes[room]["startTime"] = Math.round(Date.now() / 1000) // Class time in UNIX seconds
        classes[room]["question"] = obj.question
        classes[room]["time"] = obj.time
        classes[room]["answers"] = obj.answers
        classes[room]["answeredStudents"] = {}

        setTimeout(function () { // Delayed function
            classes[room]["active"] = false

            classes[room]["questionholder"][classes[room]["questionholder"].length] = {
                time: classes[room]["startTime"],
                question: classes[room]["question"],
                answers: classes[room]["answers"],
                answeredStudents: classes[room]["answeredStudents"]
            }
        }, obj.time * 1000); // Time for question (seconds) * 1000 ms
        res.json(true)
    }
})

/*  
    ADMINISTRATIVE FUNCTIONS API
    ------------------
*/

blinkapp.get("/api/admin/set/role/:role/:username", (req, res) => { // Set the role of a user
    let role = req.params.role
    let username = req.params.username
    if (users[username]) { // If user exists
        users[username]["permission"] = role
        res.json("role updated to " + users[username]["permission"])
    } else { // No user found
        res.json("User is non-existant")
    }
})

blinkapp.get("/api/admin/set/teacher/:class/:username", (req, res) => { // Set the teacher of a specific classroom
    let username = req.params.username
    let newclass = req.params.class

    if (users[username]) { // If user exists
        if (classes[newclass]) {
            classes[newclass]["teacher"] = username
            res.json("Teacher for class " + newclass + " set to " + username)
        } else {
            res.json("class doesn't exist")
        }
    } else { // No user found
        res.json("User is non-existant")
    }
})

blinkapp.listen(PORT, () => {
    console.log(`BLINK server listening on ${PORT}`);
});