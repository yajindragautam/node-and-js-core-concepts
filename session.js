// COOKIE VS LOCAL STORAGE VS SESSION STORATE

// Local Storate
localStorage.setItem("name","Yajindra");
localStorage.getItem("name");
// dELETE LOCAL STORATE
localStorage.removeItem("name") // remove certain item
localStorage.clear() // remove all

// session storage
sessionStorage.setItem("lastname","Gautam");
sessionStorage.getItem("lastname");

// Cookie
document.cookie = "hello=true";
document.cookie = "doSomethingOnlyOnce=true; expires=Fri"
// cookie encodeURIComponent / decodeURIComponent
// let key = prompt("Enter key");
// let value = prompt("Enter value");
// document.cookie(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
// console.log(document.cookie);