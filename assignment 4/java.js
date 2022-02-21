// var x
// console.log(x);


// if (x==undefined){
//     console.log("x is undefined")
// }
// x=("THIS IS THE SHIT")
// if (x== undefined){
//     console.log("x is undefined")
// }
// else{
//     console.log("x is defined")
// }







//   this is how to connect
// var string ="hello "
// string += "world"
// console.log(string+"!")







// var x="4" ,y=5;
// if (x==y){
//     console.log(" x is equal to y ");

// }
// else {
//     console.log("x is not equal to y");
// }




var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}







