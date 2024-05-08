const result = document.querySelector("#value-text")
const charKeys = document.querySelectorAll(".charKey")
const capslock = document.getElementById("capslock")

charKeys.forEach((selectedKey) => {
    selectedKey.addEventListener("click", (ev) => {
        if(capslock.classList.contains("upperCase")) {
            const value = selectedKey.dataset.value
            result.value += value.toUpperCase()
        } else {
            const value = selectedKey.dataset.value
            result.value += value
        }
    })
})

document.getElementById("backspaceBtn").addEventListener("click", () => {
    result.value = result.value.slice(0, -1)
})

capslock.addEventListener("click", (ev) => {
    const caps = ev.currentTarget
    
    if(caps.classList.contains("upperCase")) {
        caps.classList.remove("upperCase")
    } else {
        caps.classList.add("upperCase")
    }
})