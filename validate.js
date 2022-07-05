function validarDados(){
    e.preventDefault()
    var error = document.querySelector('#error')
    error.style.color = 'black'
    
    var expresion = /\w+@\w+\.+[a-z]/

    var mensagemErro = []
    
    if (document.form.name.value=="" ) {
        mensagemErro.push("O campo do nome é obrigatório!")  
        document.form.name.focus()
    
    }else if (document.form.email.value=="") {
        mensagemErro.push("O campo do e-mail é obrigatório!")
        document.form.email.focus() 

    }else if (document.form.assunto.value=="" ) {
        mensagemErro.push("O campo assunto é obrigatório")
        document.form.assunto.focus() 

    }else if (document.form.textarea.value=="" || document.form.textarea.value.length < 50 ){
        mensagemErro.push("O campo Mensagem é obrigatório e deve conter pelo menos 50 carateres") 
        document.form.textarea.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        mensagemErro.push("e-mail inválido!")
    }


    error.innerHTML = mensagemErro.join(',')

    
}
    document.querySelector('form').addEventListener('submit',validarDados)