//Kurt Brown - Web 115 Final Project

//When the user clicks "Create Resume", the createResume function activates
document.getElementById("createButton").addEventListener("click", createResume);

//isEmailValid() function
function isEmailValid() {
    //This function searches the email input for the @ symbol
    emailCheck = /[@]/;
    if (userEmail.match(emailCheck)) {
        //If the @ symbol is found, return true
        return true;
    } else {
        //If the @ symbol is not found, return false
        return false;
    }
}

//createResume() function
function createResume() {

    userEmail = document.getElementById("email").value;

    //If the isEmailValid function does not find an @ symbol    
    if (isEmailValid() === false) {
        //The user will need to enter a valid email address
        document.getElementById("emailWarning").innerHTML = "Enter a valid email address.";
    } else {
        //If the email is found, a message will not display
        document.getElementById("emailWarning").innerHTML = "";

        //Basic Information
        //Pulls all the information from the HTML form
        userName = document.getElementById("fullName").value;
        userJobTitle = document.getElementById("jobTitle").value;
        userCity = document.getElementById("city").value;
        userState = document.getElementById("state").value;
        userZipCode = document.getElementById("zipCode").value;
        userPhone = document.getElementById("phone").value;
        userLinkedIn = document.getElementById("linkedIn").value;
        userPortfolio = document.getElementById("portfolio").value;

        //Professional Summary
        userProfessionalSummary = document.getElementById("professionalSummary").value;

        //Skill Set
        userSkillSet1 = document.getElementById("skill1").value;
        userSkillSet2 = document.getElementById("skill2").value;
        userSkillSet3 = document.getElementById("skill3").value;

        //Technical Skills
        userTechSkill1 = document.getElementById("techSkill1").value;
        userTechSkill2 = document.getElementById("techSkill2").value;

        //Education
        userEducation = document.getElementById("education").value;

        //Experience
        userCompanyName1 = document.getElementById("companyName1").value;
        userExperience1 = document.getElementById("experience1").value;
        userStartDate1 = document.getElementById("startDate").value;
        userEndDate1 = document.getElementById("endDate").value;
        userExperience1Details = document.getElementById("experience1Details").value;

        userCompanyName2 = document.getElementById("companyName2").value;
        userExperience2 = document.getElementById("experience2").value;
        userStartDate2 = document.getElementById("startDate2").value;
        userEndDate2 = document.getElementById("endDate2").value;
        userExperience2Details = document.getElementById("experience2Details").value;

        userCompanyName3 = document.getElementById("companyName3").value;
        userExperience3 = document.getElementById("experience3").value;
        userStartDate3 = document.getElementById("startDate3").value;
        userEndDate3 = document.getElementById("endDate3").value;
        userExperience3Details = document.getElementById("experience3Details").value;

        //Professional Reference
        userReference = document.getElementById("reference").value;

        //This is the internal CSS for the created resume
        myText = ("<html>\n<head>\n<title>Your Resume</title>\n");

        //Fonts
        myText += ("<link rel='preconnect' href='https://fonts.googleapis.com'> <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin> <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap' rel='stylesheet'>");

        myText += ("<link rel='preconnect' href='https://fonts.googleapis.com'> <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin> <link href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=EB+Garamond&display=swap' rel='stylesheet'>");

        myText += ("<style>\n");
        myText += ("body {\nbackground-color: mintcream;\ncolor: black;\n}\n");
        myText += ("#item1 {\ncolor: blue;\n \n text-align: center; font-family: 'EB Garamond', serif; font-size: 3.5em;}");
        myText += ("#jobTitle {\ncolor: black;\n \n text-align: center; font-family: 'Cormorant Garamond', serif; font-size: 2em;}");

        myText += ("#leftSide {clear:both; float:left;}");
        myText += ("#rightSide {float:right; padding-bottom:20px; padding-right:30px;}");
        myText += ("#spanID {color:green; font-family: 'EB Garamond', serif; font-size: 1.8em; border-bottom: 2px solid blue; font-weight: bold;}");
        myText += ("#information {font-family: 'Cormorant Garamond', serif; font-size: 1.5em;}");

        myText += ("</style>\n</head>\n");

        myText += ("</body>\n</html>");

        //Header area
        myText += ("<div> <header>\n<h1 id='item1'>" + userName + "</h1>");
        myText += ("<h2 id='jobTitle'>" + userJobTitle + "</h2></div>");
        myText += ("<hr>");

        //Body Section
        myText += ("<div>" + "<div id='leftSide'>" + "<span id ='spanID'>Professional Summary\n</span>" + "\n\n\n</br>" + "<div id='information'>" + userProfessionalSummary + "</div>" + "\n\n\n</br>" + "</br>" + "<span id ='spanID'>Contact\n</span>" + "</br>" + "<div id='information'> Phone: " + userPhone + "</br>" + "Email: " + userEmail + "</br>" + "LinkedIn: " + userLinkedIn + "</br>" + "Portfolio Link: " + userPortfolio + "\n\n\n</br>" + userCity + ", " + userState + " " + userZipCode + "\n\n\n</br>" + "</div>" + "<br>" + "<span id ='spanID'>Skill Set\n</span>" + "</br>" + "<div id='information'>" + userSkillSet1 + " writing skills" + "</br>" + userSkillSet2 + " coding skills" + "</br>" + userSkillSet3 + " foreign language skills" + "</br>" + "</br>" + "</div>" + "<span id ='spanID'>Technical Skills\n</span>" + "</br>" + "<div id='information'>" + "Programming Languages: " + userTechSkill1 + "</br>" + "Technical Skills: " + userTechSkill2 + "</div>" + "</div>" + "</div>" + "</div>");

        myText += ("<div>" + "<div id='rightSide'>" + "<span id ='spanID'>Employment\n</span>" + "\n\n\n</br>" + "<div id='information'>" + userCompanyName1 + " | " + userExperience1 + "</br>" + userStartDate1 + " to " + userEndDate1 + "</br>" + userExperience1Details + "</br> </br>" + userCompanyName2 + " | " + userExperience2 + "</br>" + userStartDate2 + " to " + userEndDate2 + "</br>" + userExperience2Details + "</br> </br>" + userCompanyName3 + " | " + userExperience3 + "</br>" + userStartDate3 + " to " + userEndDate3 + "</br>" + userExperience3Details + "</br> </br> </div>" + "<span id ='spanID'>Education\n</span>" + "<br>" + "<div id='information'>" + userEducation + "<br> </br> </div>" + "<span id ='spanID'>Professional Reference\n</span>" + "<br>" + "<div id='information'>" + userReference + "<br> </br> </div>" + "</div>" + "</div>");

        //Opens the resume in a new window
        flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);
    }
}