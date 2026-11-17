console.log('second js');

const sections = document.getElementsByClassName('section-title');

for(const section of sections){
    console.log(section);
    section.classList.add('section-title');
    
}
