// IIFE - Para garantir que não haja conflitos com variáveis

;(function() {
    const labelName = document.querySelector('#label-firstname-308b8bba-c5ce-4af8-8f2b-ed5c52ec106e')
    const textLabelName = document.createElement('span')
    textLabelName.innerHTML = `Nome *`
    labelName.appendChild(textLabelName)
})();