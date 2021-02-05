export const search = (lists,name) => {
    let newList=[]
    if(name.length>0){
      for(let i=0;i<lists.length;i++){
        for(let j=0;j<lists[i].cards.length;j++){
          let card=lists[i].cards
          if(card[j].id === parseInt(name)){
            newList.push(lists[i])
          }
        }  
      }
      if(newList.length>0){  
        return newList;
      }else{
        return newList=[{userId:-1}]
      }
    }else{
      return newList;  
    }
} 