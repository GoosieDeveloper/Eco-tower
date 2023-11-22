    //Scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Get all the links with an href starting with a dot (.)
    document.querySelectorAll('a[href^="."]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Scroll to the selectec class
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


    //Button Scrolling
function scrollToVersions() {
    const versionsSection = document.getElementById('versions-section');

    versionsSection.scrollIntoView({
        behavior: 'smooth'
    });
}

