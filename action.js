const three = document.getElementById('three');

let observer;

let options = {
  root: null, // null mean uses viewport
  rootMargin: "1000px 0px -250px 0px",
  threshold: [0.5],
};

observer = new IntersectionObserver( handleIntersect , options );
observer.observe(three);

function handleIntersect(changes, observer) {

  console.log('the observer:', observer); // this gives you the options and prototype
  console.log(changes);

  /*  if (IntersectionObserverEntry.[0].isIntersecting) {
        IntersectionObserverEntry.target.classList.add("up");
        //if (entry.intersectionRatio > 0.75) alert('boon')
    } else {
        IntersectionObserverEntry.target.classList.remove('up')
    }*/

  changes.forEach((entry) => {
    console.log('Entry:', entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("up");
    } else {
      entry.target.classList.remove("up");
    }

  });
}