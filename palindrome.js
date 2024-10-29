const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanText(inputText) {
  return inputText.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

function isValid() {
  return userInput.value !== "" ? true : false;
}

function isPalindrome() {
  if (isValid()) {
    const cleanedInput = cleanText(userInput.value);
    const reverseInput = cleanedInput.split("").reverse().join("");
    result.innerText =
      reverseInput === cleanedInput
        ? `${userInput.value} is a palindrome`
        : `${userInput.value} is not a palindrome`;
  } else {
    alert("Please input a value");
  }
}

checkBtn.addEventListener("click", isPalindrome);
