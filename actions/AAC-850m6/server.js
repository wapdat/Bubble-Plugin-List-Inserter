function(properties, context) {
    
 let originalList = properties.originalList; 
 let position = properties.position; 
    
 let alteredList = originalList.get(0, originalList.length());   
 
 let debug ='\nPositon: ' + position ;   
     debug +='\nlength: ' + originalList.length() ; 
    
    if (originalList.length() < position) {
      for (let i = originalList.length(); i < position; i++){
        alteredList.push(properties.padValue);
      }
    }

 debug += "\n" + typeof alteredList ;
 debug += "\n" + JSON.stringify(alteredList) ;
    
 alteredList.splice(position-1, 1, properties.value);   
    
 return {'alteredList': alteredList, 'debug': debug}
    
}