console.log('Good luck Saurabh');

function decimalToBinary(){
    let num = +prompt('Enter the number');
    let temp=num;
    let result=0;
    while(temp){
      result= (result*10) + temp%2;
      temp=parseInt(temp/2);
    }
    console.log(`the binary number of ${num} is : `,result);
}

// decimalToBinary();



function binaryToDecimal(){
    let num  = +prompt('Enter the number');
    let temp = num;
    let result =0;
    let power=0;
    while(temp){
        result = result + ((2**power)*temp%10);
        temp = parseInt(temp /10);
        power++;
    }
    console.log(result);
}

// binaryToDecimal();


