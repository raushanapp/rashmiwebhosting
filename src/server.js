const app=require("./index")

const connect=require("./configs/db");


const port=process.env.PORT || 8000;


app.listen(port,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log(`listening on port ${port}`)
   
})