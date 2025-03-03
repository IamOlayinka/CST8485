function myfun1() {
 
    var max = document.getElementById('max1');
    var min = document.getElementById('min1');
    var res_list = document.getElementById('res_list_1');
   
    if (max.style.display !== 'none') {
        max.style.display = 'none';
        min.style.display = 'inline';
        res_list.style.display = 'block';
    } else {

        max.style.display = 'inline';
        min.style.display = 'none';
        res_list.style.display = 'none';
    }
    
} 

function myfun2() {
 
    var max = document.getElementById('max2');
    var min = document.getElementById('min2');
    var res_list = document.getElementById('res_list_2');
   
    if (max.style.display !== 'none') {
        max.style.display = 'none';
        min.style.display = 'inline';
        res_list.style.display = 'block';
    } else {

        max.style.display = 'inline';
        min.style.display = 'none';
        res_list.style.display = 'none';
    }
    
} 


function myfun3() {
 
    var max = document.getElementById('max3');
    var min = document.getElementById('min3');
    var res_list = document.getElementById('res_list_3');
   
    if (max.style.display !== 'none') {
        max.style.display = 'none';
        min.style.display = 'inline';
        res_list.style.display = 'block';
    } else {

        max.style.display = 'inline';
        min.style.display = 'none';
        res_list.style.display = 'none';
        
    }
    
} 

 // JavaScript for the slider functionality
 let currentIndex = 0; // Start with the first project
 const projects = document.querySelectorAll('.project'); // All project elements
 const totalProjects = projects.length;
 const projectContainer = document.querySelector('.project-container');

 // Next button functionality
 document.querySelector('.next').addEventListener('click', () => {
     if (currentIndex < totalProjects - 1) {
         currentIndex++;
         updateSlider();
     }
 });

 // Previous button functionality
 document.querySelector('.prev').addEventListener('click', () => {
     if (currentIndex > 0) {
         currentIndex--;
         updateSlider();
     }
 });

 // Function to update the slider position
 function updateSlider() {
     // Move the slider by adjusting the transform property
     projectContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
 }