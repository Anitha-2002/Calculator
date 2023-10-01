const lastTenResults = [];
 let key = 0;
 let count = 0;
 let equals = 0;
 
function clickme(id) {
    
    const input_data = document.getElementById('display');
    let elem = input_data;
    if (equals)
    {
        elem.value = '';
        equals = 0;
    }
    if (id.charCodeAt(0) - 48 >= 0 && id.charCodeAt(0) - 48 <= 9)
        elem.value += id;
    if (id == 'a')
        elem.value = '';
    if (id == 'c')
        elem.value = elem.value.slice(0, -1);
    if (id == '*' || id == '+' || id == '-' || id == '/' || id == '.') {
        elem.value += id;
    }
    if (id == '=') {
        equals = 1;
        try {
            const result = eval(elem.value);
            
            if(!isNaN(result))
            {count = lastTenResults.length;
            if (count < 10) {
                lastTenResults.push(elem.value+"="+result);
            } else {
                lastTenResults.shift(); // Remove the oldest result
                lastTenResults.push(elem.value+"="+result);
            }
            }
            key = lastTenResults.length - 1;
            if(result == "Infinity")
                elem.value = 'DivBy0Error';
            else
                elem.value = result;
            
        } 
        catch (error) {
            elem.value = 'Error';
        }
        
    }


    if(id == "history")
    {
        elem.value = lastTenResults[key];
        displayLastTenResults();

    }
    if(id == "next")
    {
        
        if(key >= 0)
            elem.value = lastTenResults[key--];
        else
            elem.value = "endOfLast10Results";
      
    }
    
}

function displayLastTenResults() {
    const lastTenResultsDiv = document.getElementById('lastTenResults');
    lastTenResultsDiv.innerHTML = '';
    for (let i = 0; i < lastTenResults.length; i++) {
        lastTenResultsDiv.innerHTML += "=> " + lastTenResults[i] + '<br>';
    }
}
