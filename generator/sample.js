function generateCPF(info, tab) {

    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

}

var generate = chrome.contextMenus.create({"title": "Generate", "contexts":["editable"],
    "onclick": generateCPF});

var cpf = chrome.contextMenus.create({"title": "Generate CPF", "parentId": generate, "contexts":["editable"],
    "onclick": generateCPF});

var cnpj = chrome.contextMenus.create({"title": "Generate CNPJ", "parentId": generate, "contexts":["editable"],
    "onclick": generateCPF});

