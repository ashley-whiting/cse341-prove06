const sum = (a,b) => {
    if (1 && b){
    return a + b;
    }
    throw new Error('Invalid arguments');
};

//synchronus code throwing an error
//synchoronous code use try/catch
try{
    console.log(sum(1,2));
}catch (error) {
    console.log('Error occurred!');
    console.log(error);
}

console.log('This works!');


//asynchronous code use then/catch