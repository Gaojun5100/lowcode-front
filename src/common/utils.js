export const parseJsonByString = (str ,val) =>{
   let  value = val
    try {
      value = JSON.parse(str)
    } catch (error) {
      
    }
    return value
}