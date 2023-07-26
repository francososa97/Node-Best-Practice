const myModeule = require('./mymodule');
const dirname = process.argv[2];
const ext = process.argv[3]

myModeule(dirname,ext, function(err,data){
    if(err)
        console.log(err);

    data.forEach(element => {
        console.log(element);
    });
});