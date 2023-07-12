const container = document.getElementById('project_container');
const projects = document.getElementsByClassName('project');

let size = [];

for (let i = 0; i < projects.length; i++) {
    size.push(i);

    if (size.length === 3) {
        size = [];
    }  
}

if (size.length > 0) {
    for (let i = 0; i < size.length; i++) {

        if (size.length == 1) {
            projects[size[i]].classList.add('centered');
        }
    }
}




