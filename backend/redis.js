const Redis=require('ioredis')
let configuration={
    host:"redis-14839.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    port:14839,
    username:"default",
    password:"s3Ccv4XcNcwhiFNhIQyM8fBpuIYjClCo"
}
const redis=new Redis(configuration)


module.exports=redis