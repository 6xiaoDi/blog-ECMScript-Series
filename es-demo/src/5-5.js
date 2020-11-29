const validJSON = json => {
    try {
        JSON.parse(json)
    } catch(e) {
        console.log(e)
    }
}

const json = '{name":"QH", "course": "es"}'
console.log(validJSON(json))