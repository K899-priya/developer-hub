export function saveHistory(request){

const history = JSON.parse(localStorage.getItem("apiHistory")) || []

history.unshift(request)

localStorage.setItem("apiHistory",JSON.stringify(history))

}

export function getHistory(){

return JSON.parse(localStorage.getItem("apiHistory")) || []

}