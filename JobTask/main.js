const staff = [
    {
        "id": 1,
        "name": "Alex Rosetta",
        "email": "alexyrosetta@egmail.com",
        "image": "one.svg",
    },
    {
        "id": 2,
        "name": "Maria July",
        "email": "mariajuly@egmail.com",
        "image": "Oval.svg",
    }
    
 ];


 const navbarButtons = 
 [
{
    "id":1,
    "name": "Staff"
},
{
    "id":2,
    "name": "Services"
},
{
    "id":3,
    "name": "Date Time"
},
{
    "id":4,
    "name": "Confirmation"
}

 ]

 const services = [
    {
        "id": 1,
        "name": "Oral hygiene",
        "image": "tooth.svg",
        "duration": "1 hour",
        "price": 50.00,
    },
    {
        "id": 2,
        "name": "Implants",
        "image": "implant.svg",
        "duration": "1 hour 30 minutes",
        "price": 120.00,
    }
    
 ];



 let pageIndex=1;
 let navbarHtml = `<ul>`;
 for(let element of navbarButtons){
    if(element==navbarButtons[navbarButtons.length-1]){
        navbarHtml+=`<li><span class="${element.id==pageIndex ? "active": ""}">${element.id}</span>${element.name}</li></ul>`
    }
    else{
        navbarHtml+=`<li><span class="${element.id==pageIndex ? "active": ""}">${element.id}</span>${element.name}</li>`
    }
    
 }


 
let navpart = document.getElementById('nav-part')
navpart.innerHTML+=navbarHtml




 let selectedDoctorId='';
 let innerHTML = `<div class="doctors">`;
for(let element of staff){
    if(element==staff[staff.length-1]){
        innerHTML+=`

        <div class="doctor-box ${selectedDoctorId==element.id?"selected":""}" id='${element.id}'>
        <div class="profil-img">
            <img src="assets/images/${element.image}" alt="">
        </div>
        <div class="description">
            <p class="doc-name">${element.name}</p>
            <p class="doc-mail">${element.email}</p>
        </div>
        </div>
        </div>
        

    </div>
        `
    }
    else{
        innerHTML+=`

        <div class="doctor-box" id='${element.id}'>
        <div class="profil-img">
            <img src="assets/images/${element.image}" alt="">
        </div>
        <div class="description">
            <p class="doc-name">${element.name}</p>
            <p class="doc-mail">${element.email}</p>
        </div>
        </div>
       
        `
    }




}

innerHTML+=`<div class="footer-btns">
<div class="prev-btn">
    <button>BACK</button>
</div>
<div class="next-btn">
    <button>next</button>
</div>

</div>`

document.getElementById('home-page-contents').innerHTML=innerHTML;




    
let doctorboxes = document.getElementsByClassName('doctor-box')
for(let doctorbox of doctorboxes){
    doctorbox.addEventListener('click', function(){
        selectedDoctorId=this.id
       let previousSelecteds= document.getElementsByClassName('selected')
       for(let previousSelected of previousSelecteds ){
        previousSelected.classList.remove('selected')
       }
        doctorbox.classList.add('selected')
pageIndex+=1;

let doctorsPages = document.getElementsByClassName('doctors')
for(let element of doctorsPages){
    element.classList.add('display-none')
}
        



let servicesHtml=`<div class="services" id='services'>`
for(let element of services){
    if(element==services[services.length-1]){
       servicesHtml+= ` <div id='${element.id}' class="service-box">
        <div class="profil-img">
            <img src="assets/images/${element.image}" alt="">
        </div>
        <div class="description">
            <p class="doc-name">${element.name}</p>
            <p class="doc-mail">${element.duration}</p>
        </div>
        <div class="price">
            <p>${element.price}$</p>
        </div>
    </div>
    </div>
     <div class="footer-btns">
                            <div class="prev-btn">
                                <button>BACK</button>
                            </div>
                            <div class="next-btn">
                                <button>next</button>
                            </div>

                        </div>
    `
    }
    else{
        servicesHtml+=
        ` <div class="service-box" id='${element.id}'>
        <div class="profil-img">
            <img src="assets/images/${element.image}" alt="">
        </div>
        <div class="description">
            <p class="doc-name">${element.name}</p>
            <p class="doc-mail">${element.duration}</p>
        </div>
        <div class="price">
            <p>${element.price}$</p>
        </div>
    </div>
    `
    }
    
}
document.getElementById('home-page-contents').innerHTML=servicesHtml;

let serviceBoxes=document.getElementsByClassName('service-box')
for(let element of serviceBoxes){
    element.addEventListener('click', function(){
        let previousSelectedService = document.getElementsByClassName('selected-service')
        for(let element of previousSelectedService){
            element.classList.remove('selected-service')
        }
this.classList.add('selected-service')


    })
}



    })
}















 
