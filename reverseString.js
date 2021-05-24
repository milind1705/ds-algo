function reverseString(str) {
    var splitString = str.split("");

    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");
    
    console.log(joinString)
    return joinString;

}
reverseString("Hello");
//test result
reverseString("South in World")
reverseString("West")
reverseString("Butterfly")