// console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661
import axios from "axios";

// axios.get('https://jsonplaceholder.typicode.com/albums/1/photos/')
//     .then(res=> console.log(res))
//     .catch(res => console.log("Error"))

axios.post('https://jsonplaceholder.typicode.com/albums/1/photos/', {
        title: 'arrrrrrrrrrrrr',
        thumbnailUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fsabinadaylove%2Fmini-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25BE%25D1%2587%25D0%25BA%25D0%25B8%2F&psig=AOvVaw0YDMSnftrBBbwx3ujCi7jy&ust=1634401758019000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDxtpbrzPMCFQAAAAAdAAAAABAD',
    })
    .then(res=>console.log(res))
    .catch(error => console.log(error))
//------------------------------------------------------------------------------------------------------
axios.get('https://jsonplaceholder.typicode.com/albums/1/photos/?id=1')
    .then(res=> console.log(res))
    .catch(error => console.log(error))

axios.put('https://jsonplaceholder.typicode.com/users/1', {
    name: "Avraam",
    username: "Gleb",
    email: "Seb@march.biz",
    })
    .then(res=>console.log(res))
    .catch(error => console.log(error))

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=> console.log(res))
    .catch(error => console.log(error))
//------------------------------------------------------------------------------------------------
axios.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(res=> console.log(res.data))
    .catch(error => console.log(error))
// just a plug
export default ()=>{};