const observer= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const text= document.querySelectorAll('#text path');
for(let i=0; i<text.length; ++i)
    console.log(`${i+1}: ${text[i].getTotalLength()}`);
