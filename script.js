const randomFox = 'https://cors-anywhere.herokuapp.com/randomfox.ca/floof/'

const button = document.querySelector('#generate')
const inputSmoosh = document.querySelector('#soft')
const inputColor = document.querySelector('#favcolor')
const inputFruit = document.querySelector('#favfruit')
const inputVaca = document.querySelector('#vacay')
const fox = document.querySelector('.fox-div')

async function getFox() {
  let response = await axios.get(randomFox)

  let foxpix = response.data.image
  let helloFren = `Hello fren! My name is ${inputFruit.value}y ${inputSmoosh.value}z. I hail from a far away land called San ${inputVaca.value}. I am your Spirit Fox. Floof Furrever.`
  console.log(helloFren)

  fox.innerHTML += `
  <img src= ${foxpix}>
  <p style= "font-family: 'Indie Flower', cursive; text-align: center; font-size: 50px">${helloFren}<p>`
}

button.addEventListener('click', getFox)