import fs from 'fs/promises';

async function createFolder(){
	try{
		await fs.mkdir("./myFolder");
		console.log("Folder created!");
	} catch (err){
		console.error("Error creating folder:", err);
	}
}

createFolder();

async function deleteFolder(){
	try{
		await fs.rmdir("./myFolder");
		console.log("Folder deleted");
	} catch(err){
		console.error("Error delete folder:", err);
	}
}

setTimeout(()=>{
	deleteFolder();
},2000)



// const fs = require('fs');
// fs.mkdir("./myFolder", (err) =>{
// 	if(err) console.error(err);	
// 	else console.log("Folder created!");
// });
