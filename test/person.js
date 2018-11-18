function Person(){ 
    this.eat=function(){
        console.log("eating");
    };
    this.say=function(){
        console.log("saying");
    }
}

module.exports=Person;