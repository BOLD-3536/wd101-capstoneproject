// const date = new Date();
// const datevalidate =(gotusersdateate) => {
//     let validatemonth;
//     let validatedate;
//     const Userdate = gotusersdateate.split("-").map((date1)=> Number(date1))
//     const validateyear =(Userdate[0]>=(date.getFullYear()-55)&& Userdate[0] <=(date.getFullYear()-18))
//     if(Userdate[0]=== date.getFullYear()-55){
//         validatemonth=Userdate[1]>=(date.getMonth()+1)
//         validatedate=Userdate[2]>=(date.getDate())
//     } else if (Userdate[0]=== date.getFullYear()-18){
//         validatemonth=Userdate[1]<=(date.getMonth()+1)
//         validatedate=Userdate[2]<=(date.getDate())
//     } else if (validateyear){
//         validatedate=true
//         validatemonth=true
//     }else {
//         validatedate=false
//         validatemonth=false
//     }
//     return validateyear&& validatemonth &&validatedate
// }
// const saveuserform =(event)=>{
//     event.preventDefault();
//     const name=document.getElementById("name").value;
//     const email=document.getElementById("email").value;
//     const password=document.getElementById("password").value;
//     const dob=document.getElementById("dob").value;
//     const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;

//     const entry ={
//         name,
//         email,
//         password,
//         dob,
//         acceptedTermsAndConditions
//     };
//     userentries.push(entry);

//     localStorage.setItem("userentries",JSON.stringify(userentries));
// }
// const getset=() => {
//     userentries = JSON.parse(localStorage.getItem("userentries"))
//     if 
// }
// let form1=document.getElementById("form");
// // let userentries =[];
// const retentries =()=> {
//     let entries =localStorage.getItem("userentries");
//     if (entries){
//         entries=JSON.parse(entries);
//     }else{
//         entries=[];
//     }
//     return entries;


// }

// let userentries = retentries();
// const disent =()=>{
//     const entries = retentries();
// const tableEntries = entries.map((entry)=>{
//         const nc=<td>${entry.name}</td>;
//         const ec=<td>${entry.email}</td>
//         const pc=<td>${entry.password}</td>
//         const dc=<td>${entry.dob}</td>
//         const ac=<td>${entry.acceptedTermsAndConditions}</td>
//     const row = <tr>${nc} ${ec} ${pc} ${dc} ${ac} </tr>;
//     return row;
//     }).join("\n")
//     const table = <table><tr>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Password</th>
//         <th>dob</th>
//         <th>accepted terms?</th>
//         </tr></table>;
// let details =document.getElementById("user-entries");
// details.innerHTML=table;

// }

//     disent();



// form1.addEventListener("submit",saveuserform)
// disent();
const constantvalidator = (element) => {
    return element.validity.valid
}

const date = new Date();
let afterentries = []
const datedigit = (num) => {
    if (num < 10) {
        return "0" + num
    } else {
        return num
    }
}

const datevalidator = (gotusersdate) => {

    const usersdate = gotusersdate.split("-").map((date12) => Number(date12))
    const validateyear = (usersdate[0] >= (date.getFullYear() - 55) && usersdate[0] <= (date.getFullYear() - 18))

    let validatemonth;
    let validatedate;

    if (usersdate[0] === date.getFullYear() - 55) {
        validatemonth = usersdate[1] >= (date.getMonth() + 1)
        validatedate = usersdate[2] >= (date.getDate())
    } else if (usersdate[0] === date.getFullYear() - 18) {
        validatemonth = usersdate[1] <= (date.getMonth() + 1)
        validatedate = usersdate[2] <= (date.getDate())
    } else if (validateyear) {
        validatemonth = true
        validatedate = true
    } else {
        validatemonth = false
        validatedate = false
    }

    return validateyear && validatemonth && validatedate
}


const na1 = document.getElementById("name");
const em1 = document.getElementById("email");
const pa1 = document.getElementById("password");
const da1 = document.getElementById("dob");
const te1 = document.getElementById("acceptTerms");
const su1 = document.getElementById("submit");
const hi1 = document.getElementById("history");
const setstate = (name, email, password, dob, terms) => {
    const userData = {
        name,
        email,
        password,
        dob,
        terms
    }
    afterentries.push(userData)
    localStorage.setItem('userData', JSON.stringify(afterentries))
}

const displayentries = () => {
    afterentries = JSON.parse(localStorage.getItem("userData"))
    if (afterentries === null) {
        afterentries = []
    } else {
        const view = afterentries.map((entry) => {
            let row = ""
            const afterknowing = Object.keys(entry)

            for (let i = 0; i < afterknowing.length; i++) {
                row += `<td>${entry[afterknowing[i]]}</td>`
            }

            return `<tr>${row}</tr>`
        })
        hi1.innerHTML += view.join("\n")
    }
}


su1.addEventListener("click", () => {
    const usersdatea = da1.value

    if (!datevalidator(usersdatea)) {
        da1.setCustomValidity(`Date must be between ${date.getFullYear() - 55}-${datedigit(date.getMonth() + 1)}-${datedigit(date.getDate())} and ${date.getFullYear() - 18}-${datedigit(date.getMonth() + 1)}-${datedigit(date.getDate())}`)
    } else {
        da1.setCustomValidity("")
    }

    const allValid = constantvalidator(na1) && constantvalidator(em1) && constantvalidator(pa1) && constantvalidator(da1)

    if (allValid) {
        setstate(na1.value, em1.value, pa1.value, da1.value, te1.checked)
    }
})

displayentries()




