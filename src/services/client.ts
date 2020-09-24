export function showClientMessage() {
    const clientInfoShown1P = getClientInfo();
    if(!clientInfoShown1P.value) {
        return true;
    }
    return false;
}

export function setClientInfo() {
    localStorage.setItem("clientInfoShown1P", JSON.stringify({value: true}));
}

export function getClientInfo() {
    const clientInfo = JSON.parse(localStorage.getItem("clientInfoShown1P") || "{}");
    return clientInfo;
}