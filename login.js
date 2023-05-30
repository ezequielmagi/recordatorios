// const loginArticle = document.getElementById('loginArticle')
// 
// 
// const main = document.getElementById('main')

// //chequea login de usuario. 0 es no logueado, 1 es logueado
// const loginFlag = 0

// const checkUser = ( dni ) => {

//     userDni = 11111111

//     if( dni === userDni ){
//       return  loginFlag = 1
//     }else{
//         alert('no se reconoce el usuario')
//     }
// }

// const login = () => {
//     const dni = document.getElementById('userDni').value

//     console.log(dni)

//     checkUser(dni)
    
//     if( loginFlag === 1 ){
//         main.classList.add('hide')
//         counter.classList.remove('hide')
//     }

//     console.log(dni)

//     dni.value = ""

//     resetLogin()

// }

// const resetLogin = () => {
//     const loginForm = document.getElementById('loginForm')
//     loginForm.reset()
// } 





// const faqB = document.getElementById('faqButton')
// faqB.addEventListener( 'click', ()=>{
//    closeMenu()
//    loginArticle.classList.add('hide')
//    faqSection.classList.remove('hide')
//    main.classList.add('hide')
   
// })
// const loginB = document.getElementById('loginButton')
// loginB.addEventListener( 'click', ()=>{
//     closeMenu()
//     faqSection.classList.add('hide')
//     loginArticle.classList.remove('hide')
// })
// const materialB = document.getElementById('materialButton')
// materialB.addEventListener( 'click', ()=>{
//    closeMenu()
// })
// const contactB = document.getElementById('contactButton')
// contactB.addEventListener( 'click', ()=>{
//    closeMenu()
// })

const users = [
    {
        name: 'Ruperto Pesto',
        dni: '11111111',
        curso: 'Administracion de Pymes',
        dia: 'Lunes',
        horario: '14:00 a 15:30',
        fechaInicio: 'lunes 5 de Junio de 2023',
        planDePago: 'Financiado',
        cuota: '19100'
    },
    {
        name: 'Pedro Porro',
        dni: '22222222',
        curso: 'Administracion de Pymes',
        dia: 'Martes',
        horario: '18:00 a 19:30',
        fechaInicio: 'Martes 6 de Junio de 2023',
        planDePago: 'Financiado',
        cuota: '19100'
    },
    {
        name: 'Kike Lafont',
        dni: '33333333',
        curso: 'Administracion de Pymes',
        dia: 'Miercoles',
        horario: '18:00 a 19:30',
        fechaInicio: 'Miercoles 7 de Junio de 2023',
        planDePago: 'Financiado',
        cuota: '19100'
    },
    {
        name: 'Monica Galindo',
        dni: '44444444',
        curso: 'Administracion de Pymes',
        dia: 'Jueves',
        horario: '18:00 a 19:30',
        fechaInicio: 'Jueves 8 de Junio de 2023',
        planDePago: 'Financiado',
        cuota: '19100'
    },
    {
        name: 'Sandra Malanca',
        dni: '55555555',
        curso: 'Administracion de Pymes',
        dia: 'Viernes',
        horario: '18:00 a 19:30',
        fechaInicio: 'Viernes 9 de Junio de 2023',
        planDePago: 'Financiado',
        cuota: '19100'
    }
]

// DOM ELEMENTS

const main = document.getElementById('main')
const modalErrorX = document.getElementById('modal-error-x')
const modalErrorModal = document.getElementById('modal-error')
const counter = document.getElementById('counter')
const faqSection = document.getElementById('faqSection')
const amount = document.getElementById('amount')
const simplyAmount = document.getElementsByClassName('simply-amount')[0]

const dataName = document.getElementById('dataName')
const dataCourse = document.getElementById('dataCourse')
const dataDay = document.getElementById('dataDay')
const dataHour= document.getElementById('dataHour')
const dataDate = document.getElementById('dataDate')
const dataPayment = document.getElementById('dataPayment')
const dataValue = document.getElementById('dataValue')




//

console.log(simplyAmount.textContent)

const closeModalError = () => {
    modalErrorModal.classList.remove('modal-error--active')
}

modalErrorX.addEventListener('click', ()=>{
    closeModalError()
    main.classList.remove('hide')
})

const showModalError = ()=>{
    modalErrorModal.classList.add('modal-error--active')
    main.classList.add('hide')
}

var usuarioActiv

const login = () => {
    
    const dni = document.getElementById('userDni').value
    console.log(dni)
    
    // chequeo de dni

    const usuarioEncontrado = users.find( user => {
        console.log(user.name)
        return user.dni === dni
    } )

    if(usuarioEncontrado){
        alert('bienvenido ' + usuarioEncontrado.name)

        
        dataName.textContent = usuarioEncontrado.name
        console.log(usuarioEncontrado.name)
        dataCourse.textContent = usuarioEncontrado.curso
        dataDay.textContent = usuarioEncontrado.dia
        dataHour.textContent= usuarioEncontrado.horario
        dataDate.textContent = usuarioEncontrado.fechaInicio
        dataPayment.textContent = usuarioEncontrado.planDePago
        dataValue.textContent = usuarioEncontrado.cuota

        main.classList.add('hide')
        counter.classList.remove('hide')
        faqSection.classList.remove('hide')
        fechaDeInicio.textContent = usuarioEncontrado.fechaInicio
        console.log(usuarioEncontrado.dia)
        amount.textContent = parseInt(simplyAmount.textContent) + 1
        if( usuarioEncontrado.dia === 'Martes' ){
            console.log('entrar entra')
            simplyAmount.textContent = parseInt(simplyAmount.textContent)+1
            amount.textContent = parseInt(simplyAmount.textContent)+1
            console.log(amount.textContent)
        }
        if( usuarioEncontrado.dia === 'Miercoles' ){
            simplyAmount.textContent = parseInt(simplyAmount.textContent)+1
            amount.textContent = parseInt(simplyAmount.textContent)+2
        }
        if( usuarioEncontrado.dia === 'Jueves' ){
            simplyAmount.textContent = parseInt(simplyAmount.textContent)+1
            amount.textContent = parseInt(simplyAmount.textContent)+3
        }
        if( usuarioEncontrado.dia === 'Viernes' ){
            simplyAmount.textContent = parseInt(simplyAmount.textContent)+1
            amount.textContent = parseInt(simplyAmount.textContent)+4
        }


    }else{
        showModalError()
    }

}


const burgerButton = document.getElementsByClassName('nav-hamburguer_button--closed')[0]

const modalMenu = document.getElementById('modal-menu')

console.log(modalMenu)

burgerButton.addEventListener('click', ()=>{
     closeMenu()
})


 const closeMenu = () => {
     modalMenu.classList.toggle('modal-menu--active')
     burgerButton.classList.toggle('nav-hamburguer_button--open')
 }

 const fechaDeInicio = document.getElementById('fechaDeInicio')


 
