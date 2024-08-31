import { ImageProps } from "react-native"

export enum Role{
    ADMIN='admin',
    DOCTOR='doctor',
    PATIENT='patient'
}
export enum STATUS{
    FINISHED='finished', 
    CANCELED="canceled",
    PENDING='pending'
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

export interface IhistoryCard{
    imageName?:ImageProps 
    names:string 
    profession:string 
    date:string 
    status:STATUS 
    action?:()=>void
}