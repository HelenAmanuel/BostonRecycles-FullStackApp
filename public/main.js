var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const email = this.parentNode.parentNode.childNodes[5].innerText
        const city = this.parentNode.parentNode.childNodes[7].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].value)
        console.log(this.parentNode.parentNode.childNodes[1].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'email':email,
            'city':city,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          // console.log(data)
          window.location.reload(true)
        })
      });
});


var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText
      const msg = this.parentNode.parentNode.childNodes[3].innerText
      const email = this.parentNode.parentNode.childNodes[5].innerText
      const city = this.parentNode.parentNode.childNodes[7].innerText
      // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
      console.log(this.parentNode.parentNode.childNodes[1].innerText)
      fetch('messages', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg,
          'email': email,
          'city': city
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
});
