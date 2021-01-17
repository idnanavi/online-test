function findFirstStringInBracket(str){
    if(str.length > 0){
        let indexFirstBracketFound = str.indexOf("(");
        let indexClosingBracketFound = str.indexOf(")");
        if(indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0){
            let words = str.substr( indexFirstBracketFound+1,indexClosingBracketFound -1 );
            return words;
        }
        else{
            return '';
        }
    }else{
        return '';
    }
}