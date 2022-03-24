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
    let dataString = JSON.stringify(data)
    if(dataString.includes("bot.html")){
        return false;
    }
    var template_params = {
        "visited": localStorage.getItem('visitedHeyitsvajid'),
        "visitedOn" : new Date(localStorage.getItem('visitedHeyitsvajidOn')).toLocaleString(),
        "browser-version": data.browser.version,
        "platform": data.platform.operatingSystem,
        "screen": data.platform.screen.height + " x " + data.platform.screen.width,
        "url": data.session.url,
        "referrer": data.session.history.referrer
    }
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


function onVisitContactPage() {
    if(localStorage.getItem("visitedHeyitsvajidContactOn")){
        let previous = new Date(localStorage.getItem('visitedHeyitsvajidContactOn'))
        let current = new Date()
        let difference = current - previous
        if(difference < 3600000){
            return;
        }
    }
    let denizen = new Denizen();
    let data = denizen.getData();
    let dataString = JSON.stringify(data)
    if(dataString.includes("bot.html")){
        return false;
    }
    var template_params = {
        "visited": localStorage.getItem('visitedHeyitsvajidContact'),
        "visitedOn" : new Date(localStorage.getItem('visitedHeyitsvajidContactOn')).toLocaleString(),
        "browser-version": data.browser.version,
        "platform": data.platform.operatingSystem,
        "screen": data.platform.screen.height + " x " + data.platform.screen.width,
        "url": data.session.url,
        "referrer": data.session.history.referrer
    }
    let service_id = "default_service";
    let template_id = "template_9rHUIb54";
    
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if(!(vars['email'] == "no")){
    emailjs.send(service_id, template_id, template_params);
    } 
    localStorage.setItem('visitedHeyitsvajidContact', "true");
    localStorage.setItem('visitedHeyitsvajidContactOn', new Date());
}

function openResume(){
    if(localStorage.getItem("downloadedHeyitsvajidResumeOn")){
        let previous = new Date(localStorage.getItem('downloadedHeyitsvajidResumeOn'))
        let current = new Date()
        let difference = current - previous
        if(difference < 3600000){
            window.open('./Vajid_Kagdi_Resume.pdf', '_blank');
            return;
        }
    }
    let denizen = new Denizen();
    let data = denizen.getData();
    var template_params = {
        "downloaded": localStorage.getItem('downloadedHeyitsvajid'),
        "downloadedOn" : new Date(localStorage.getItem('downloadedHeyitsvajidResumeOn')).toLocaleString(),
        "message": JSON.stringify(data, null, 2)
    }
    let service_id = "default_service";
    let template_id = "resume_download";

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if(!(vars['email'] == "no")){
        emailjs.send(service_id, template_id, template_params);
    }
    localStorage.setItem('downloadedHeyitsvajid', "true");
    localStorage.setItem('downloadedHeyitsvajidResumeOn', new Date());
    window.open('./Vajid_Kagdi_Resume.pdf', '_blank');
}
