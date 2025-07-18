import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

let counter = 0
document.querySelector('#counter').addEventListener('click', () => {
  counter++
  document.querySelector('#counter').textContent = `Count is ${counter}`
})