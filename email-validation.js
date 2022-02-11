function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
            document.form.mail.focus();
            return true;
        }
        else
        {
            alert("Votre addresse est invalide!");
            document.form.mail.focus();
            return false;
        }
}
