

export const loadData = (key) => {
    let data = localStorage.getItem(key)
    data = JSON.parse(data)
    return data
}

export const saveData = (key, data) => {
   localStorage.setItem(key,JSON.stringify(data))
}