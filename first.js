//Javascript code to fade away image
function fadeOut(element) {
  let opacity = 1;
  const timer = setInterval(function() {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 50); // change opacity every 50 milliseconds (modify as needed)
}


// JavaScript code to validate the OTP input 1
function validateOtp(input) {
    const otp1 = document.getElementById("otp1").value;
    const otp2 = document.getElementById("otp2").value;
    const otp3 = document.getElementById("otp3").value;
    const otp4 = document.getElementById("otp4").value;
  
    if (otp1.length === 1) {
      document.getElementById("otp2").focus();
    }
    if (otp2.length === 1) {
      document.getElementById("otp3").focus();
    }
    if (otp3.length === 1) {
      document.getElementById("otp4").focus();
    }
    if (otp4.length === 1) {
      const otp = otp1 + otp2 + otp3 + otp4;

      if (otp === "0786") {
        // OTP is valid
        console.log("OTP is valid");

        const elementsToValidate = document.getElementsByClassName("glow-1");
        for (let i = 0; i < elementsToValidate.length; i++) {
          elementsToValidate[i].style.webkitBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add webkit box shadow
          elementsToValidate[i].style.MozBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add moz box shadow
          elementsToValidate[i].style.boxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add regular box shadow
        }

        fadeOut(document.getElementById("lock1"));


        setTimeout(function() {
          window.location.href = "https://youtu.be/5GGXsIdXdiE";
        }, 1000); // wait for 1000 milliseconds (1 seconds) before opening the website
      } else {
        // OTP is invalid
        console.log("OTP is invalid");
      }
    }
  }



  // JavaScript code to validate the OTP input 2
function validateOtpii(input) {
  const otpi = document.getElementById("otpi").value;
  const otpii = document.getElementById("otpii").value;
  const otpiii = document.getElementById("otpiii").value;
  const otpiv = document.getElementById("otpiv").value;

  if (otpi.length === 1) {
    document.getElementById("otpii").focus();
  }
  if (otpii.length === 1) {
    document.getElementById("otpiii").focus();
  }
  if (otpiii.length === 1) {
    document.getElementById("otpiv").focus();
  }
  if (otpiv.length === 1) {
    const otpsecond = otpi + otpii + otpiii + otpiv;

    if (otpsecond === "3101") {
      // OTP is valid
      console.log("OTP is valid");

      const elementsToValidate = document.getElementsByClassName("glow-2");
      for (let i = 0; i < elementsToValidate.length; i++) {
        elementsToValidate[i].style.webkitBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add webkit box shadow
        elementsToValidate[i].style.MozBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add moz box shadow
        elementsToValidate[i].style.boxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add regular box shadow
      }

      fadeOut(document.getElementById("lock2"));


      setTimeout(function() {
        window.location.href = "https://youtu.be/__ZvXBf1rmw";
      }, 1000); // wait for 1000 milliseconds (1 seconds) before opening the website
    } else {
      // OTP is invalid
      console.log("OTP is invalid");
      
    }
  }
}
  


// JavaScript code to validate the OTP input 3
function validateOtpiii(input) {
  const otpi = document.getElementById("first").value;
  const otpii = document.getElementById("second").value;
  const otpiii = document.getElementById("third").value;
  const otpiv = document.getElementById("fourth").value;

  if (otpi.length === 1) {
    document.getElementById("second").focus();
  }
  if (otpii.length === 1) {
    document.getElementById("third").focus();
  }
  if (otpiii.length === 1) {
    document.getElementById("fourth").focus();
  }
  if (otpiv.length === 1) {
    const otpthird = otpi + otpii + otpiii + otpiv;

    if (otpthird === "0412") {
      // OTP is valid
      console.log("OTP is valid");

      const elementsToValidate = document.getElementsByClassName("glow-3");
      for (let i = 0; i < elementsToValidate.length; i++) {
        elementsToValidate[i].style.webkitBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add webkit box shadow
        elementsToValidate[i].style.MozBoxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add moz box shadow
        elementsToValidate[i].style.boxShadow = "0px 0px 24px -2px rgba(0, 255, 240, 1)"; // add regular box shadow
      }

      fadeOut(document.getElementById("lock3"));


      setTimeout(function() {
        window.location.href = "https://drive.google.com/drive/folders/1tNa9I8WGKodXNchnKSHlPMieZVdBO2x1?usp=share_link";
      }, 1000); // wait for 1000 milliseconds (1 seconds) before opening the website
    } else {
      // OTP is invalid
      console.log("OTP is invalid");
      
    }
  }
}
