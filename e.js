const EventEmitter= require('events')
class Job extends EventEmitter{}
job = new Job()
job.on('done',function(timeDone){
    console.log("Job was pronuncedvdone at",timeDone.toLocaleString())
})

job.emit("done",new Date())
job.removeAllListeners() 