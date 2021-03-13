const express = require('express')
const app = express()
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))
studnets = [
    {id:11924310,name :"mohamad",gpa:3.14,date:new Date('11/10/2001'),regester:new Date('11/10/2021')},
    {id:123,name :"ahmad",gpa:3.11,date:new Date('11/10/2001'),regester:new Date('11/10/2021')}
]
app.listen(8000, () => {
    console.log('Server started!')
})

//get all data
app.route('/api/students').get((req, res) => {
    console.log("All students Returned");
    res.json(studnets);
});
//get all spisific data

// app.route('/api/students/:name').get((req, res) => {
//     let std = {};
//     const requestedCatName = req.params['name'];
//     for (let student of studnets) {
//         if (student.name == requestedCatName) {
//             std = student;
//         }
//     }
//     res.json( std);
// })

//add new data
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.route('/api/students/').post((req, res) => {
    console.log(req.body);
    studnets.push(req.body);
    res.status(200).json(req.body);
})
//edit  data

app.route('/api/students/:name').put((req, res) => {
    let x = req.body;
    for (let i = 0; i < studnets.length; i++) {
        if (x.oldidd == studnets[i].id) {
            studnets[i].id = x.id;
            studnets[i].name = x.name;
            studnets[i].gpa = x.gpa;
            studnets[i].date = x.date;
            console.log(studnets[i]);
        }
    }
    console.log("updated");
})
//delete  data

app.route('/api/students/:id').delete((req, res) => {
    let std = {};
    const delid = req.params['id'];
        let deleted = 0;
    for (let i = 0; i < studnets.length; i++){
        console.log("---------")
      if (studnets[i].id == delid) {
        studnets.splice(i, 1);
        deleted = 1;
      }
    }
    if (deleted == 0) {
      console.log("Student Not Found");
    }
    else {
        console.log("Student Deleted");
    }



})
