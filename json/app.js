let done = document.querySelector('#done');
done.addEventListener('click', function () {
    let color = document.querySelector('#pickedcolor').value;
    let clr = document.querySelector('#clr');
    clr.innerHTML = color;



    const copyColorBtn = document.getElementById("copyColorBtn");
    copyColorBtn.addEventListener("click", function () {
        const pickedColor = document.getElementById("pickedcolor").value;
        navigator.clipboard.writeText(pickedColor).then(function () {
            
            alert("Color code copied to clipboard: " + pickedColor);
        }, function (err) {
            console.error("Failed to copy color code: ", err);
        });
    });
})