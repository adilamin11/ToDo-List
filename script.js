// const btnele = document.querySelector(".btn")
// const inputele = document.querySelector('#inputf')
// const teskele = document.querySelector('.list')
// btnele.addEventListener("click",()=>{
//     // console.log('clicked');
//     // console.log(inputele.value);
//     if (inputele.value === "") {
//         alert("please add your task");
        
//     }else{
//         let listele = document.createElement("li")
//         listele.textContent=inputele.value
//        teskele.appendChild(listele)
//     }
//     inputele.value =""

    
// })
// teskele.addEventListener("click",(e)=>{
// if (e.target.tagName == 'li') {
//     e.target.classList.toggle(".checked")
// }
// })
const btnEle =document.querySelector(".btn")
const inputEle = document.querySelector("#inputf")
const taskEle = document.querySelector(".list")

btnEle.addEventListener("click", ()=>{
    // console.log("you clicked me!")
    // console.log(inputEle.value)
    if(inputEle.value === ""){
        alert("Please add your task first")
    }else{
        let listEle = document.createElement("li")
        listEle.textContent = inputEle.value
        taskEle.appendChild(listEle)

        let spanEle = document.createElement("span")
        spanEle.textContent = "\u00d7"
        listEle.appendChild(spanEle)

    }
    inputEle.value = ""
    saveELe()
})

taskEle.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveELe()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveELe()
       
    }
})

function saveELe(){
    localStorage.setItem("task", taskEle.innerHTML)
}

function getEle(){
    taskEle.innerHTML = localStorage.getItem("task")
}

getEle()




