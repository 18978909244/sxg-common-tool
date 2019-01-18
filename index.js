module.exports =  {
    getAvg:(arr)=>{
        let fn = (prev,next,index,arr)=>(index==arr.length-1)?(prev+next)/arr.length:prev+next
        return arr.reduce(fn,0)
    },
    sum:(...arg)=>{
        let total=0
        for(let i =0;i<arg.length;i++){
            total+=arg[i]
        }
        return total
    }
}