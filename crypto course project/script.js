// Funkce pro přepínání postranního panelu
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-content');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";
        sidebarToggle.textContent = "❌"; // Změna ikony na zavření
    } else {
        sidebar.style.display = "none";
        sidebarToggle.textContent = "☰"; // Změna ikony na otevření
    }
}

// Funkce pro změnu videa
function changeVideo(videoSrc) {
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrc;
    mainVideo.play();
    lockNextVideo(videoSrc); // Uzamčení tlačítek pro další videa
}

// Funkce pro zámek videí
function lockNextVideo(currentVideoSrc) {
    const allButtons = document.querySelectorAll('.video-btn');
    let enableNextVideo = false;

    // Povolíme další video, pokud bylo právě přehráno
    if (currentVideoSrc === 'intro-video.mp4') {
        enableNextVideo = true;
    }

    if (enableNextVideo) {
        document.getElementById('video-2').disabled = false;
        document.getElementById('video-2').classList.remove('locked');
    }

    // Povolíme další video podle přehrání předchozího
    if (currentVideoSrc === 'video-2.mp4') {
        document.getElementById('video-3').disabled = false;
        document.getElementById('video-3').classList.remove('locked');
    }
}

// Funkce pro sledování konce videa a rozbalení postranního panelu
document.getElementById('main-video').addEventListener('ended', function () {
    const sidebar = document.getElementById('sidebar-content');
    sidebar.style.display = "block"; // Zobrazíme panel po skončení videa
});
