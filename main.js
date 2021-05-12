let getnum = document.getElementById("lotnum");
let question;

function getQuestion() {
    console.log(getnum.value);
    if (getnum.value >= 1) {
        document.getElementById("lot").style.visibility = "hidden";
        switch (getnum.value) {
            case "1":
                question =
                    "If you could go back in time in erase one thing you said or did, what would it be?";
                break;
            case "2":
                question =
                    " A serious situation you experienced, without knowing you are inside a joke?";
                break;
            case "3":
                question =
                    "who would you say is your perfect food buddie, and why...best and worst eating experience?";
                break;
            case "4":
                question = "On a scale of 1 to 10 how bad your kusu smells";
                break;
            case "5":
                question =
                    "What's the most gayest feeling you ever had till now and with whom?";
                break;
            case "6":
                question =
                    "The worst and silliest thing u have ever cried for in this past 4 years.";
                break;
            case "7":
                question = "What was your most embarrassing moment in public?";
                break;
            case "8":
                question =
                    "Of the people in this room, who do you want to trade lives with?";
                break;
            case "9":
                question =
                    "The world ends next week, and you can do anything you want (even if it's illegal). What would you do?";
                break;
            case "10":
                question = "Who is your first best friend? #TRUTHONLY";
                break;
            case "11":
                question =
                    "If you ever swap one friend for a Marvel or DC character, whom that friend will be?";
                break;
            case "12":
                question =
                    "The world is ending and you can save two.. Who will you choose";
                break;
            case "13":
                question =
                    "The most disgusting thing you have done with any of your friends? Ex: Hari vaila Kari thupnadhu";
                break;
            case "14":
                question =
                    "Which is the moment, you felt like you are the worst and best matchmaker?";
                break;
            case "15":
                question =
                    "How many times in a week u discreet shit. #TRUTHONLY";
                break;
            case "16":
                question =
                    "Who is one person you pretend to like, but actually don’t?";
                break;
            case "17":
                question =
                    "who is the first boy that u wanted to kiss? but never happened";
                break;
            case "18":
                question =
                    "What would you do if hari says right now that he is gay?";
                break;
            case "19":
                question =
                    "Your reaction and action if Ashish come to your marriage.";
                break;
		case "20":
                question =
                    "Tell a series that's similar to your life and why?";
                break;
            default:
                question = "number less than 20 kula enter panra venna";
        }
        document.getElementById("questionDiv").innerHTML = question;
    }
}

function resetDiv() {
    document.getElementById("lot").style.visibility = "visible";
    document.getElementById("questionDiv").innerHTML = "";
    getnum.value = "";
    question = "";
}
