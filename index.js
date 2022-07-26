
const main = document.getElementsByTagName("main")[0];
main.remove();
//function updateHeader(name) {
const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = 'Marley is the champion'
document.body.append(newHeader);