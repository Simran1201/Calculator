let a = document.getElementById("num1");
        let b = document.getElementById("num2");
        let ans = document.getElementById("ans");
        function add(){
            ans.innerHTML = a.value + b.value;
        }
        function sub(){
            ans.innerHTML = a.value - b.value;
        }
        function mul(){
            ans.innerHTML = a.value * b.value;
        }
        function div(){
            ans.innerHTML = a.value / b.value;
        }