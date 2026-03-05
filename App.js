const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: "https://yourdomain.com/tonconnect-manifest.json",
  buttonRootId: "ton-connect"
});

async function connectWallet() {
  const wallet = await tonConnectUI.connectWallet();
  console.log(wallet);
}

connectWallet();
