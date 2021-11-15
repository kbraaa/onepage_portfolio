$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:4
        },
        1500:{
            items:5
        }
    }
})

const addButton = document.getElementById("submitButton");
const inputComment = document.getElementById("name");
const commitList = document.getElementById("tasklistbox");
let clearButton = document.querySelectorAll(".fa-times");

addButton.addEventListener("click", elementAdd);

function elementAdd() {

    if (inputComment.value == "")      
        alert("Lütfen yorum alanını boş bırakmayınız...");
    else {

        let li = document.createElement("div");
        
        li.classList.add('position-relative' , 'list-group-item')

        li.innerText = inputComment.value
        
        let i = document.createElement("i");
        
        i.classList = "fas fa-times";
        
        li.appendChild(i);

        commitList.appendChild(li);
        
        inputComment.value = "";
        
        clearButton = document.querySelectorAll(".fa-times");

        for (let i = 0; i < clearButton.length; i++) {
            clearButton[i].addEventListener("click", elementClear);
        }
    }
}

function elementClear() {
    let clearSection = confirm("Silmek İstediğinize Emin Misiniz?");
    if (clearSection == true) {

        let silinecek = this.parentElement;
        silinecek.remove();
    }
}

