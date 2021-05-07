var names=new Array();
names[0]="ravi";
names[1]="varman";
names[2]="arul";
names[3]="names";
names[4]="messi";
names[5]="suarez";
names[6]="ironman";
names[7]="tonystark";
names[8]="america";
names[9]="loparaas";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
