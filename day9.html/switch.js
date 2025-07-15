let day=3;
switch(day){
 case 1:
    console.log("monday");
    break;
case2:
    console.log("tuesday");
    break;
    default:
        console.log("other day");

}
let username=(prompt("enter your name:"));
let age=(prompt("enter your age"));
switch(true){
    case (age<18):
        console.log("not elgible");
        break;
        case (age=>18):
        console.log("yes elgible");
        case (age>65):
            console.log("senior citizen");
            break;
        default:
            console.log("no special category");
}


//same other process program
let userName=prompt("enter your name");
let Age=prompt(userName+",please enter your age:");
Age=Number(age);
switch(true){
    case age<0 || Number.isNaN(age):
        console.log("Invalid age");
        break;
        case age>=18:
            console.log("elgible to vote");
            case age=>65:
                console.log("senior citizen");
                break;
                case age>=13 && age<18:
                    console.log("you are a teenager-not elgible to vote");
                    break;
                default:
                    console.log("no special category");
                    break;
}
