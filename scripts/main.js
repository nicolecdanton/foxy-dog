const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
  fetch('https://randomfox.ca/floof/')
  .then((response) => {
    console.log('Response received!');
    // Parse the JSON in the response
    return response.json();
  })
  .then((foxData) => {
    // This code runs when the JSON parsing is complete
    console.log('Data parsed!');
    console.log(foxData);
    const foxImage = document.querySelector("#fox")
    foxImage.src = foxData.image
  });

console.log('This code runs immediately!');

})



const dogButton = document.querySelector("#dog-button")
dogButton.addEventListener("click", () => {
  fetch ("https://random.dog/woof.json")
  .then((response) => {
    return response.json()
  })
  .then((dogData) =>{
    const dogImage = document.querySelector("#dog")
    dogImage.src = dogData.url
  })

})

