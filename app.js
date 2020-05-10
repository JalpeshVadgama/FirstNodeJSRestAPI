let express = require('express');
let port = process.env.port || 3000;
let app = express();
let router = express.Router();
app.use('/api/student', router);

app.listen(port, () => {
    console.log(`node.js application running on port :${port}`);
});

let students = [
    {
        StudentId: '1',
        FirstName: 'Jalpesh',
        LastName: 'Vadgama',
        Gender: 'Male',
    },
    {
        StudentId: '2',
        FirstName: 'Vishal',
        LastName: 'Vadgama',
        Male: 'Male',
    },
];

//Get all students
router.get('/', (req, res) => {
    res.json(students);
});

//Get specific student
router.get('/:Id', (req, res) => {
    let id = parseInt(req.params.Id);
    let currentStudent = students.filter((x) => x.StudentId == id)[0];

    if (currentStudent) {
        res.json(currentStudent);
    } else {
        res.sendStatus(404);
    }
});
