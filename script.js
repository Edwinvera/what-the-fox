const randomFox = 'https://cors-anywhere.herokuapp.com/randomfox.ca/floof/'

const button = document.querySelector('#generate')
const inputSmoosh = document.querySelector('#soft')
const inputColor = document.querySelector('#favcolor')
const inputFruit = document.querySelector('#favfruit')
const inputVaca = document.querySelector('#vacay')
const fox = document.querySelector('fox-div')

async function getFox() {
  let response = await axios.get(randomFox)
  console.log(response.data.image)
  // let spiritFox = (response.data.image)
  // let smoosh = document.getElementById('#soft').value
  // let color = document.getElementById('#favcolor').value
  // let fruit = document.getElementById('#favfruit').value
  // let vacay = document.getElementById('#vacay').value
}
// getFox()

function foxSpeech() {
  let helloFren = `Hello fren! My name is ' + ${inputFruit.value} + 'y ' + ${inputSoft.value} + 'z. I hail from a far away land called San ' + ${inputVaca.value} + '.' + ' I am your Spirit Fox.' + ' Floof Furrever.`
}

button.addEventListener('click', getFox)