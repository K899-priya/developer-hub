export function trackTool(tool){

const stats = JSON.parse(localStorage.getItem("toolStats")) || {}

stats[tool] = (stats[tool] || 0) + 1

localStorage.setItem("toolStats",JSON.stringify(stats))

}

export function getToolStats(){

return JSON.parse(localStorage.getItem("toolStats")) || {}

}