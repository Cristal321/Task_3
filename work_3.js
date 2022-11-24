let Create= document.getElementById('create');
let Add = document.getElementById('add');
let Delete = document.getElementById('delete');
let Entering = document.getElementById('entering_value');
let Table_Content = null;
let Table_Body = null;
let Count_of_Columns = 2;
let id = 0;


Create.addEventListener('click', Create_Table);
Add.addEventListener('click', New_Line);
Delete.addEventListener('click',Delete_Line)



function Create_Table() {
	if(Table_Content == null) {
		Table_Content = document.createElement('table');
		Table_Content.classList.add('table_content');

		let tableHead = document.createElement('thead');
		let rowHeads = document.createElement('tr');

		let headId = document.createElement('td');
		headId.textContent = 'Номер строки';
		let headContent = document.createElement('td');
		headContent.textContent = 'Ваша информация';

		rowHeads.append(headId);
		rowHeads.append(headContent);
		tableHead.append(rowHeads);

		Table_Body = document.createElement('tbody');

		Table_Content.append(tableHead);
		Table_Content.append(Table_Body);

		let mainContent = document.getElementById('Tabel_content');
		mainContent.append(Table_Content);

		enableEntering();
	}
	else {
		alert("Таблица уже на месте...")
	}
}

function New_Line(){
	if(Table_Body != null) {
		let row = Create_Line(id++, Count_of_Columns, ["информация" + id]);
		Put_Line_In(row,Table_Body);
	}
}

function Create_Line(id, Count_of_Columns, arr){
	let tr = document.createElement('tr');
	tr.id = id;

	let td = document.createElement('td');
	td.classList.add("td");
	td.classList.add("id");
	for(let i = 0; i < Count_of_Columns; i++){
		let td = document.createElement('td');
		td.classList.add("td");
		tr.append(td);
	}
	containRow(tr,Count_of_Columns,arr);
	return tr;
}

function Delete_Line() {
	let children = Table_Body.childNodes;
	const parsed = parseInt(Entering.value,10);
	if (!isNaN(parsed)) {
		if(parsed < children.length && parsed >= 0) {
			children[parsed].remove();
			Entering.value = '';
		}
	}
}


function enableEntering(){
	Add.removeAttribute("disabled");
	Delete.removeAttribute("disabled");
	Entering.removeAttribute("disabled")
}



function containRow(tr,Count_of_Columns,arr){
	let arrayTd = tr.getElementsByClassName('td');
	if(arrayTd.length === Count_of_Columns) {
		for (let i = 0, k = 0; i < Count_of_Columns; i++) {
			if(i !== 0) {
				arrayTd[i].textContent = arr[k++];
			}
			else{
				arrayTd[i].textContent = tr.id;
			}
		}
		return true;
	}
	return false;
}

function Put_Line_In(row, container){
	container.append(row);
}