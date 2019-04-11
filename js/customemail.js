function onReadyGeneral() {
    if(localStorage.getItem("visitedOn")){
        let previous = new Date(localStorage.getItem('visitedOn'))
        let current = new Date()
        let difference = current - previous
        if(difference < 3600000){
            return;
        }
    }
    let denizen = new Denizen();
    let data = denizen.getData();
    var template_params = {
        "visited":localStorage.getItem('visited'),
        "visitedOn" : new Date(localStorage.getItem('visitedOn')),
        "message": JSON.stringify(data)
    }
    console.log(template_params)
    let service_id = "default_service";
    let template_id = "template_9rHUIb54";
    emailjs.send(service_id, template_id, template_params);
    localStorage.setItem('visited', "true");
    localStorage.setItem('visitedOn', new Date());

}
