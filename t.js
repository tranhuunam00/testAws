await Promise.resolve(console.log('🎉'));

const test =async()=>{
    try{
        const p1 = new Promise((rev,rej)=>{
        setTimeout(()=>{},1000)
        rev(3)
    })

    const p2 = new Promise((rev,rej)=>{
        setTimeout(()=>{},1000)
        rej(4)
    })
    const a =await Promise.all([
        p1,p2
    ])
    console.log(a)
    console.log(p1,p2)
    }catch(e){
        console.log(e)
    }
    
}

test()

const a= {host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT || 6379,
    db: +process.env.REDIS_DB || 0,
    password: process.env.REDIS_PASSWORD || '',}