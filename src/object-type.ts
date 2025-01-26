// let user1 = { userName: 'Selina', userId: 101 };
// console.log(user1)

//Ans: { userName: 'Selina', userId: 101 }

// let users: object;
// users= [{name: '111'}]

// let users: object;
// users = [{ name: '111' }, { name: 'Nayeem' }];


// let user1: { userName: string, userId?: number };
// user1 = { userName: 'Shorna', userId: 310 };
// console.log(user1)

//Ans: { userName: 'Shorna', userId: 310 }

// the meaning of question mark is whether works or not does't matter

// let users: object[];
// users = [];
// let user2: { userName: string; userId?: number };
// user2 = { userName: "Shorna-Selina", userId: 312 };
// users.push(user2)

// let user3: { userNames: string; userId: number };
// user3 = { userNames: "best friend", userId: 313 };
// users.push(user3);
// console.log(users);

//Ans : [
//   { userName: 'Shorna-Selina', userId: 312 },
//   { userNames: 'best friend', userId: 313 } ]

// for (const key in users) {
//         console.log(key)
// }

//  0 , 1

// for (const key in users) {
//   console.log(users[key]);
// }

// Ans: { userName: 'Shorna-Selina', userId: 312 }
// { userNames: 'best friend', userId: 313 }

// let users0: { username: string, age: number };
// users0= {username: 'nayeem', age: 18}
// for (const key in users0) {
// console.log(users0 [key]);
// }

let users0 :{ username: string; age: number };
users0= { username: "nayeem", age: 18 };

for (const key in users0) {
  console.log(users0.username); 
}

// Ans: nayeem

