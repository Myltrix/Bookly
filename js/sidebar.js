document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
            sidebarOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeSidebarFunc);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebarFunc);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebarFunc();
        }
    });
    
    function closeSidebarFunc() {
        sidebar.classList.remove('open');
        sidebarOverlay.style.display = 'none';
        document.body.style.overflow = ''; 
    }
});