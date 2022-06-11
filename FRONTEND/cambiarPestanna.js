const targets = document.querySelectorAll('.pestana')
const content = document.querySelectorAll('[data-content]')

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
for (i = 0; i < targets.length; i++) {
    // alert(targets.length)   
    targets[i].dataset.target = "inicio"; 
	targets[i].addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(targets[i].dataset.target)
        // alert(target.dataset)
        // console.log(target.dataset)
		t.classList.add('active')
	})
}