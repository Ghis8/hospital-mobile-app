export enum Role{
    ADMIN='admin',
    DOCTOR='doctor',
    PATIENT='patient'
}

export interface IAppointment{
    date:string
    time:string 
    doctor:IUser
    patient:IUser 
    description:string

}

export interface IUser{
    username:string
    firstName:string 
    lastName:string 
    email:string 
    password:string
    role?:Role
    phone:string 
    address:string 
}