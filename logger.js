

function log(message){
    console.log("Hi "+message);
}

var addNote =  (name,desg)=>{
   console.log(name,desg);
}

var listNotes = ()=>{
    console.log("listing all notes");
}

module.exports = {
    addNote:addNote,
    listNotes:listNotes
};