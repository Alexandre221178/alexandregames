
document.querySelectorAll('.video-lazy').forEach(el => {
  el.addEventListener('click', function () {
    const id = this.dataset.id;

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');

    this.innerHTML = '';
    this.appendChild(iframe);
  });
});
