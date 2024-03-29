const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/student_tasks')
.then(()=>console.log('Database is Connected'))
.catch((e)=>console.log('Not Connected',e))