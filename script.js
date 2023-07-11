var currentSkill = 1; // current skill being displayed
var currentHard = 1; // current hard being displayed
var currentSoft = 1; // current soft being dispalyed



// Coding Language buttons


    function showNextSkill() {
        // hide the current skill
        document.getElementById("skill-" + currentSkill).style.display = "none";
        
        // increment the current skill counter and wrap around if it exceeds the number of skills
        currentSkill = (currentSkill % 6) + 1;
        
        // show the next skill
        document.getElementById("skill-" + currentSkill).style.display = "block";
    }

    function showPrevSkill() {
        // hide the current skill
        document.getElementById("skill-" + currentSkill).style.display = "none";
        
        // decrement the current skill counter and wrap around if it becomes less than 1
        currentSkill = (currentSkill -1 + 6) % 6 || 6;
        
        // show the next skill
        document.getElementById("skill-" + currentSkill).style.display = "block";
    }


// Hard Skills buttons

    function showNextHard() {
        // hide the current skill
        document.getElementById("hard-" + currentHard).style.display = "none";
        
        // increment the current skill counter and wrap around if it exceeds the number of skills
        currentHard = (currentHard % 5) + 1;
        
        // show the next skill
        document.getElementById("hard-" + currentHard).style.display = "block";
    }

    function showPrevHard() {
        // hide the current skill
        document.getElementById("hard-" + currentHard).style.display = "none";
        
        // decrement the current skill counter and wrap around if it becomes less than 1
        currentHard = (currentHard -1 + 5) % 5 || 5;
        
        // show the next skill
        document.getElementById("hard-" + currentHard).style.display = "block";
    }



// Soft Skills buttons

