var currentSkill = 1; // current skill being displayed
    function showNextSkill() {
        // hide the current skill
        document.getElementById("skill-" + currentSkill).style.display = "none";
        
        // increment the current skill counter and wrap around if it exceeds the number of skills
        currentSkill = (currentSkill % 6) + 1;
        
        // show the next skill
        document.getElementById("skill-" + currentSkill).style.display = "block";
    }