const  Bull =require ("bull")
const  mailProcess =require ("../process/emial.process")
const emailQueue= new Bull("email",{
    redis:{
        host:"127.0.0.1",
        port:'6379',
        db:'0',
        password:"Bos2o21REdisIT"
    }
})

// emailQueue.process(mailProcess)

const sendNewMail =(data) =>{
    emailQueue.add(data,{})
}
module.exports =  {sendNewMail}