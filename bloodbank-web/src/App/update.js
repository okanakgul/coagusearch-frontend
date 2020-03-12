import React, { Component } from 'react'

var needUpdate = false;
setInterval(function(){
    if(needUpdate == true){
        window.location.reload();
        needUpdate = false;     
     }
}, 1000);


class Update extends Component {
    
}

export default Update;