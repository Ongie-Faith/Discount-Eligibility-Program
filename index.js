function checkEligibility() {

  

    //User input for age and status
    let age = parseInt(document.getElementById("age").value);
    let isMember = document.getElementById("membershipInput").value === "yes";

    // Check eligibility
    let isEligible = false;

    if (age >= 18 && isMember || age >= 65) {
        isEligible = true;
    }

    //Eligibility output 
    let result = document.getElementById("result");
    if (age >= 65) {
      result.innerHTML = "Congratulations ! You are eligible for a senior discount.";
      result.style.color = "Green";
    } else if (isEligible) {
      result.innerHTML = "Congratulations ! You are eligible for a discount at the moment.";
      result.style.color = "Green";
    } else {
      result.innerHTML = "Sorry, you are not eligible for any discount at the moment.";
      result.style.color = "Red";
    }
  }

