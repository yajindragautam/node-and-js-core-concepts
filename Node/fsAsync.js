const fs = require('fs');

// create file
fs.writeFile("note.txt","This is Node JS Note",(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Create file succcess..');
})