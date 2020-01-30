let workspaceValue = "";

const buttons = document.querySelectorAll(".calc-btn-common");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    workspaceValue = workspaceValue.concat(button.dataset.set);
    document.querySelector(".calc-workspace").innerHTML = workspaceValue;
  });
});

const operators = document.querySelectorAll(".calc-btn-operator");
operators.forEach(operator => {
  operator.addEventListener("click", () => {
    if (workspaceValue === "" && operator.dataset.set === "-") {
      workspaceValue = workspaceValue.concat(operator.dataset.set);
    } else if (
      workspaceValue != "" &&
      workspaceValue.indexOf(".") === false &&
      operator.dataset.set === "."
    ) {
      workspaceValue = workspaceValue.concat(operator.dataset.set);
    } else if (
      (workspaceValue != "" &&
        workspaceValue[workspaceValue.length - 1] == "*") ||
      workspaceValue[workspaceValue.length - 1] == "/" ||
      workspaceValue[workspaceValue.length - 1] == "%" ||
      workspaceValue[workspaceValue.length - 1] == "+" ||
      workspaceValue[workspaceValue.length - 1] == "undefined" ||
      workspaceValue[workspaceValue.length - 1] == "-" ||
      workspaceValue[workspaceValue.length - 1] == "."
    ) {
    } else if (workspaceValue != "") {
      workspaceValue = workspaceValue.concat(operator.dataset.set);
    }
    document.querySelector(".calc-workspace").innerHTML = workspaceValue;
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  workspaceValue = "";
  document.querySelector(".calc-workspace").innerHTML = workspaceValue;
});
const undo = document.getElementById("undo");
undo.addEventListener("click", () => {
  workspaceValue = workspaceValue.substring(0, workspaceValue.length - 1);
  document.querySelector(".calc-workspace").innerHTML = workspaceValue;
});

const result = document.getElementById("result");
function validate(str) {
  isNaN(str[str.length - 1])
    ? validate((str = str.substring(0, str.length - 1)))
    : (workspaceValue = str);
}
function finalValidate(str) {
  isNaN(str) ? (str = "Произошла ошибка") : str;
  return (workspaceValue = str);
}
result.addEventListener("click", () => {
  validate(workspaceValue);
  workspaceValue = eval(workspaceValue);
  finalValidate(workspaceValue);
  document.querySelector(".calc-workspace").innerHTML = workspaceValue;
  workspaceValue = workspaceValue.toString();
});
