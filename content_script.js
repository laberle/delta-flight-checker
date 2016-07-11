function fillForm() {
    var fromAirport = document.getElementsByName("fromAirport")[0];
    var toAirport = document.getElementsByName("toAirport")[0];
    var leaveDate = document.getElementsByName("leaveDate")[0];
    var returnDate = document.getElementsByName("returnDate")[0];
    fromAirport.value = 'DEN';
    toAirport.value = 'MCO';
    leaveDate.value = '07/28/2016';
    returnDate.value = '07/30/2016';
    var searchButton = findLink('Search');
    searchButton.click();
}



function findButton(text) {
    var buttonTags = document.getElementsByTagName("button");

    for (var i = 0; i < buttonTags.length; i++) {
      if (buttonTags[i].textContent == text) {
        return buttonTags[i];
      }
    }
}

function findLink(searchText) {
	var aTags = document.getElementsByTagName("a");

	for (var i = 0; i < aTags.length; i++) {
	  if (aTags[i].textContent == searchText) {
	    return aTags[i];
	  }
	}
}


function findImg(srcText) {
    var imgs = document.getElementsByTagName("img");
    console.log(imgs);
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].src == srcText) {
            return imgs[i];
        }
    }
}

function clickThroughWarningMessage() {
    setTimeout(function() {
        var continueButton = findLink('Continue Listing');
        if (continueButton) {
            var warningMessage = document.getElementsByClassName("popupTextContainer")[0].textContent.trim();
            chrome.runtime.sendMessage({
                action: "warningMessage",
                message: warningMessage
            });
            continueButton.click();
        }
    }, 1500);
}

function clickOnStandbyListIcon() {
    setTimeout(function() {
        console.log('clickOnStandbyListIcon');
        var standbyList = findImg('images/,DanaInfo=travel.delta.com,SSL+icon_list.gif');
        console.log('clickOnStandbyListIcon');
        standbyList.click();
        console.log('clicked');

        // <img src="images/,DanaInfo=travel.delta.com,SSL+icon_list.gif" border="0" alt="show flight load information" data-pin-nopin="true">
        // var continueButton = findLink('Continue Listing');
        // if (continueButton) {
        //     var warningMessage = document.getElementsByClassName("popupTextContainer")[0].textContent.trim();
        //     chrome.runtime.sendMessage({
        //         action: "warningMessage",
        //         message: warningMessage
        //     });
        //     continueButton.click();
        // }
    }, 5000);
}



function clickTravelNetButton() {
    var travelNetButton = findButton("TravelNet");
    travelNetButton.click();
    // <button class="header-extlink" type="button" alt="TravelNet" title="TravelNet" 
    // data-target="https://apps.delta.com/,DanaInfo=travel.delta.com,SSL">
    // <span class="fa fa-plane"></span><span class="buttonText">TravelNet</span></button>
}

//clickTravelNetButton();
fillForm();
clickThroughWarningMessage();
clickOnStandbyListIcon();
// window.onready = function() {
//     console.log('onready')
// }

var checkExist = setInterval(function() {
   if (document.querySelectorAll('.resultsTitle').length) {
      console.log("Exists!");
      clearInterval(checkExist);
   }
}, 100); // check every 100ms


// window.onload = function () {
//     console.log('loaded');
// }
// }