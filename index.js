const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
const NAME =  "FREELANCERS";


function main() {

    // Grab the "root" element
    const root = document.getElementById("root");
    console.log(root instanceof Element);

    // Add an h1 element - give it text of "FREELANCERS"
    // Append the HTML document.
    const h1 = document.createElement('h1');
    h1.innerText = NAME;
    root.appendChild(h1);

    // Create an unordered list element
    const userList = document.createElement("ul");
    userList.classList.add("user-list");

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}, ${user.age}, ${user.occupation}`;
        userList.appendChild(listItem);
    });
    root.appendChild(userList);
}
//call the main function
main();