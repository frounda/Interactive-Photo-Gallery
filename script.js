function upDate(previewPic) {
    console.log("Event triggered! Mouse over: " + previewPic.alt);
    
    var displayDiv = document.getElementById('image');
    
    // Change background and text
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var displayDiv = document.getElementById('image');
    
    // Reset background and text
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
