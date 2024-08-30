export interface IAlert{
    title:string 
    body:string 
    accept?:()=>void
    cancel?:()=>void 
    later?:()=>void
}