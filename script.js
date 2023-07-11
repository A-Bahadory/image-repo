var links;


links = ['https://images.unsplash.com/photo-1604675223954-b1aabd668078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1608032364895-0da67af36cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_picture = document.getElementById('picture');
  links.push(links[0]);
  element_picture.setAttribute("src", links.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_picture2 = document.getElementById('picture');
  links.unshift(links.slice(-1)[0]);
  element_picture2.setAttribute("src", links.pop());

});