let monsterArray = []
fetch("http://localhost3000/monsters")
.then (response => response.text())
.then (data => console.log(data))
