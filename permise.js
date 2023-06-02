const cart = ["bag","pants","watch"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function (paymentInfo) { 
    console.log('Print ',paymentInfo);
 })
.catch((err)=>{
    console.log(err.message);
})



// Creating Promise
function createOrder(cart){
    // Creating promise object
    const pr = new Promise(function(resolve, reject){

        if(!validateCart(cart)){
            const err = new Error('Cart is not valid');
            reject(err);
        }

        const orderId = 123;
        if(orderId){
            resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve,reject){
        resolve("Paymeny Success");
    })
}

function validateCart(cart) {
    return true;
}