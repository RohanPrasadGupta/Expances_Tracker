const addBtn = document.querySelector('.addBtn');
const ThirdDiv = document.querySelector('.ThirdDiv');
const amount = document.querySelector('.amount');
const desc = document.querySelector('.desc');
const listUl =  document.querySelector('.listUl');
const BalanceData = document.querySelector('.SecondDivh2');
const ExpanseAmout =  document.querySelector('.ExpanseAmout');
const IncomeAmount = document.querySelector('.IncomeAmount');


addBtn.addEventListener('click',()=>{
    
    if (addBtn.innerHTML ==='Add'){
        ThirdDiv.style.transition= 'ease';
        ThirdDiv.style.visibility= 'visible';
        ThirdDiv.style.height = '200px'
        addBtn.innerHTML='Cancel'
    }
    else{
        ThirdDiv.style.visibility= 'hidden';
        ThirdDiv.style.height = '0px'
        addBtn.innerHTML='Add'

    }
})

let Balance = 0
let ExpanceAmt = 0
let IncomeAmt = 0

function onAddData(){
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    if(option1.checked){
        CurAmout = amount.value
        CurDesc =  desc.value

        let li = document.createElement('li')
        li.innerHTML = `${CurDesc} : ${CurAmout}`
        li.style.borderColor='red'
        listUl.appendChild(li)

        Balance = Number(Balance) - Number(CurAmout)
        BalanceData.innerHTML = `Balance: $ ${Balance}`

        ExpanceAmt = Number(ExpanceAmt) + Number(CurAmout)
        ExpanseAmout.innerHTML = `$${ExpanceAmt}`

        amount.value=''
        desc.value = ''
        option1.checked = false
        
        
        
    }
    else if(option2.checked){
        CurAmout = amount.value
        CurDesc =  desc.value
        
        let li = document.createElement('li')
        li.innerHTML = `${CurDesc} : ${CurAmout}`
        li.style.borderBlockColor='green'
        listUl.appendChild(li)
        
        Balance = Number(Balance) + Number(CurAmout)
        BalanceData.innerHTML = `Balance: $ ${Balance}`
        
        IncomeAmt = Number(IncomeAmt) + Number(CurAmout)
        IncomeAmount.innerHTML = `$${IncomeAmt}`
        amount.value=''
        desc.value = ''
        option2.checked = false
        

        
    }
    else{
        alert('Pick any Catagory to add')
    }
}



