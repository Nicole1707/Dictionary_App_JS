const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
infoText = wrapper.querySelector(".info-text");


function data(result, word){
    if (result.title){
        infoText.innerHTML= `Cant find the meaning of <span>"${word}"</span>. Please try another word`;
    }else{
        console.log(result);
        wrapper.classList.add("activate");
    }
}

function fetchApi(word){
    infoText.innerHTML= `Searching the meaning of <span>"${word}"</span>`;
    let url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res => res.json()).then(result => data(result, word));

}
searchInput.addEventListener("keyup", e=>{
    if (e.key === "Enter" && e.target.value) {
        fetchApi(e.target.value);
    }
});
