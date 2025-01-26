document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById('heart');
    const note = document.getElementById('note');
    const closeNote = document.getElementById('closeNote');

    
    heart.addEventListener('click', () => {
        note.style.display = 'block';
        setTimeout(() => {
            note.style.opacity = 1;
            note.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10); 
    });

    
    closeNote.addEventListener('click', () => {
        note.style.opacity = 0;
        note.style.transform = 'translate(-50%, -50%) scale(0.5)';
        setTimeout(() => {
            note.style.display = 'none';
        }, 300); 
    });
});
