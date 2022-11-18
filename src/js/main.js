const cep = document.querySelector('#cep');

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", async (e)=>{
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    try {      
        const response = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        const data = await response.json()
        showData(data)
    } catch (error) {
        console.log(error)
    }

})
