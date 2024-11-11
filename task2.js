let num1 = Number(prompt("Бірінші санды енгізіңіз"))
let num2 = Number(prompt("Екінші санды енгізіңіз"))
let num3 = Number(prompt("Үшінші санды енгізіңіз"))


switch(num1, num2, num3){
    case "-":
        alert(num1 > num2 && num2 > num3)
        break;

    case "-":
        alert(num1 < num2 && num2 > num3);
        break;
    
    case "-":
        alert(num1 < num2 && num2 < num3);
        break;
}