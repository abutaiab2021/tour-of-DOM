// console.log('file is connected ok');

// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    // section.style.backgroundColor='lightblue';
    // section.style.padding = '10px';
    // section.style.margin ='10px';
    // section.style.borderRadius= '10px';
    // section.style.border='5px solid red';

    section.style.cssText = 'padding:10px;margin:10px;border:2px solid red;border-radius:10px;background-color:lightgreen';
}



