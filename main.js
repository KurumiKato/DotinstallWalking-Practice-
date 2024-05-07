'use strict';
{
  function callback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
      }
    });
  };

  // const targets = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(callback,{
    threshold : 0.2,
  });

  document.querySelectorAll('.animate').forEach(target => {
    observer.observe(target);
  });

  // const options = {
    // threshold : 0.2,
  // };
}