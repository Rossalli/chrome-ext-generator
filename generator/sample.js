function generateCPF(info, tab) {

    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

}

var cpf = chrome.contextMenus.create({"title": "Generate CPF", "contexts":["editable"],
    "onclick": generateCPF});
