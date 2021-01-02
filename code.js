function displayInfo() {
    var NCphrase1 = "There are ";
    var NCphrase2 = " B's in this phrase."
    document.getElementById("phraseInfo").innerHTML = NCphrase1 + count + NCphrase2;
}
function varChangePhrase() {
    var input1 = document.getElementById("inputWordsToCount").value;
    console.log(input1);

    var someChar = "B";
    count = 0;
    for (i = 0; i < input1.length; i ++){
        if (input1[i] == someChar){
            count++;
        }
    
    }
    console.log(count);
}