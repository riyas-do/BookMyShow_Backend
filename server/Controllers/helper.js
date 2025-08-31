export function validateUserInput(value){
    if(!value.name || !value.email){
        return false;
    }
    return true;
}