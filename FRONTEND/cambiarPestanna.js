var idTextArea = "code-1"

var principalEditor = CodeMirror.fromTextArea(document.getElementById(idTextArea), {
    lineNumbers: true
});

$("#agregarPestana").addEventListener("click", function() {
	const pest = document.querySelectorAll('.pestana')
	const td = document.querySelectorAll('.txt')
	var th = document.createElement("th");
	th.setAttribute("class", "pestana");
	th.setAttribute("id", `th-p-${pest.length + 1}`);
	th.setAttribute("onclick", `activarTabB(this, 'p-${pest.length + 1}')`);
	th.innerHTML = "Pest. " + (pest.length + 1)
	console.log(th)
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
	var textarea = document.createElement("textarea");
	textarea.setAttribute("id", `code-${pest.length+1}`)
	textarea.setAttribute("name", `code-${pest.length+1}`)
	div.appendChild(textarea)
	td_d.appendChild(div)
	tr.appendChild(td_d)
	tbody.appendChild(tr)
	console.log(tbody)
	$("#idBloques").appendChild(tbody);
	var editor = CodeMirror.fromTextArea(document.getElementById(`code-${pest.length+1}`), {
		lineNumbers: true				
	});
	activarTabB(th, `p-${pest.length + 1}`)
	idTextArea = `code-${pest.length + 1}`
	console.log("--- ID TEXT AREA ---")
	console.log(idTextArea)
})


// document.getElementById("image1").addEventListener('change', getPrincipalFile);

async function loadFile(file) {
	let text = await file.text();
	console.log(text)
	getPrincipalFile(text)
	document.getElementById('code-1').innerHTML = text;
  }

function getPrincipalFile(event) {
    if (event) {
		console.log("HOLA JAJA")
        placeFileContent(
            principalEditor, // Editor
            event);
    }
}

function placeFileContent(target, file) {
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

function $(selector) {
	return document.querySelector(selector)
}

function activarTabB(este, id){
	console.log(id)
    var tb = document.getElementById(id);
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