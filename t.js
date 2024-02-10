// const express=require("express")
// const app=express()

// app.get('/health-checkup',function(req,res){
//     const kidneyId=req.headers.kidneyId;
//     const username=req.headers.userename;
//     const password=req.query.password;



// if(username!="harkirat" ||password!="pass"){
//     res.status(403).json({msg:"user doesnt exist"})
//     return
// }

// if (kidneyId!=1&& kidneyId!=2){
//     res.status(411).json({msg:"wrong inputs"})
//     return
// }

// res.send("your heart is healthy")
// })


// const express=require("express")
// const app=express()

// app.get('/health-checkup',function(req,res){
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId


//     if(username!="harkirat"||password!="pass"){
//         res.status(400).json({"msg":"Something up in your inputs"})
//         return
//     }
//     if(kidneyId!=1 && kidneyId!=2){
//     res.status(400).json({msg:"something is up in your input"})
//     return
//     }
//         res.json({msg:"your kidney is fine"})
  




// })

// app.listen(3002)



 
// const express=require("express")
// const app=express()
// let number=0
// function calculateRequest(req,res,next){
//     number++;
//     console.log(number)
//     next()
// }

// app.get('/health',calculateRequest,function(req,res){

// })

// app.listen(3002);

// const express=require("express")
// const app=express()
// const zod=require("zod")

// const schema=zod.array(zod.number());



// const schema=zod.object({
//     email:zod.string(),
//     password:z.string(),
//     country:z.literal("IN").or(z.literal("US"))
// })

// app.use(express.json())  ;

// app.post("/health",function(req,res){
// const kidneys=req.body.kidneys;
// const response=schema.safeParse(kidneys)
// if(!response.success){
//     res.status(411).json({msg:"input is invalid"})
// }
// else{res.send({
//     response
// })
// }

// })
// app.listen(3000)

// const zod=require("zod")

// function validate(obj){
//     const schema=zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8)
    
//     })
//     const response=schema.safeParse(obj);
//     console.log(response)
    

// }

// validate({
//     email:"adjfdjfd@gmail.com",
//     password:"1222222222"
// })


// const zod=require("zod")
// function validate(obj){
//     const schema=zod.object({
//         email:zod.string().email(),
//         password:zod.string().min(8)
    
//     })
//     const response=schema.safeParse(obj)
//     console.log(response)
// }

// application.post('/dd',function(req,res){
//     const response=validate(req.body)
//     if(!response.success){
//         res.json({msg:"your inputs are invalid"})
//         return
//     }

// })




const express=require("express")

const app=express()

app.get('/',function(req,res){
    console.log(req.body.kidneys.length)
    res.json({msg:"done"})
        
})


app.use(function(err,req,res,next){
    res.send({
        msg:"internal error"
    })
})

app.listen(3000)











































































































