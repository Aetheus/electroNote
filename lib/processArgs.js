//process args and what to do with them

var processArgs = {
    "-h" : function (){
        console.log("To-do: write some actual help functions :P");
    },

    "-debug" :function (windowSettings){
        windowSettings["frame"] = true;
    }


};

module.exports = processArgs;
