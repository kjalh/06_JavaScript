function sendit(){
    const userid = document.getElementById("userid")


    const expIdText = /^[A-Za-z0-9]{4,20}$/

    if(userid.value ===""){
        alert("아이디를 입력하세요")
        userid.focus()
        return false
    }
}