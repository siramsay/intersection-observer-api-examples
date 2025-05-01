//const three = document.getElementById('three');
//const three = document.querySelector('.three');
//const three = document.querySelectorAll('.three');
console.log(three);

let observer;

let options = {
  root: null, // null mean uses viewport
  rootMargin: "1000px 0px -250px 0px",
  threshold: [0.5],
};

observer = new IntersectionObserver( handleIntersect , options );
//observer.observe(three.item(0));

// https://stackoverflow.com/questions/54866560/same-intersection-observer-for-multiple-html-elements
document.querySelectorAll('.three').forEach((i) => {
  if (i) {
    observer.observe(i);
  }
});

function handleIntersect(changes, observer) {

  console.log('the observer:', observer); // this gives you the options and prototype
  console.log(changes);

  changes.forEach((entry) => {
    console.log('Entry:', entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("up");
    } else {
      entry.target.classList.remove("up");
    }

  });
}