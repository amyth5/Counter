//const countValue = document.querySelector('#counter')

//alternatively we can get the element by using get element by id
const countValue = document.getElementById('counter')  // we do not need to use '#' here as it takes id only

const increment = () => {

    let value = parseInt(countValue.innerText)

    value = value + 2

    countValue.innerText=value

}
function decrement(){
    let value = parseInt(countValue.innerText)

    value = value - 2

    countValue.innerText=value

}