'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;





startBtn.addEventListener('click', function() {

  time = prompt ("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt ("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
      money = +prompt ("Ваш бюджет на месяц?", ""); 
  }
  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = money;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date (Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date (Date.parse(time)).getDate();
  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;

});

expensesBtn.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
        sum += +b;
    } else {
        console.log ("bad result");
        i--;
    }
    expensesValue.textContent = sum;

}
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i <= optionalExpensesItem.length; i++) {
    let questionOptExpenses = optionalExpensesItem[i].value ;
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
}
  });

countBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
  dayBudgetValue.textContent = appData.moneyPerDay;
  if (appData.moneyPerDay < 100) {
    levelValue.textContent ="Это минимальный уровень достатка!";
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    levelValue.textContent ="Это средний уровень достатка!";
} else if (appData.moneyPerDay > 2000) {
    levelValue.textContent ="Это высокий уровень достатка!";
} else {
    levelValue.textContent ="Ошибочка...!";
}
  } else {
    dayBudgetValue.textContent ='Ошибочка...! Введите бюджет.';
  }

});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
      appData.income = items.split(", ");
      incomeValue.textContent = appData.income;
  });

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  }
});
percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  }
});


    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function () {
        
    },
    detectDayBudget: function () {
        
    },
    detectLevel: function () {
       
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
       
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




















/* let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a'); */

/* btn[0].onclick = function() {
  alert('Вы нажали первую кнопку');
} */

/* btn[0].addEventListener('click', function() {
  alert('Вы нажали первую кнопку');
});

btn[0].addEventListener('click', function() {
  alert('Вы снова нажали первую кнопку');
}); */

/* btn[0].addEventListener('mouseenter', function() {
  alert('You pointed on the mouse!');
}) */

/* btn[0].addEventListener('click', function(event) {
  console.log(event);
  let target = event.target;
  target.style.display = 'none';
  console.log('Произошло событие: ' + event.type + ' на элементе: ' + event.target);
});

wrap.addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе: ' + event.target);

});

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Произошло событие: ' + event.type + ' на элементе: ' + event.target);

});

btn.forEach(function(item) {
  item.addEventListener('mouseleave', function() {
    console.log('Вышли!');
  });
}) */