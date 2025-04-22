async function getFoodFromDB(searchString){

    let response = '';

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', info.ajaxUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        const data = `action=getFood&searchString=${searchString}`;

        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    response = JSON.parse(xhr.responseText);
                    resolve(response);
                } catch (e) {
                    reject(e);
                }
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        }

        xhr.send(data);
    })
        

}