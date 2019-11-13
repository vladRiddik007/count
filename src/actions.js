export const inc = () => ({type: 'INC'});//ACTION CREATOR - функция которая создает объект action
export const dec = () => ({type: 'DEC'});//ACTION CREATOR
export const rnd = () => {
    return {
        type: 'RND', 
        payload: Math.floor(Math.random()*10)
    }
}