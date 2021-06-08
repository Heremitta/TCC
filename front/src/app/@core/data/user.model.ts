export class User{
    id:number
    nickName:string
    name:string
    phone:string
    email:string
    typeId:string
    active:boolean
    password?:string
    token?:string
    position?:number
    constructor(name:string,nickName:string,phone:string,email:string, typeId:string, active:boolean,password?:string,token?:string){
        this.name = name
        this.nickName = nickName
        this.phone = phone
        this.email = email
        this.typeId = typeId
        this.active = active
        password?
        this.password = password : ''
        token?
        this.token = token : ''
    }
}