var word_obj = {};

// Get feed and strip (return object with stripped text)
function stripContent(obj){

    // key/value object to keep track of numbers and words

    for (var i = 0; i <= obj.length - 1; i++) {
        // 1. Check to see if bodyHtml exists in this iteration of the object
        if(obj[i].content.bodyHtml){
            var text = obj[i].content.bodyHtml;

            // 2. Strip out all html and special characters
            // text = text.replace(/(<([^>]+)>)|([^a-z\s][\'])/ig, " ");
            text = text.replace(/(<([^>]+)>)/ig, "");
            text = text.replace(/(\r\n|\n|\r)/gm, "");
            text = text.replace(/[^a-zA-Z\'\s\w]+/g, "");

            // 3. Split into array using whitespace
            word_arr = text.split(/\s/);

            // remove empty array values
            for(var j = 0; j <= word_arr.length - 1; j++){
                // 1. Trim whitespace in each iteration of the array of words
                word_arr[j] = word_arr[j].trim();

                // if(word_arr[j] == "" || !word_arr[j] || !word_arr[j].trim()){
                if(word_arr[j] == "" || word_arr[j] === "undefined" || !word_arr[j]){
                    // 2. Attempt to remove any empty strings from array
                    word_arr.splice(j, 1);
                }
            };

            // 4a. Send to geCount function to get total number of words

            var params = {
                word_obj : word_obj,
                arr : word_arr
            };

            findWords(params);
        }
    };

    var returnObj = presentData(word_obj);

    // 5. Return object when done with count
    return returnObj;
}

// Find all individual words and store them
function findWords(params){
    for(var k = 0; k <= params.arr.length -1; k++){
        // Check if word has been found already.  If not, add it.
        if(typeof params.word_obj[params.arr[k]] === "undefined"){
            word_obj[params.arr[k]] = 1;
        } else {
            word_obj[params.arr[k]]++;
        }
    };
}

// Use object of counted words to create array for labels and numerical data
function presentData(obj){
    var number_array = [],
    word_array = [],
    return_obj = {};

    for(word in obj){
        word_array.push(word);
        number_array.push(obj[word]);
    }

    return {words:word_array,numbers:number_array};
}