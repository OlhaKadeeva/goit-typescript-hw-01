import "./style.css";
import { DayOfWeek, isWeekend } from "./basic/5";
import { RoleDescription } from "./generics/5";

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));

console.log(RoleDescription.admin);
console.log(RoleDescription.guest);
