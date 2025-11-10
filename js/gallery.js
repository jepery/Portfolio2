document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const captionText = document.getElementById('caption');
    const galleryItems = document.querySelectorAll('.gallery-item img, .gallery-item iframe');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            if (item.tagName.toLowerCase() === 'img') {
                modalImg.src = item.src;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (item.tagName.toLowerCase() === 'iframe') {
                const videoSrc = item.getAttribute('src');
                modalVideo.src = videoSrc;
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
            }
            captionText.innerHTML = item.getAttribute('alt');
            document.body.classList.add('modal-open');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.style.display = 'none';
        modalVideo.style.display = 'none';
        modalVideo.src = ''; // Stop the video
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.style.display = 'none';
            modalVideo.style.display = 'none';
            modalVideo.src = ''; // Stop the video
            document.body.classList.remove('modal-open');
        }
    });
});


/*Scroll Reveal*/

