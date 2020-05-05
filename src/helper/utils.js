
export const checkAuth = ()=>{
    if(window && localStorage.getItem('jwt')  ){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    return false;
}

export const authenticate = (jwt)=>{
    if(window){
        localStorage.setItem('jwt',JSON.stringify(jwt))
    }
    else{
        console.log("unable to authenticate user")
    }
}

export const logout = ()=>{
    if(window){
        localStorage.removeItem("jwt")
    }
}

