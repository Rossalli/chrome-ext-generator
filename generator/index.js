function generateCPF(mask) {
    var cpf;
    if(!!mask){
        cpf = utils.gerarCPF(mask);
    }else{
        cpf = utils.gerarCPF();
    }

    updateField(cpf);
}

function generateCPFWithMask(){
    generateCPF(true);
}

function generateCPFWithoutMask(){
    generateCPF(null);
}

var generate = chrome.contextMenus.create({
    "title": "Gerador",
    "contexts": ["editable"]
});

var cpfWithoutMas = chrome.contextMenus.create({
    "title": "Gerar CPF s/ máscara",
    "parentId": generate,
    "contexts": ["editable"],
    "onclick": generateCPFWithoutMask
});

var cpfWithMask = chrome.contextMenus.create({
    "title": "Gerar CPF c/ máscara",
    "parentId": generate,
    "contexts": ["editable"],
    "onclick": generateCPFWithMask
});

var cnpj = chrome.contextMenus.create({
    "title": "Generate CNPJ",
    "parentId": generate,
    "contexts": ["editable"],
    "onclick": generateCPF
});


function updateField(value) {
    console.log('click');
    chrome.tabs.executeScript(null,
        {
            code: "document.activeElement.value = " + value
        }
    );
}
