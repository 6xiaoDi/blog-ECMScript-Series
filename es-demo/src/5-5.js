const validJSON = json => {
    try {
        JSON.parse(json)
        return true
    } catch(e) {
        return false
    }
}

const json = '{name":"QH", "course": "es"}'
console.log(validJSON(json))