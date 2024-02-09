const express=require('express')
const app=express()

const users={
    name:"john",
    kidney:[{health:false},{health:false}]
}
app.get('/',function(req,res){
    const kidneys=users.kidney;
    const number=kidneys.length;
    let helkid=0
    for(let i=0;i<number;i++){
        if (kidneys[i].health){
            helkid+=1
        }

    }
    const unhelkid=number-helkid
    res.json({number,unhelkid,helkid})

})
app.use(express.json())
app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy
    users.kidney.push({health:isHealthy})

    res.json({msg:"Done"})
})
app.put("/",function(req,res){
    if (isauk()){
        for(i=0;i<users.kidney.length;i++){
            users.kidney[i].health=true;

            
        }
        res.json({})
    }
    else{res.status(411).json({msg:"you have already healthy kidney"})}
})

//removing all unhealthy kidney
app.delete("/",function(req,res){
    if (isauk()){
        const newkid=[]
        for(i=0;i<users.kidney.length;i++){
                if(users.kidney[i].health){
                    newkid.push({health:true})
                }
        
            }
            users.kidney=newkid
            res.json({msg:"done"})
    }
    else{res.status(411).json({msg:"you have no bad kidney"})

}
})
function isauk(){
    let unhekid=false;
    for(i=0;i<users.kidney.length;i++){
        if(!users.kidney[i].health){

            unhekid=true;
        }

    } 
    return unhekid
}


app.listen(3001)