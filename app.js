var logger  = require("./logger");
var os  = require("os");
var yargs = require("yargs");

// console.log(process.argv[2]);
console.log("prosess :",process.argv);
console.log("yargs",yargs.argv);
 
var argv = yargs.argv;
var command  = argv._[0];

if( command === "add"){
    logger.addNote(argv.name,argv.desg);
}else if( command === "list"){
    logger.listNotes();
}
else if( command === "remove"){
    console.log("remove list");
}
else{
    console.log("not in this list");
}