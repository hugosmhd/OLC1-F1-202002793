var idTextArea = "code-1"

var principalEditor = [];
var editorActual;

var consola = CodeMirror.fromTextArea(document.getElementById("consola"), {
	lineNumbers: true
});



activarEditor();
editorActual = principalEditor[0]
function activarEditor() {
	var editor = CodeMirror.fromTextArea(document.getElementById(idTextArea), {
		lineNumbers: true
	});
	principalEditor.push(editor)
}

function downloadFiles(data, file_name, file_type) {
    var content = "What's up , hello world";
// any kind of extension (.txt,.cpp,.cs,.bat)
var filename = "hello.txt";

var blob = new Blob([content], {
 type: "text/plain;charset=utf-8"
});

saveAs(blob, filename);
}

$("#agregarPestana").addEventListener("click", function() {
	const pest = document.querySelectorAll('.pestana')
	const td = document.querySelectorAll('.txt')
	var th = document.createElement("th");
	th.setAttribute("class", "pestana");
	th.setAttribute("id", `th-p-${pest.length + 1}`);
	th.setAttribute("onclick", `activarTabB(this, 'p-${pest.length + 1}')`);
	th.innerHTML = "Pest. " + (pest.length + 1)
	td.forEach(element => {
		element.setAttribute("colspan", pest.length+1)
	});
	$("#idPestanas").appendChild(th);

	var tbody = document.createElement("tbody");
	tbody.setAttribute("id", `p-${pest.length + 1}`);
	var tr = document.createElement("tr");
	var td_d = document.createElement("td");
	td_d.setAttribute("colspan", pest.length+1)
	td_d.setAttribute("class", "txt")
	var div = document.createElement("div");
	div.setAttribute("class", "tabsBint")
	div.setAttribute("style", "width: 95%; height: 90%; position: absolute")
	var textarea = document.createElement("textarea");
	textarea.setAttribute("id", `code-${pest.length+1}`)
	textarea.setAttribute("name", `code-${pest.length+1}`)
	textarea.setAttribute("style", "width: 50%;")
	div.appendChild(textarea)
	td_d.appendChild(div)
	tr.appendChild(td_d)
	tbody.appendChild(tr)
	$("#idBloques").appendChild(tbody);
	idTextArea = `code-${pest.length + 1}`
	activarEditor()
	activarTabB(th, `p-${pest.length + 1}`)
})


async function loadFile(file) {
	let text = await file.text();
	// console.log(text)
	getPrincipalFile(text)
	document.getElementById('image1').value = "";
	// console.log("Hola cambio el documento");
	// document.getElementById('code-1').innerHTML = text;
  }

  	function ejecutar() {
    	// console.log("hola ir a ejecutar");    
		// console.log(editorActual.getDoc().getValue())
		var data = {entrada:editorActual.getDoc().getValue()}
    	const Http = new XMLHttpRequest();
		Http.open("POST",`http://localhost:4000/api/jison`, true);
		Http.setRequestHeader("Content-Type", "application/json");
		Http.send(JSON.stringify(data));
		Http.onreadystatechange=function(){
			if(this.readyState==4 && this.status==200)
			{
				var data = JSON.parse(Http.responseText);
				// document.getElementById('salida').innerHTML = data.traduccion;
				// console.log(data.arbol)
				// console.log(data.traduccion)
				// console.log(data.errores)
				console.log(data.ts_variables);
				const errores = data.errores
				const ts_variables = data.ts_variables;
				const ts_metodos = data.ts_metodos;
				// console.log("---- METODOS");
				// console.log(ts_metodos);
				// console.log("---- METODOS");
				consola.getDoc().setValue(data.traduccion);
				d3.select("#graph").graphviz({
					useWorker: false
				})
				.renderDot(data.arbol);

				var tablaE = document.getElementById("dataTabla");
				while (tablaE.firstChild) {
					tablaE.removeChild(tablaE.firstChild);
				}
				var contador = 1;
				errores.forEach(error => {
					console.log(error);
					const tr = document.createElement("tr");
					const th = document.createElement("th");
					th.setAttribute("scope", "row");
					th.innerHTML = contador;
					const td_Tipo = document.createElement("td");
					td_Tipo.innerHTML = error.tipo;
					const td_Desc = document.createElement("td");
					td_Desc.innerHTML = error.descripcion;
					const td_Fila = document.createElement("td");
					td_Fila.innerHTML = error.fila;
					const td_Col = document.createElement("td");
					td_Col.innerHTML = error.columna;
					tr.appendChild(th)
					tr.appendChild(td_Tipo)
					tr.appendChild(td_Desc)
					tr.appendChild(td_Fila)
					tr.appendChild(td_Col)
					console.log(tr);
					$("#dataTabla").appendChild(tr);
					contador++;
				});

				var tablaV = document.getElementById("tablaSimbolosV");
				while (tablaV.firstChild) {
					tablaV.removeChild(tablaV.firstChild);
				}

				ts_variables.forEach(simbolo => {
					console.log(simbolo);
					const tr = document.createElement("tr");
					const th = document.createElement("th");
					th.setAttribute("scope", "row");
					th.innerHTML = simbolo.id;
					const td_Tipo = document.createElement("td");
					td_Tipo.innerHTML = simbolo.type;
					const td_Valor = document.createElement("td");
					td_Valor.innerHTML = simbolo.value;
					const td_Editable = document.createElement("td");
					td_Editable.innerHTML = simbolo.editable;					
				
					tr.appendChild(th)
					tr.appendChild(td_Tipo)
					tr.appendChild(td_Valor)
					tr.appendChild(td_Editable)
					console.log(tr);
					$("#tablaSimbolosV").appendChild(tr);
				});

				var tablaM = document.getElementById("tablaSimbolosM");
				while (tablaM.firstChild) {
					tablaM.removeChild(tablaM.firstChild);
				}
				var contadorM = 1;
				ts_metodos.forEach(simbolo => {
					const tr = document.createElement("tr");
					const th = document.createElement("th");
					th.setAttribute("scope", "row");
					th.innerHTML = contador;
					const td_Nombre = document.createElement("td");
					td_Nombre.innerHTML = simbolo;
				
					tr.appendChild(th)
					tr.appendChild(td_Nombre)
					$("#tablaSimbolosM").appendChild(tr);
					contadorM++;
				});

				// for (let entry of Array.from(ts_variables.entries())) {
				// 	console.log(entry[0]);
				// }
			}
		}
	}

function getPrincipalFile(event) {
    if (event) {
		// console.log("HOLA JAJA")
        placeFileContent(
            editorActual, // Editor
            event);
    }
}

function placeFileContent(target, file) {
	console.log(file + " desde place")
	target.getDoc().setValue(file);
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
    })
}

function activarTabB(este, id){
	var tb = document.getElementById(id);
	idTextArea = `code-${id}`
	console.log(idTextArea)
	// activarEditor()

    if ((tb != null) && (tb.tagName.toLowerCase() == "tbody")){
        var tabla = tb.parentNode || tb.parentElement;
        if ((tabla != null) && (tabla.tagName.toLowerCase()== "table")){
            var tbs = tabla.getElementsByTagName("tbody");
            for (i=0; i<tbs.length; i++){
                var pestanya = document.getElementById("th-" + tbs[i].id);
                if (tbs[i].id == id){
                    pestanya.style.color = "blue";
                    pestanya.style.fontWeight = "bold";
                    pestanya.style.backgroundColor = "rgb(235, 235, 225)";
                    tbs[i].style.display = "table-header-group";
					idTextArea = `code-${i}`
					editorActual = principalEditor[i]
					// activarEditor()
                } else {
                    pestanya.style.color = "white";
                    pestanya.style.fontWeight = "normal";
                    pestanya.style.backgroundColor = "gray";
                    tbs[i].style.display = "none";
                }
            }
        }
    }
	
}

function $(selector) {
	return document.querySelector(selector)
}



// const targets = document.querySelectorAll('.pestana')
// const content = document.querySelectorAll('[data-content]')

// targets.forEach(target => {
//     // alert(targets.length)    
// 	target.addEventListener('click', () => {
// 		content.forEach(c => {
// 			c.classList.remove('active')
// 		})
// 		const t = document.querySelector(target.dataset.target)
//         alert(target.dataset)
//         console.log(target.dataset)
// 		t.classList.add('active')
// 	})
// })
// for (i = 0; i < targets.length; i++) {
    // alert(targets.length)   
    // targets[i].dataset.target = "inicio"; 
	// targets[i].addEventListener('click', () => {
	// 	content.forEach(c => {
	// 		c.classList.remove('active')
	// 	})
	// 	const t = document.querySelector(targets[i].dataset.target)
        // alert(target.dataset)
        // console.log(target.dataset)
// 		t.classList.add('active')
// 	})
// }