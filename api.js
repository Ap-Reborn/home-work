fetch('https://openapi.programming-hero.com/api/ai/tools')
.then(res => res.json())
.then(data => displayData(data.data.tools))

const displayData = card =>{
console.log(card);
const cardContainer = document.getElementById('card-container');
card.forEach(allSingleCard => {
const cardDiv = document.createElement('div');
cardDiv.classList.add('col');
cardDiv.innerHTMLhtml=`
<h1>${card.name}</h1>
<div class="col">
                  <div class="card h-100">
                    <img src="${card.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
`
cardContainer.appendChild(cardDiv);
}
)}

displayData();