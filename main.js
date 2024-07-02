const formPayement = document.getElementById("form");
formPayement.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData.get("repayment"));
})