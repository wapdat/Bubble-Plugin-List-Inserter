function(properties, context) {
    
 let originalList = properties.originalList; 
    
 let position = properties.position; 
 let alteredList = [];
 let originalListLength = 0;   

 if (originalList != null) {   
    alteredList = originalList.get(0, originalList.length()); 
    originalListLength = originalList.length(); 
 }

 
 let debug = '';
    
    if (originalListLength < position) {
      for (let i = originalListLength; i < position; i++){
        alteredList.push(properties.padValue);
      }
    }

 debug += "\n" + typeof alteredList ;
 debug += "\n" + JSON.stringify(alteredList) ;
    
 alteredList.splice(position-1, 1, properties.value);   
    
 return {'alteredList': alteredList, 'debug': debug}
    
}