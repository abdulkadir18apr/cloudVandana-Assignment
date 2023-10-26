const reverseStr=(str)=>{
    let res=""
    for(let i=str.length-1;i>=0;i--){
        res+=str[i]
    }
    return res
}

const reverseStringByWord=(str)=>{
    let res="";
    const strArr=str.split(" ");
    strArr.map((s)=>{
        res+=reverseStr(s)+" "
    })
    return res
}

const str="This is a sunny day"
const res=reverseStringByWord(str);
console.log(res)