function salaryWithExtraHoursPayment(baseSalary: number, extraHoursInTime: number): number{
    if(extraHoursInTime == 0){
        throw new Error("Null extra hours");
    }
    const extraHoursPrice: number = (2 / 100) * baseSalary;
    const totalExtraHoursPayment: number = extraHoursInTime * extraHoursPrice;
    return baseSalary + totalExtraHoursPayment;
}
