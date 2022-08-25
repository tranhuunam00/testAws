const  Job = require ("bull")

const mailProcess = (job)=>{
    console.log("job")
    console.log("lang nghe nef")
    console.log(job.data);
}

module.exports  = mailProcess