function showImageDetails(jsonFile, imageName) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const imageDetails1 = document.getElementById('name');
      const imageDetails2 = document.getElementById('date');
      const imageDetails3 = document.getElementById('regularity');
      const imageDetails4 = document.getElementById('price');
      const imageDetails5 = document.getElementById('rating');
      const imageDetails6 = document.getElementById('comment');
      const imageInfo = data[imageName];
      imageDetails1.innerHTML = `
        ${imageInfo.name}
      `;
      imageDetails2.innerHTML = `
        ${imageInfo.date}
      `;
      imageDetails3.innerHTML = `
        ${imageInfo.regularity}
      `;
      imageDetails4.innerHTML = `
        ${imageInfo.price}
      `;
      imageDetails5.innerHTML = `
        ${imageInfo.rating}
      `;
      imageDetails6.innerHTML = `
        ${imageInfo.comment}
      `;
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}