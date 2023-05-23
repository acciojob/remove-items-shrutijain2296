//your JS code here. If required.
function deleteElement(){
	let selectElement = document.getElementsByTagName("select")
	let selectedElement = selectElement.value;
	let childrenList = selectElement.children;

	for(let i = 0; i < childrenList.length; i++){
		if(selectedElement === childrenList[i].value){
			childrenList[i].remove();
		}
	}
}