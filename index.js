        function add()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //判断输入的两个数字是否为数字,如果为数字，返回结果为false
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)+Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("请输入数字！！！")
            }
        }
        function sub()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //判断输入的两个数字是否为数字,如果为数字，返回结果为false
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)-Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("请输入数字！！！")
            }
        }
        function mul()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //判断输入的两个数字是否为数字,如果为数字，返回结果为false
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)*Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("请输入数字！！！")
            }
        }
        function div()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //判断输入的两个数字是否为数字,如果为数字，返回结果为false
            var isNotNumber = isNaN(num1) || isNaN(num2);
            
            if (!isNotNumber) 
            {
                if (num2 == 0) 
                {
                    // 除数不能为0
                    alert("除数不能为0,请重新输入");
                }
                else
                {
                    num=Number(num1)/Number(num2);
                    document.getElementById("num3").value=num;
                }
            }
            else
            {
                alert("请输入数字！！！")
            }
        
        }