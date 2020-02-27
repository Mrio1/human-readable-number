module.exports = function toReadable (number) {
    if(number==0){
        return 'zero';
    }
    const range = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const des = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let str = '';
    let strNum = number.toString();
    if(number / 100 >= 1){
        str+=range[strNum.slice(-3,-2)-0]+" hundred";
    }
    if((strNum.slice(-2)-0)/10>=1){
        if(strNum.slice(-2,-1)=='1'){
            str+=(str=='')?'':' ';
            str+=range[strNum.slice(-1)-0+10];
        } else {
            str+=(str=='')?'':' ';
            str+=des[strNum.slice(-2,-1)-0];
        }
    }
    if(strNum.slice(-2,-1)!='1' && strNum.slice(-1)!='0'){
        str+=(str=='')?'':' ';
        str+=range[strNum.slice(-1)-0];
    }

    return (str);
}

