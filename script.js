"use strict";
const receiverName = document.querySelector("#receiver");
const senderName = document.querySelector("#sender");
const receiver = new URLSearchParams(location.search).get("receiver") || '';
const sender = new URLSearchParams(location.search).get("sender") || 'Tarapada';
if (receiverName) {
    receiverName.innerText = receiver;
}
if (senderName) {
    senderName.innerText = sender;
}
