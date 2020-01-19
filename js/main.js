let start = document.getElementById("start"),

	budgetValue = document.querySelector(".budget-value"),
	daybudgetValue = document.querySelector(".daybudget-value"),
	levelValue = document.querySelector(".level-value"),
	expensesValue = document.querySelector(".expenses-value"),
	optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
	incomeValue = document.querySelector(".income-value"),
	monthsavingsValue = document.querySelector(".monthsavings-value"),
	yearsavingsValue = document.querySelector(".yearsavings-value"),
	
	expensesItem = document.getElementsByClassName("expenses-item"),
	
	button = document.getElementsByTagName("button"),
	expensesItemBtn = document.querySelector(".expenses-item-btn"),
	optionalexpensesBtn = document.querySelector(".optionalexpenses-btn"),
	countBudgetBtn = document.querySelector(".count-budget-btn"),
	
	optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	
	income = document.querySelector("#income"),
	savings = document.querySelector("#savings"),
	sum = document.querySelector("#sum"),
	percent = document.querySelector("#percent"),
	
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");
	
	
	alert("Чтобы начать нажмите на \"Начать расчет\"");
	
start.addEventListener("click", function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    };
	
	
	expensesItemBtn.disabled = false;
	optionalexpensesBtn.disabled = false;
	countBudgetBtn.disabled = false;
	
	appData.budget = money.toFixed();
	appData.timeData = time;
	budgetValue.textContent = appData.budget;
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
})

expensesItemBtn.addEventListener("click", function() {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if (typeof (a) === "string" && (a) != null && b != null && a != "" && b != "" && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b
		} else {
			i -= 1;
		}
		
	}
	
	appData.expensesItemValueSum = sum;
	expensesValue.textContent = appData.expensesItemValueSum;
})

optionalexpensesBtn.addEventListener("click", function() {
	let sum = 0;
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		let a = optionalexpensesItem[i].value;

		appData.optionalExpenses[i] = +a;
		sum += appData.optionalExpenses[i];
	}
	
	optionalexpensesValue.textContent = sum;
})

countBudgetBtn.addEventListener("click", function() {
	
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +appData.expensesItemValueSum) / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;
		
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень дохода"
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				levelValue.textContent = "Средний уровень дохода"
			} else if (appData.moneyPerDay > 2000) {
				levelValue.textContent = "Высокий уровань дохода"
			} else {
				levelValue.textContent = "Произошла ощибка"
			}
		
	}
})

income.addEventListener("input", function() {
	let items = income.value;
	appData.income = items.split(", ");
	
	incomeValue.textContent = appData.income;
});

// income.addEventListener("change", function() {
	// let items = income.value;
	// appData.income = items.split(", ");
	
	// incomeValue.textContent = appData.income;
// });

savings.addEventListener("click", function() {
	if(appData.savings === false) {
		appData.savings = true
	} else {
		appData.savings = false
	}
})

sum.addEventListener("input", function() {
	if(appData.savings == true) {
		let sumValue = +sum.value,
			percentValue = +percent.value;
			
		appData.monthIncome = sumValue / 100 / 12 * percentValue;
		appData.yearIncome = sumValue / 100 * percentValue;
		
		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
})

percent.addEventListener("input", function() {
	if(appData.savings == true) {
		let sumValue = +sum.value,
			percentValue = +percent.value;
			
		appData.monthIncome = sumValue / 100 / 12 * percentValue;
		appData.yearIncome = sumValue / 100 * percentValue;
		
		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
})

let appData = {
    budget: "",
    timeData: "",
    expenses: {},
    optionalExpenses: {},
    income: "",
    savings: false,
	expensesItemValueSum: 0
}

// class Options {
	// constructor(height, width, bg, fontSize, textAlign) {
		// this.height = height;
		// this.width = width;
		// this.bg = bg;
		// this.fontSize = fontSize;
		// this.textAlign = textAlign;
	// }
	
	// createDiv() {
		// let div = document.createElemet("div");
		// return div.cssText = `height: ${this.height};
		// width: ${this.width};
		// bg: ${this.bg};
		// fontSize: ${this.fontSize};
		// textAlign: ${this.textAlign};
		// `
	// }
// }



	
	
