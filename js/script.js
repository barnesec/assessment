// Get feed and strip (return object with stripped text)
function stripContent(obj){
    for (var i = 0; i <= obj.length - 1; i++) {
        // 1. Check to see if bodyHtml exists in this iteration of the object
        if(obj[i].content.bodyHtml){
            var text = obj[i].content.bodyHtml;

            // 2. Strip out all html and special characters
            text = text.replace(/(<([^>]+)>)|([^a-z\s])/ig, " ");

            // 3. Split into array using whitespace
            word_arr = text.split(/\s/);

            // 4a. Send to geCount function to get total number of words
            obj[i] = getCount(word_arr);
        } else {
            // 4b. bodyHtml didn't exist, therefore there are no words (default to 0)
            obj[i] = 0;
        }
    };

    // 5. Return object when done with count
    return obj;
}

// Remove extra white space and count number of words (return number of words)
function getCount(arr){
    for(var j = 0; j <= arr.length - 1; j++){
        // 1. Trim whitespace in each iteration of the array of words
        arr[j] = arr[j].trim();

        if(arr[j] == "" || !arr[j] || !arr[j].trim()){
            // 2. Attempt to remove any empty strings from array
            arr.splice(j, 1);
        }
    };

    // 3. Return length of current array of words
    return arr.length;
}
