let data = [];

function lista(){

    document.querySelector('.tabela').innerHTML = '';

data.forEach(task => {

    let li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    <button type="button">Deletar</button>
    `;


    li.querySelector('input').addEventListener("change", e =>{
        if(e.target.checked){
            li.classList.add('complete');
        }else{
            li.classList.remove('complete');
        };
    });

    document.querySelector('.tabela').append(li);
    li.querySelector('button').addEventListener('click', e =>{
        console.log(e.target.parentNode.querySelector('input').id.split('-')[1]);
});

});
}

    
document.querySelector('#new-task').addEventListener('keyup', e =>{
    if(e.key === 'Enter'){
        console.log(e.target.value);
        data.push({
            id: data.length+1,
            title: e.target.value
        });
        e.target.value = "";

    }else{
        console.log('Clique enter para enviar');
    }
    lista();
});


