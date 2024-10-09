const prompt = require("prompt-sync")({signint:true});
let day = prompt("enter a day of the week: ");
switch (day) {
    case "Monday":
        console.log("Your task for Monday is: Deep work and preperation");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Active Learning");
        break;    
    case "Wednesday":
        console.log("Your task for Wednesday is: Skill building");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Reflect and review");
        break;
    case "Friday":
        console.log("Your task for Friday is: Plan problem solving");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: Creative thinking and rest");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: Free study and rest");
        break;    
    }   