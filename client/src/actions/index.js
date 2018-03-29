import axios from 'axios';

export function runComponent(req,res,next){
        fetch('http://localhost:8080/api/v1/startComponent', {
                 method: 'POST',
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                body: JSON.stringify({
                    item:req
                })
                }).then(response => {

                  return(alert("Component started successfully"));                   
                })
                .catch(Error => console.log("Error: " + Error))

    }


    export function getComponents(){

            fetch('http://localhost:8080/api/v1/getComponents', {
                     method: 'POST',
                         headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*"
                        }
                    }).then(response => {
                        
                      return(response);                   
                    })
                    .catch(Error => console.log("Error: " + Error))
    
        }


    