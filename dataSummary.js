let nameValue = "John";
let ageValue = 22;
let isStudentValue = true;
let hobbiesValue = ["music", "travel"];
let profileValue = { city: "Delhi" };
let nullValue = null;
let undefValue;

console.table({
    Name: { value: nameValue, type: typeof nameValue },
    Age: { value: ageValue, type: typeof ageValue },
    Student: { value: isStudentValue, type: typeof isStudentValue },
    Hobbies: { value: hobbiesValue, type: Array.isArray(hobbiesValue) ? "array" : typeof hobbiesValue },
    Profile: { value: profileValue, type: typeof profileValue },
    NullValue: { value: nullValue, type: "null" },
    Undefined: { value: undefValue, type: typeof undefValue }
});
