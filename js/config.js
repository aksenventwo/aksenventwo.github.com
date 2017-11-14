var config = {
	'python_3': 1,
	'normal_qa': 1,
	'python': 10
}

function set_blog_info() {
    document.getElementById('python_3').innerHTML = config['python_3'];
    document.getElementById('normal_qa').innerHTML = config['normal_qa'];
    document.getElementById('python').innerHTML = config['python'];
}


set_blog_info();