import { IUser } from "../types";
import { IhistoryCard, Role, STATUS } from "../types/IUsers";

export const Users=[
    {
        username:"ghis8",
        firstName:"Ghislain",
        lastName:"Kongolo",
        email:"ghislainkongolo0@gmail.com",
        password:"password0",
        role:Role.ADMIN,
        phone:"+250783771485",
        address:"Rwanda,Kigali/Gasabo,Gisozi"
    },
    {
        username:"walker",
        firstName:"Walker",
        lastName:"Ghis",
        email:"walkerghis@gmail.com",
        password:"password1",
        role:Role.DOCTOR,
        phone:"+250790783676",
        address:"Rwanda/Kigali/Remera"
    },
    {
        username:"Joe",
        firstName:"Joseph",
        lastName:"Bihamba",
        email:"josephbihamba@gmail.com",
        password:"password2",
        role:Role.PATIENT,
        phone:"+250799656623",
        address:"Rwanda/Kigali,Gikondo"
    },

] satisfies IUser[]

export const services=[
    {
        title:'Covid-19 Service',
        content:"Get checked immediately if you have signs of covid desease"
    }
]

export const offers=[
    {
        iconName:'virus',
        title:'check-up',
        color:'#a68d3d'
    },
    {
        iconName:'pills',
        title:'drugs',
        color:"#c97a3c"
    },
    {
        iconName:'viruses',
        title:'covid',
        color:"#74753b"
    },
    {
        iconName:'chart-pie',
        title:'others',
        color:"#749163"
    },
    {
        iconName:'tooth',
        title:'tooth',
        color:"#3e8745"
    },
    {
        iconName:'ghost',
        title:'tht',
        color:"#915178"
    },
    {
        iconName:'user-md',
        title:'orthopedi',
        color:"#663275"
    },
    {
        iconName:'brain',
        title:'brain',
        color:"#a779db"
    },
    {
        iconName:'heart',
        title:'heart',
        color:"#3c806b"
    },
    {
        iconName:'eye',
        title:'eye',
        color:"#4f7b7d"
    },
    {
        iconName:'tired',
        title:'nerve',
        color:"#2d4263"
        
    },
    {
        iconName:'venus-mars',
        title:'sex',
        color:"#77a6f2"
    },
]

export const histories:IhistoryCard[]=[
    {
        
        imageName:require('../assets/profile.jpeg'),
        names:"Ghislain Kongolo",
        profession:"Senior Developer",
        date:'10-sept-2024',
        status:STATUS.PENDING
    },
    {
        imageName:require('../assets/profile.jpeg'),
        names:"John doe",
        profession:"Junior Developer",
        date:'12-sept-2024',
        status:STATUS.CANCELED
    },
    {
        imageName:require('../assets/profile.jpeg'),
        names:"Astrid Kongolo",
        profession:"Bank Manager",
        date:'25-august-2024',
        status:STATUS.FINISHED
    },
]