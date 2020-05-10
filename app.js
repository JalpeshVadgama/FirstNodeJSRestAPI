let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = express.Router();
app.use('/api/student', router);
app.listen(port, () => {
    console.log(`Node.js application running on port : ${port}`);
});

let students = [
    {
        StudentId: 1,
        FirstName: 'Jalpesh',
        LastName: 'Vadgama',
        Gender: 'Male',
    },
    {
        StudentId: 2,
        FirstName: 'Vishal',
        LastName: 'Vadgama',
        Gender: 'Male',
    },
];

//Get all students
router.get('/', (req, res) => {
    res.json(students);
});

//Get students based on id
router.get('/:Id', (req, res) => {
    let id = parseInt(req.params.Id);
    let currentStudent = students.filter((x) => x.StudentId == id)[0];
    if (currentStudent) {
        res.json(currentStudent);
    } else {
        res.sendStatus(404);
    }
});
