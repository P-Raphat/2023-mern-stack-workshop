let
    express = require('express'),
    route = express.Router(),
    studentSchema = require('../models/Student');

// const student = mongoose.model('Student-list',studentSchema,'student-list')
const student = studentSchema;

route.post('/create-student', async (req, res) => {
    const payload = req.body;
    let Student = new student(payload);
    try {
        const data = await Student.save();
        res.status(201).send({ status: 'OK', data: data })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

//Read students
route.get('/', async (req, res) => {
    try {
        let data = await student.find({})
        res.status(200).send({ status: 'OK', data: data })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

//Get single student
route.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let data = await student.findById(id);
        res.status(200).send({ status: 'OK', data: data })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

//Update student
route.put('/update/:id', async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        let data = await student.findByIdAndUpdate(id,{$set: body});
        res.status(200).send({ status: 'OK', data: data })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

//Delete Student
route.delete('/delete/:id',async(req, res) => {
    const { id } = req.params;
    try {
        await student.findByIdAndDelete(id);
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

module.exports = route;