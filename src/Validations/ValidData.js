export const validateName = (name) => {
       const nameRegex = /^[A-Za-z]+$/ ;
       if(nameRegex.test(name)){
        return 'true'
       }else{
        return 'false'
       }
}

export const validateLastName = (name) =>{
       const lastNameRegex = /^[A-Za-z]+$/ ;
       if(lastNameRegex.test(name)){
        return 'true'
       }else{
        return 'false'
       }
}

export const validateAge = (age) => {
       const AgeRegex = /^\S[0-9]{0,3}$/;
       if(AgeRegex.test(age)){
        return 'true'
       }else{
        return 'false'
       }
}