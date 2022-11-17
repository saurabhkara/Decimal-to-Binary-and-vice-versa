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


function primeNumber(){
    let num = +prompt('Enter the number');
    let flag=false;
    for(let i=2;i<=Math.sqrt(num); i++){
        if(num % i === 0){
            flag =true;
            break;
        }
    }
    if(flag){
        console.log('Number is non-prime',num);
    }else{
        console.log(num,' is Prime number');
    }
}

// primeNumber();

function reverseTheNumber(){
    let num = +prompt('Enter the number');
    let temp = num;
    let result=0;

    while(temp){
        result = (result*10) + (temp%10);
        temp = parseInt(temp/10);
        
    }
    console.log(result);
}

// reverseTheNumber();

function armStrongNumber(){
    let num = +prompt('Enter the number');
    let temp=num;
    let result =0;
    while(temp){
        result= result + ((temp%10)**3);
        temp = parseInt(temp /10);
    }
    console.log(result,num);
    if(num === result){
        console.log(num, ' is armstrong number');
    }else{
        console.log(num,' is not armstrong number');
    }

}
// armStrongNumber();