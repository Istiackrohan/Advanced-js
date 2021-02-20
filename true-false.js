// false = 0;
// false = "";
// false = null;
// false = undefined;
// false = NaN;
// false = false;

// true = "0";
// true = " ";
// true = [];
// true = {};
// true = ``;
// true = true;

const age = ``;

if(age || age == 0){
    console.log("Condition true");
}
else{
    console.log("Condition false");
}