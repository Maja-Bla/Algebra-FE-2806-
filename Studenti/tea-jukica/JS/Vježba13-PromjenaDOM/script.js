//1

var descriptionNode = document.querySelector('.description');
var h1 = document.createElement('h1');
descriptionNode.parentNode.prepend(h1);

//2

var infoDiv = document.createElement('div');
infoDiv.classList.add('info');
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//

var ul = document.getElementById('list');
for (var i=0; i < 3; i++) {
  ul.appendChild(document.createElement('li'));
}



// console.log(h1);
// console.log(descriptionNode);

