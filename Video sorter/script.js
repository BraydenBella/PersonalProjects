//node Js modules 

const fs = require('fs');//interacts with the filesystem 
const path = require('path'); // file paths 
const prompt = require('prompt-sync')() //allows for me to make prompts on the desktop 

const SCR_Folder = 'C:\\Users\\brayd\\OneDrive\\Desktop\\Video Dumps'; 
// directoy of the place where the video are going to be located 

const DEST_DIR = 'C:\\Users\\brayd\\OneDrive\\Desktop\\2024 videos';
// directory of where the videos are going to go

let folderName = prompt("Enter Folder Name");


let destFolder = DEST_DIR + '\\' + folderName;
// path for new folder 


if (fs.existsSync(destFolder)) {
    console.log('Folder already exists, adding to existing files');  
  } else {
    // Create new folder
    fs.mkdirSync(destFolder);
    console.log('Created new folder');
  }

  let existingFiles = fs.readdirSync(destFolder);


  let files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.mp4'))

  for (let file of files) {
    letName = 'video_${count}.mp4';

    let oldPath = path.join(SRC_DIR, file);
    let newPath = path.join(destFolder, newName);

    fs.renameSync(oldPath, newPath);

    count++ 
  }

  console.log('Files processed!');
  