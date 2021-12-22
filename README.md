# LearningNodeJS

All programs from NodeJS Course
To start programm you must use command "npm run devStart"

# Commands

netstat - an
console.log("");

let(block local) , var(normal, global ) , const(constant cannot change) = 3 different variables
if (1==1){

}

# Calculator basic

console.log("Welcome to the very epic calculator");

var potatoe = false;
while (potatoe == false) {
var num1 = prompt("Enter the first number:" );
var num2 = prompt("Enter the seccond number:" );
var choise = prompt("Enter 'add' for addition, 'sub' for subraction, 'mult' for multiplication and 'div' for division");
var num1 = parseInt(num1);
var num2 = parseInt(num2);
if (choise == "add"){
var result = num1 + num2;
var potatoe = true;
}
else if (choise == "sub"){
var result = num1 - num2;
var potatoe = true;
}
else if (choise == "mult") {
var result = num1 \* num2;
var potatoe = true;
}
else if (choise == "div") {
var result = num1/num2;
var potatoe = true;
}
else{
console.log("INVALID");
}

}

console.log(result);

# Looking through server . js

const expres = require ("express) = this is basically importing
const app = express() = creating app or website
const port = 4000 = setting the port

app.use(bodyParser.urlencoded({ extended: false })); = not extending the url (needed)

^^^^^ you need these for it to work
app.get("/" , (req, res) => {
res.send("Go to /hehe")
}
This means that when you go to the address with /. / is there by default. It will display something.
The res.send means that you are putting something on the screen of user.
