function addTodo() {
    var input = document.getElementById("todoInput").value;
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    document.getElementById("todoInput").value = "";

    li.classList.add("liTag");

    ul.appendChild(li);

    var checkBox = document.createElement("input");
     checkBox.type = "checkbox";
    checkBox.classList.add("checkBox")
    li.appendChild(checkBox)
    // 削除ボタンの追加
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    li.appendChild(deleteButton);

    deleteButton.onclick = function() {
        ul.removeChild(li);
    };

    // 編集ボタンの追加
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
    li.appendChild(editButton);

    editButton.onclick = function() {
        var newText = prompt("Edit the todo:", li.firstChild.textContent);
        if (newText !== null && newText !== "") {
            li.firstChild.textContent = newText;
        }
    };

    li.onclick = function() {
        this.classList.toggle("completed");
    };
}
