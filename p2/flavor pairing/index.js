fetch('index.json')
  .then(response => response.json())
  .then(jsonData => {
    const containerDiv = document.getElementById('container');

    jsonData.forEach((data, index) => {
      const div = document.createElement('div');
      div.classList.add('info');

      const ingredient = document.createElement('h2');
      ingredient.textContent = data.ingredient;
      div.appendChild(ingredient);

      const pairingsList = document.createElement('ul');
      data.pairings.forEach(pairing => {
        const pairingItem = document.createElement('li');
        pairingItem.textContent = pairing;
        pairingsList.appendChild(pairingItem);
      });
      div.appendChild(pairingsList);

      containerDiv.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });



  