


export async function consultarRompimentos() {
    const response = await fetch('https://nmt.nmultifibra.com.br/rompimentos')
    const data = await response.json()
    console.log(data)
    return data
}


