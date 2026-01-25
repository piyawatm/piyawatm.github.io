// Simple script for the minimal website
console.log('Welcome to Ken\'s minimal personal website!');

// Add smooth scrolling behavior (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive features here if needed
    
    // Simple analytics tracking (placeholder)
    console.log('Page loaded successfully');
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Add keyboard shortcuts if needed
    });
});

// Simple error handling for external links
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add any tracking or error handling here
            console.log('External link clicked:', this.href);
        });
    });
});