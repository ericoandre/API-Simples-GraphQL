import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
            useNewUrlParser: true
        })    
        console.log('>>> DB is Connected');
    } catch(e) {
        console.log('Something goes wrong!');        
        console.log(e);        
    }
}
