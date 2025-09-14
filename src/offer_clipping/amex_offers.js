// outdated 
// javascript: (async () => { var offerButtons = Array.from(document.getElementsByClassName("_btn_jsa6y_25 _secondary_jsa6y_110 fluid-sm-down margin-auto-l text-nowrap")).filter(btn => btn.title == "Add to Card"); for (let i = 0; i < offerButtons.length; i++) { console.log("Clicking offer button"); offerButtons[i].click(); await new Promise(r => setTimeout(r, 2000)); } })();
// current
javascript: (async () => { var offerButtons = Array.from(document.querySelectorAll('button[data-testid="merchantOfferListAddButton"]')); for (let i = 0; i < offerButtons.length; i++) { console.log("Clicking offer button " + (i+1) + "/" + offerButtons.length); offerButtons[i].click(); await new Promise(r => setTimeout(r, Math.random() * 811 + 500)); } })();
