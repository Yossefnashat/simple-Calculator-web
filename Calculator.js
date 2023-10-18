// style

document.body.style.background = 'black'
    
function set_style(){
    if( document.body.style.background == 'white' ){
        document.body.style.background = 'black'
    }
    else if(document.body.style.background == 'black' ){
        document.body.style.background = 'white'
    }
}

// code

    // get
        let input = document.getElementById('input')
        let output = document.getElementById('output')
        let put = ''

        // del
    function del(som) {
        if (som == 'ac') {
            input.value = ''
            output.innerHTML = 0
            put = ''
        }
        else if (som == 'del') {
            input.value = input.value.slice(0 , -1)
            output.innerHTML = output.innerHTML.slice(0 , -1)
            put = put.slice(0 , -1)
        }
    }
    
    // int
        function int(som) {
            input.value += som
            if (som == 'x') {
                put += '*'
            }
            else {
                put +=  som
            }
            console.log(som)
            console.log(put)
            calc()
        }

    // calc
    function calc() {
        try {
            output.innerHTML = eval(put)
        }
        catch {
            output.innerHTML = 'syntax Erorr'
        }
    }
    
    // result
    function result() {
        input.value = output.innerHTML
        output.innerHTML = ''
    }
    



calc()
output.innerHTML = 0