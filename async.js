const obj = fetch("https://jsonplaceholder.typicode.com/users");
console.log(obj);




// const obj = fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
//     return response.json();
// }).then(obj => {
//     console.log(obj);
// })





// const obj = fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
//     return response.json()
// }).then(obj => {
//     obj.forEach(user =>{
//         console.log(obj)
//     })
// })





// const obj = async () =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

// obj()




// const getDadJokes = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//         },
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
// };

// getDadJokes();



// const jokeObject = {
//     id: "ap4orcpGtrc",
//     joke : "A man walks into a bar and orders helicopter flavor chips. The barman replies “sorry mate we only do plain"
// }

// const postDadJoke = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const responseData = await response.json();
//     console.log(responseData.headers);
// }

// postDadJoke(jokeObject);




