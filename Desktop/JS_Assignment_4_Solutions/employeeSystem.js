class Employee{
    constructor(id,name,dept,salary){
        this.id=id;
        this.name=name;
        this.department=dept;
        this.salary=salary;
    }
    getAnnualSalary(){
        return this.salary*12;
    }
    applyBonus(p){
        this.salary=this.salary+(this.salary*p/100);
    }
}
var staff=[
    new Employee(1,"A","Tech",30000),
    new Employee(2,"B","HR",25000),
    new Employee(3,"C","Tech",40000),
    new Employee(4,"D","Sales",28000),
    new Employee(5,"E","Admin",22000)
];
var total=0;
for(var i=0;i<staff.length;i++){
    total+=staff[i].getAnnualSalary();
}
console.log(total);
