let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => data.forEach((toy) => {
    renderToys(toy)
  }))

  function renderToys(toy) {
    const card = document.createElement('div')
    card.className = 'card'

    const h2 = document.createElement('h2')
    h2.textContent = toy.name

    const img = document.createElement('image')
    img.src = toy.image
    img.className = "toy-avatar"

    const p = document.createElement('p')
    p.textContent = toy.likes

    const button = document.createElement('button')
    button.textContent = 'like'
    button.className = 'like-btn'
    button.id = toy.id

    button.addEventListener('click', () => {
      p.textContent = toy.likes += 1

      //PATCH Request Example
      // fetch(`http://localhost:3000/toys/${toy.id}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     likes: parseInt(p.textContent)
      //   })
    })

    card.append(h2, img, p, button)

  const toyCollection = document.querySelector('#toy-collection')
  toyCollection.append(card)
  }

  function handleForm() {
    const form = document.querySelector('.add-toy-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const newName = e.target["name"].value
      const newImage = e.target["image"].value
      const newToy = {
        name: newName,
        image: newImage,
        likes: 0
      }
      renderToys(newToy)
    })
  }

// POST Request Example
    // fetch('http://localhost:3000/toys', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(newToy)
    // })
    // .then(res => res.json())
    // .then (data => renderToys(data))
  //}

  handleForm()