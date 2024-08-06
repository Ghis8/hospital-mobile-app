import { IUser } from "../types";
import { Role } from "../types/IUsers";

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