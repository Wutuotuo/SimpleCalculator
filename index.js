        function add()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //�ж���������������Ƿ�Ϊ����,���Ϊ���֣����ؽ��Ϊfalse
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)+Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("���������֣�����")
            }
        }
        function sub()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //�ж���������������Ƿ�Ϊ����,���Ϊ���֣����ؽ��Ϊfalse
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)-Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("���������֣�����")
            }
        }
        function mul()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //�ж���������������Ƿ�Ϊ����,���Ϊ���֣����ؽ��Ϊfalse
            var isNotNumber = isNaN(num1) || isNaN(num2);
            if (!isNotNumber) 
            {
                num=Number(num1)*Number(num2);
                document.getElementById("num3").value=num;
            }
            else
            {
                alert("���������֣�����")
            }
        }
        function div()
        {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num;
            //�ж���������������Ƿ�Ϊ����,���Ϊ���֣����ؽ��Ϊfalse
            var isNotNumber = isNaN(num1) || isNaN(num2);
            
            if (!isNotNumber) 
            {
                if (num2 == 0) 
                {
                    // ��������Ϊ0
                    alert("��������Ϊ0,����������");
                }
                else
                {
                    num=Number(num1)/Number(num2);
                    document.getElementById("num3").value=num;
                }
            }
            else
            {
                alert("���������֣�����")
            }
        
        }