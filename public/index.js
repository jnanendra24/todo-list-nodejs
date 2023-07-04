const taskTable = document.querySelector('[table-body]')
        taskTable.addEventListener('click',e=>{
            if (e.target.tagName === 'BUTTON' && e.target.parentNode.cellIndex === 3){
                const endpoint = `/delete/${e.target.dataset.doc}`
                fetch(endpoint,{
                    method:'delete'
                }).then(result => result.json()).then(data => {
                    window.location.href = data.redirect
                }).catch((err)=>{
                    console.log(err)
                })
            }
        })