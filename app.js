let express = require('express');
let app = express();
let port = process.env.port || 3000;
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

validateStudent = (student) => {
    if (!student.StudentId) {
        return 'Student Id is not found.';
    }
    if (!student.FirstName) {
        return 'Student firstname not found.';
    }
    if (!student.LastName) {
        return 'Student lastname not found.';
    }
    if (!student.Gender) {
        return 'Student gender not found.';
    }
    return '';
};

router.post('/', (req, res) => {
    console.log(req.body);
    let student = req.body;
    let isValid = validateStudent(student);
    console.log(isValid);
    if (isValid == '') {
        students.push(student);
        res.write(students);
        res.statusMessage = 'Student sucessfully added';
        res.sendStatus(204);
    } else {
        res.statusMessage = isValid;
        res.sendStatus(404);
    }
});
