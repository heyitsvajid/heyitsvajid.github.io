function onReadyGeneral() {
    if(localStorage.getItem("visitedHeyitsvajidOn")){
        let previous = new Date(localStorage.getItem('visitedHeyitsvajidOn'))
        let current = new Date()
        let difference = current - previous
        if(difference < 3600000){
            return;
        }
    }
    let denizen = new Denizen();
    let data = denizen.getData();
    var template_params = {
        "visited": localStorage.getItem('visitedHeyitsvajid'),
        "visitedOn" : new Date(localStorage.getItem('visitedHeyitsvajidOn')).toLocaleString(),
        "message": JSON.stringify(data, null, 2)
    }
    console.log(template_params)
    let service_id = "default_service";
    let template_id = "template_9rHUIb54";
    
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if(!(vars['email'] == "no")){
    emailjs.send(service_id, template_id, template_params);
    } 
    localStorage.setItem('visitedHeyitsvajid', "true");
    localStorage.setItem('visitedHeyitsvajidOn', new Date());
}
