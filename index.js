export default {
    getAvg:(arr)=>{
        let fn = (prev,next,index,arr)=>(index==arr.length-1)?(prev+next)/arr.length:prev+next
        return arr.reduce(fn,0)
    }
}