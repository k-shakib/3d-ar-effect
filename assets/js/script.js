var model_viewer = document.getElementById("model");

function stop (){
    model_viewer.animationName= 'none';
}
function run (){
    model_viewer.animationName= 'Running';
}
function wave (){
    model_viewer.animationName= 'Wave';
}