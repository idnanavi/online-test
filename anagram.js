function anagrams() {
    let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
    //pertama tama saya membuat dictionary untuk memudahkan saya mengelompokan anagram(karena dictionary memiliki key,value)
    let anagram = {};
    //lalu saya akan memasukan kata ke dalam dictionary
        for(i in words){
            //memasukan kata ke dalam variable
            let word = words[i];
            //saya akan mengsort kata terlebih dahulu
            let sorted = word.split("").sort().join("");
            //proses ini akan push kata yang sudah di sorted ke dalam dictionary,jika keynya sudah ada,maka dia akan push key yang lain
             //jika keynya sama(!= null yang arti nya key tersebut sudah ada) makan value akan dimasukkan ke key tersebut
            if(anagram[sorted] != null){
            anagram[sorted].push(word);
            }else{
            anagram[sorted] = [word];
        }
    }
    for(i in anagram){
        let word = anagram[i];
        console.log(word)
    }
}
