declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: {
        phone: number;
    };
    getContact(field: string): string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: {
        name: string;
    };
    getContact(field: number): number;
};
declare type EmployeePerson = Person & Employee;
declare let typeTest: {
    phone: number;
} & {
    name: string;
};
declare let typefunTest: ((field: string) => string) & ((field: number) => number);
declare let person1: EmployeePerson;
declare let person2: EmployeePerson;
declare let stringtypeTest: string;
declare let numbertypeTest: number;
