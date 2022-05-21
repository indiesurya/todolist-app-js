
const todo = document.getElementById('todo');
let i = 0;
function add(){
    //ambil nilai dari inputan
    i = i+1;
    let newText = document.getElementById('new-list');

    //lakukan apa yang mau ditampilkan
    let newTodo = "<li><span onclick='toggle(this)'>"+newText.value +"</span><span onclick='remove(this)'> <i class='glyphicon glyphicon-remove'></i> </span></li>";

    //tampilkan yang mau ditampilkan
    todo.insertAdjacentHTML('afterbegin',newTodo);

    //kosongkan inputan setelah selesai
    newText.value = " ";
    todo.classList.add('todo');
}

function toggle(el){
    el.classList.toggle('done');
}
function remove(el){
    el.parentElement.remove();
    i=i-1;
    if(i<=0){
        todo.classList.remove('todo');
    }
}

