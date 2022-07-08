const wrapper  = document.querySelector(".wrapper"),
form  = wrapper.querySelector("form"),
fileInp = form.querySelector("input");

function fetchRequest(formData) {
    fetch("http://api.qrserver.com/v1/read-qr-code/" , {
        method: "POST" , body: formData 
    }).then(res => res.json()).then(result => {
        wrapper.classList.add("active");
        console.log(result);
    });
}

fileInp.addEventListener("change" , e => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file",file);
    fetchRequest(formData);
})

form.addEventListener("click" , () => fileInp.click());
