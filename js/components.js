// Function to load HTML components
function loadComponent(elementId, componentPath) {
    const container = document.getElementById(elementId);
    if (!container) {
        console.error(`Container element with id '${elementId}' not found`);
        return;
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', componentPath, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            container.innerHTML = xhr.responseText;
            console.log(`Successfully loaded component into ${elementId}`);
        } else {
            console.error(`Error loading component: ${xhr.status}`);
            container.innerHTML = `<div class="error">Error loading component</div>`;
        }
    };
    
    xhr.onerror = function() {
        console.error(`Error loading component from ${componentPath}`);
        container.innerHTML = `<div class="error">Error loading component</div>`;
    };
    
    xhr.send();
}

// Load components when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading components...');
    loadComponent('navbar-container', '../components/navbar.html');
    loadComponent('footer-container', '../components/footer.html');
}); 