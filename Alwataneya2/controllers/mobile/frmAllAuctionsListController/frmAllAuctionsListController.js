define({
selectedFilters: {},
  
 onNavigate: function()
  {
    this.view.preShow = this.onPreshow.bind(this);
    this.view.postShow = this.onPostShow.bind(this);
    this.view.flxUpcomingAuctionsHeading.onClick = this.showUpcomingAuctions.bind(this);
    this.view.flxCurrentAuctionHeading.onClick = this.showCurrentAuctions.bind(this);
    this.view.flxVehicleType.onClick = this.showVehicleTypeFilter.bind(this);
    this.view.flxBodyType.onClick = this.showBodyTypeFilter.bind(this);
    this.view.flxRemoveVehicleTypeFilter.onClick = this.hideVehicleTypeFilter.bind(this);
    this.view.flxRemoveBodyTypeFilter.onClick = this.hideBodyTypeFilter.bind(this);
    this.view.flxCommercialVehicles.onClick = this.onFilterClick.bind(this,this.view.flxCommercialVehicles);
    this.view.flxClassicandCollectorCars.onClick = this.onFilterClick.bind(this,this.view.flxClassicandCollectorCars);
    this.view.flxSalvageVehicles.onClick = this.onFilterClick.bind(this,this.view.flxSalvageVehicles);
    this.view.flxLightVehicles.onClick = this.onFilterClick.bind(this, this.view.flxLightVehicles);
    this.view.flxHeavyVehicles.onClick = this.onFilterClick.bind(this, this.view.flxHeavyVehicles);
    this.view.flxBikes.onClick = this.onFilterClick.bind(this, this.view.flxBikes);
    this.view.segCurrentAuctionList.onRowClick = this.navTofrmDetails.bind(this);

    this.view.flxRemoveCommercialVehicleFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveClassicCarsFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveBikesFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveSalvageFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveHeavyVehiclesFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveLightVehiclesFromFilter.onClick = this.removeFromFilterItems.bind(this);
    
    this.view.flxCommercialVehiclesBodyType.onClick = this.onFilterClick.bind(this);
    this.view.flxClassicCarsBodyType.onClick = this.onFilterClick.bind(this);
    this.view.flxSalvageVehiclesBodyType.onClick = this.onFilterClick.bind(this);
    this.view.flxBikesBodyType.onClick = this.onFilterClick.bind(this);
    this.view.flxHeavyVehiclesBodyType.onClick = this.onFilterClick.bind(this);
    this.view.flxLightVehiclesBodyType.onClick = this.onFilterClick.bind(this);
    
    this.view.flxRemoveCommercialVehicleBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveClassicCarsBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveSalvageBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveBikeBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveHeavyVehiclesBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    this.view.flxRemoveLightVehiclesBTFromFilter.onClick = this.removeFromFilterItems.bind(this);
    
    this.view.flxCloseBidAmountSelection.onClick = this.closeBidAmountContainer.bind(this);
    this.view.flxRemoveBidSuccessPopup.onClick =  function() {
      this.view.flxBidSuccessPopup.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
    this.view.btnCloseBidSuccessPopUp.onClick = function() {
      this.view.flxBidSuccessPopup.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
    
    this.view.btnAutoBidCall.onClick = this.invokeAutoBidFunction.bind(this);
    
    this.view.flxCloseAutoBidAmountContainer.onClick = function()
    {
      this.view.flxAutoBidAmountContainer.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
  },
  
  
  
  onPreshow: function(){
//    this.setDataToSeg();
    
   
    this.toggleFooterIcons();
    this.invokeOnlineAuctionList();
    this.closeBidAmountContainer();
    
   this.view.flxCommercialVehiclesSelected.setVisibility(false);
    this.view.flxClassicCarsSelected.setVisibility(false);
    this.view.flxSalvageSelected.setVisibility(false);
     this.view.flxBikesSelected.setVisibility(false);
    this.view.flxHeavyVehiclesSelected.setVisibility(false);
    this.view.flxLightVehiclesSelected.setVisibility(false);
    
     this.view.flxCommercialVehiclesBodyTypeSelected.setVisibility(false);
    this.view.flxClassicCarsBodyTypeSelected.setVisibility(false);
     this.view.flxSalvageBodyTypeSelected.setVisibility(false);
     this.view.flxBikesBodyTypeSelected.setVisibility(false);
    this.view.flxHeavyVehiclesBodyTypeSelected.setVisibility(false);
     this.view.flxLightVehiclesBodyTypeSelected.setVisibility(false);
  },
  
  onPostShow: function()
  {
    this.view.btn500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"500");
    this.view.btn1000AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1000");
    this.view.btn1500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1500");
    this.view.btnBidNow.onClick = this.invokeFryWfAuctionBidding.bind(this);
    
    this.view.flxCheckBox.onClick = () => {
       this.view.imgCheck.setVisibility(!this.view.imgCheck.isVisible);
    };
    
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(true);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooteractive.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldDisp333333Font200";
    
   this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
    var isLogin = voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
    
   if(isLogin === true &&  isUserCreated === true){
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  },
  
  invokeOnlineAuctionList: function(){
    
     var self = this;

    function invServiceCallBack(status, online_auction_list) {
      var records = online_auction_list.auction_list;
      self.setDataToSegFromService(records);
    }
    if (online_auction_list_inputparam == undefined) {
        var online_auction_list_inputparam = {};
    }
    online_auction_list_inputparam["serviceID"] = "fry_int_auctions$online-auction-list";
    var online_auction_list_httpheaders = {};
    online_auction_list_inputparam["httpheaders"] = online_auction_list_httpheaders;
    var online_auction_list_httpconfigs = {};
    online_auction_list_inputparam["httpconfig"] = online_auction_list_httpconfigs;
    fry_int_auctions$online_auction_list = mfintegrationsecureinvokerasync(online_auction_list_inputparam, "fry_int_auctions", "online-auction-list", invServiceCallBack);
    
    
    
  },
  setDataToSeg: function()
  {   
    this.view.segCurrentAuctionList.widgetDataMap = {
      "imgCarPIcture":"imgCarPIcture",
      "lblCarname":"lblCarname",
      "lblTimerCount":"lblTimerCount",
      "lblLot":"lblLot",
      "lblLotNum":"lblLotNum",
      "lblTotalBids":"lblTotalBids",
      "lblTotalBidsCount":"lblTotalBidsCount",
      "flxLikeHeart":"flxLikeHeart",
      "imgHeart":"imgHeart",
      "lblCurrentBid":"lblCurrentBid",
      "lblPrice":"lblPrice",
      "btnBidNow":"btnBidNow",
      "flxAutoBid":"flxAutoBid",
      "imgAutoBidicon":"imgAutoBidicon",
      "lblAutoBid":"lblAutoBid"
    }
    
    var data = [ 
      {
        "imgCarPIcture" : "carsample1.png",
        "lblCarname" : "Chevrolet Impala 2018",
        "lblTimerCount" : "11D 7H 02M",
        "lblLot": "Lot #",
        "lblLotNum" : "#Lot:69952",
        "lblTotalBids" : "Total Bids",
         "lblTotalBidsCount": "69",
        "flxLikeHeart" : {
          "onClick": this.addToWishList.bind(this)
        },
        "imgHeart" : "dislikeheartcurrentauctions.png",
        "lblCurrentBid" : "CURRENT BID",
        "lblPrice" : "AED 40,000",
        "flxAutoBid": {
          "onClick": this.enableAutoBid.bind(this)
        },
        "imgAutoBidicon" : "autobidnewone.png",
        "lblAutoBid" : "AUTO BID",
        "btnBidNow" : "BID NOW"
        
        
      },
      
      {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Toyota Camry 2020",
    "lblTimerCount": "05D 12H 45M",
    "lblLot": "Lot #",
    "lblLotNum": "#Lot:69952",
    "lblTotalBids": "Total Bids",
    "lblTotalBidsCount": "52",
    "flxLikeHeart": {
      "onClick": this.addToWishList.bind(this)
    },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "AED 35,500",
    "flxAutoBid": {
      "onClick": this.enableAutoBid.bind(this)
    },
    "imgAutoBidicon": "autobidnewone.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow": "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Ford Mustang 2019",
    "lblTimerCount": "03D 08H 30M",
    "lblLot": "Lot #",
    "lblLotNum": "#Lot:69952",
    "lblTotalBids": "Total Bids",
    "lblTotalBidsCount": "78",
    "flxLikeHeart": {
      "onClick": this.addToWishList.bind(this)
    },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "AED 72,000",
    "flxAutoBid": {
      "onClick": this.enableAutoBid.bind(this)
    },
    "imgAutoBidicon": "autobidnewone.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow": "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Nissan Altima 2017",
    "lblTimerCount": "08D 16H 05M",
    "lblLot": "Lot #",
    "lblLotNum": "#Lot:69952",
    "lblTotalBids": "Total Bids",
    "lblTotalBidsCount": "34",
    "flxLikeHeart": {
      "onClick": this.addToWishList.bind(this)
    },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "AED 28,900",
    "flxAutoBid": {
      "onClick": this.enableAutoBid.bind(this)
    },
    "imgAutoBidicon": "autobidnewone.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow": "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "BMW 5 Series 2021",
    "lblTimerCount": "01D 22H 18M",
    "lblLot": "Lot #",
    "lblLotNum": "#Lot:69952",
    "lblTotalBids": "Total Bids",
    "lblTotalBidsCount": "89",
    "flxLikeHeart": {
      "onClick": this.addToWishList.bind(this)
    },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "AED 110,000",
    "flxAutoBid": {
      "onClick": this.enableAutoBid.bind(this)
    },
    "imgAutoBidicon": "autobidnewone.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow": "BID NOW"
  }
    ]
    
    this.view.segCurrentAuctionList.setData(data);
  },
  
  setDataToSegFromService: function(records)
  {
    var self = this;
    this.view.segCurrentAuctionList.widgetDataMap = {
      "lblObjID":"lblObjID",
      "lblAuctionID":"lblAuctionID",
      "imgCarPIcture":"imgCarPIcture",
      "lblCarname":"lblCarname",
      "lblTimerCount":"lblTimerCount",
      "lblLot":"lblLot",
      "lblLotNum":"lblLotNum",
      "lblTotalBids":"lblTotalBids",
      "lblTotalBidsCount":"lblTotalBidsCount",
      "lblLocation":"lblLocation",
      "lblLocationName":"lblLocationName",
      "flxLikeHeart":"flxLikeHeart",
      "imgHeart":"imgHeart",
      "lblCurrentBid":"lblCurrentBid",
      "lblPrice": "lblPrice",
      "btnBidNow":"btnBidNow",
      "flxAutoBid":"flxAutoBid",
      "imgAutoBidicon":"imgAutoBidicon",
      "lblAutoBid":"lblAutoBid"
    }
    
    var data = [];
    for(var i=0; i<records.length; i++){
      
      var item = records[i];
      var carimage = item.thumbnail_url && item.thumbnail_url.trim() !== "" ? item.thumbnail_url : "car3.png";
      var carname = item.sub_category_name;
      var timercount = item.time_remaining;
      var lotnum = item.ID ? item.ID : "N/A";
      var totalbids = item.bids ? item.bids : "N/A";
      var location = item.location ? item.location : "N/A";
      var objid = item.object_id;
      var aucid = item.auction_id;
      var price = Number(item.max_bid_amount);
      
      data.push(
      {
        "imgCarPIcture" : carimage,
        "lblCarname" : carname,
        "lblObjID": objid,
        "lblTimerCount": timercount,
         "lblLot": "Lot #",
         "lblLotNum": lotnum,
         "lblTotalBids": "Total Bids",
         "lblTotalBidsCount": totalbids,
         "lblLocation":"Location",
        "lblLocationName": location,
        "lblAuctionID":aucid,

        "flxLikeHeart": {
          "onClick": this.addToWishList.bind(this)
        },
        "imgHeart": "imgdislikenew.png",
        "lblCurrentBid": "CURRENT BID",
        "lblPrice":  {
          "text": "AED " + price,
          "skin": "sknLblDubaid3243720pxbold"
        },
        "flxAutoBid": {
          "onClick": this.enableAutoBid.bind(this,objid,aucid)
        },
        "imgAutoBidicon": "autobidnewone.png",
        "lblAutoBid": "AUTO BID",
        "btnBidNow": {
          "onClick": this.openBidAmountContainer.bind(this,objid,aucid,price)
        }
      });
    }
    self.view.segCurrentAuctionList.setData(data);
  },
  
  openBidAmountContainer: function(objid,aucid,price){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin)
      {
     var selectedData = this.view.segCurrentAuctionList.selectedRowItems[0];
//     this.currentAmount = price;
    this.objid = objid;
    this.aucid = aucid;
    
    var amountText = selectedData.lblPrice.text;  // "AED 23500.00"
    var amountOnly = amountText.replace("AED", "").trim();
    this.currentAmount = Number(amountOnly);
    this.view.flxBidAmountSelectionContainer.setVisibility(true);
    this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.tbxBidAmount.text = "";
    this.view.flxOverLay.setVisibility(true);
      }
    else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },
  
  closeBidAmountContainer: function(){
    this.view.flxBidAmountSelectionContainer.setVisibility(false);
    this.view.flxOverLay.setVisibility(false);
  },
  
  selectBidAmountAddIntoTextBox: function(amount){
    
    if(amount === "500"){
       this.view.btn500AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    }
    else if(amount === "1000"){
      this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1000AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    }
    else 
      {
        this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1500AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      }
    
    this.view.tbxBidAmount.text = this.currentAmount + Number(amount) +" AED";
    this.vehicleHike = amount;
    
  },
  
  invokeFryWfAuctionBidding: function()
  {
    if(this.view.tbxBidAmount.text.trim() !== "")

      
      {
        
        if(this.view.imgCheck.isVisible){
         var self = this;
     voltmx.application.showLoadingScreen();
    function invService(status, auction_bidding) {
      voltmx.print(status);
      voltmx.application.dismissLoadingScreen();
      voltmx.print(auction_bidding);
      if(auction_bidding &&
         auction_bidding.auction_bidding &&
         auction_bidding.auction_bidding[0] &&
         auction_bidding.auction_bidding[0].records &&
         auction_bidding.auction_bidding[0].records[0] &&
         auction_bidding.auction_bidding[0].records[0].Success === "1")
        {
          self.view.lblSuccessMsg.text = "Your Bid Has Been Placed Successfully";
          
           self.closeBidAmountContainer();
          self.view.flxBidSuccessPopup.setVisibility(true);
          self.updateSegmentWithUpdatedBidRate();
        }
    }
    if (auction_bidding_inputparam == undefined) {
        var auction_bidding_inputparam = {};
    }
     var userid = voltmx.store.getItem("userId");
    auction_bidding_inputparam["serviceID"] = "fry_wf$auction-bidding";
    auction_bidding_inputparam["user_id"] = userid;
    auction_bidding_inputparam["vehicle_amount"] = String(this.currentAmount);
    auction_bidding_inputparam["vehicle_hike"] = this.vehicleHike;
        auction_bidding_inputparam["auction_id"] = this.aucid;
        auction_bidding_inputparam["bid_type"] = "";
        auction_bidding_inputparam["object_id"] = this.objid;
    var auction_bidding_httpheaders = {};
    auction_bidding_inputparam["httpheaders"] = auction_bidding_httpheaders;
    var auction_bidding_httpconfigs = {};
    auction_bidding_inputparam["httpconfig"] = auction_bidding_httpconfigs;
    fry_wf$auction_bidding = mfintegrationsecureinvokerasync(auction_bidding_inputparam, "fry_wf", "auction-bidding", invService);
      }
        
       else{
         alert('select check box..!');
       } 
       
      }
    else{
      alert('text box should not be empty');
    }
  },
  
  invokeAutoBidFunction: function()
  {
    
     if (this.view.tbxAutoBidAmount.text && this.view.tbxAutoBidAmount.text.trim() !== "") {
       
       var self = this;

       function invokeServiceCallBack(status, register_auto_bidding) {
         if (register_auto_bidding && register_auto_bidding.opstatus === 0 && register_auto_bidding.records && register_auto_bidding.records.length > 0){
           self.view.flxAutoBidAmountContainer.setVisibility(false);
          
           self.view.lblSuccessMsg.text = "Auto Bid Activated Successfully";
            self.view.flxBidSuccessPopup.setVisibility(true);
         }

    }
    if (register_auto_bidding_inputparam == undefined) {
        var register_auto_bidding_inputparam = {};
    }
    var userid = voltmx.store.getItem("userId");
    var maxBidAmount = self.view.tbxAutoBidAmount.text;
    register_auto_bidding_inputparam["serviceID"] = "fry_int_auctions$register-auto-bidding";
    register_auto_bidding_inputparam["auction_id"] = this.aucIdForAutoBid;
    register_auto_bidding_inputparam["bid_by"] = userid;
    register_auto_bidding_inputparam["bid_max_amount"] = String(maxBidAmount);
    register_auto_bidding_inputparam["bid_min_value"] = "200";
    register_auto_bidding_inputparam["object_id"] = this.objIdForAutoBid;
    var register_auto_bidding_httpheaders = {};
    register_auto_bidding_inputparam["httpheaders"] = register_auto_bidding_httpheaders;
    var register_auto_bidding_httpconfigs = {};
    register_auto_bidding_inputparam["httpconfig"] = register_auto_bidding_httpconfigs;
    fry_int_auctions$register_auto_bidding = mfintegrationsecureinvokerasync(register_auto_bidding_inputparam, "fry_int_auctions", "register-auto-bidding", invokeServiceCallBack);
       }
    else{
       alert('Enter Max. Bid Amount');
    }
  },
  
  addToWishList: function(widgetRef, sectionIndex, rowIndex){
    var selectedRow  = this.view.segCurrentAuctionList.selectedRowItems;
    if (!selectedRow || selectedRow.length === 0) {
      voltmx.print("No row is selected");
      return;
    }
    var rowData = selectedRow[0];
    var rowIndex = this.view.segCurrentAuctionList.selectedRowIndex[1];

    rowData.imgHeart = rowData.imgHeart === "imgdislikenew.png" ? "heartlikerecommended.png" : "imgdislikenew.png";

    // Update only the selected row
    this.view.segCurrentAuctionList.setDataAt(rowData, rowIndex);
  },
  enableAutoBid: function(objid,aucid){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin){
    this.objIdForAutoBid = objid;
    this.aucIdForAutoBid = aucid;
   this.view.flxOverLay.setVisibility(true);
   this.view.flxAutoBidAmountContainer.setVisibility(true);
    }
     else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },
  
  updateSegmentWithUpdatedBidRate: function()
  {
    
    var selIndex = this.view.segCurrentAuctionList.selectedRowIndex;
    var rowData = this.view.segCurrentAuctionList.selectedRowItems[0];
    rowData.lblPrice = "AED " + (this.currentAmount + Number(this.vehicleHike));
    rowData.lblPrice = {
    "text": "AED " + (this.currentAmount + Number(this.vehicleHike)),
    "skin": "sknLblDubai02905120pxBold"
  };
    rowData.lblTotalBidsCount = Number(rowData.lblTotalBidsCount) + 1;
    this.view.segCurrentAuctionList.setDataAt(rowData, selIndex[1]);
  
  },
  
  showCurrentAuctions: function()
  {
    this.view.flxUALine.setVisibility(false);
    this.view.flxCALine.setVisibility(true);
    this.view.lblUpcomingAuctions.skin = "sknLblCronosPro8e8e8e18px49";
    this.view.lblCurrentAuctions.skin = "sknLblCronosPro231f2018px49";
    this.view.segCurrentAuctionList.setVisibility(true);
  },
  
  showUpcomingAuctions: function(){
    this.view.flxUALine.setVisibility(true);
    this.view.flxCALine.setVisibility(false);
    this.view.lblUpcomingAuctions.skin = "sknLblCronosPro231f2018px49";
    this.view.lblCurrentAuctions.skin = "sknLblCronosPro8e8e8e18px49";
    this.view.segCurrentAuctionList.setVisibility(false);
    
  },
  
  showVehicleTypeFilter: function(){
    this.view.flxVehicleTypeFilter.setVisibility(true);
    this.view.flxOverLay.setVisibility(true);
  },
  
  showBodyTypeFilter: function(){
    this.view.flxBodyTypeFilter.setVisibility(true);
     this.view.flxOverLay.setVisibility(true);
  },
  
  hideVehicleTypeFilter: function(){
    this.view.flxVehicleTypeFilter.setVisibility(false);
    this.view.flxOverLay.setVisibility(false);
  },
  hideBodyTypeFilter: function(){
    this.view.flxBodyTypeFilter.setVisibility(false);
     this.view.flxOverLay.setVisibility(false);
  },
  onFilterClick: function(widgetRef){
    var id = widgetRef.id;
    
    if(id === "flxCommercialVehicles"){
      if(!this.view.flxCommercialVehiclesSelected.isVisible){
        this.view.flxCommercialVehiclesSelected.setVisibility(true);
      }
    }
     if(id === "flxClassicandCollectorCars"){
      if(!this.view.flxClassicCarsSelected.isVisible){
        this.view.flxClassicCarsSelected.setVisibility(true);
      }
    }
     if(id === "flxSalvageVehicles"){
      if(!this.view.flxSalvageSelected.isVisible){
        this.view.flxSalvageSelected.setVisibility(true);
      }
    }
     if(id === "flxBikes"){
      if(!this.view.flxBikesSelected.isVisible){
        this.view.flxBikesSelected.setVisibility(true);
      }
    }
     if(id === "flxHeavyVehicles"){
      if(!this.view.flxHeavyVehiclesSelected.isVisible){
        this.view.flxHeavyVehiclesSelected.setVisibility(true);
      }
    }
     if(id === "flxLightVehicles"){
      if(!this.view.flxLightVehiclesSelected.isVisible){
        this.view.flxLightVehiclesSelected.setVisibility(true);
      }
    }
    if(id === "flxCommercialVehiclesBodyType"){
      if(!this.view.flxCommercialVehiclesBodyTypeSelected.isVisible){
        this.view.flxCommercialVehiclesBodyTypeSelected.setVisibility(true);
      }
    }
    if(id === "flxClassicCarsBodyType"){
      if(!this.view.flxClassicCarsBodyTypeSelected.isVisible){
        this.view.flxClassicCarsBodyTypeSelected.setVisibility(true);
      }
    }
    if(id === "flxSalvageVehiclesBodyType"){
      if(!this.view.flxSalvageBodyTypeSelected.isVisible){
        this.view.flxSalvageBodyTypeSelected.setVisibility(true);
      }
    }
    if(id === "flxBikesBodyType"){
      if(!this.view.flxBikesBodyTypeSelected.isVisible){
        this.view.flxBikesBodyTypeSelected.setVisibility(true);
      }
    }
    if(id === "flxHeavyVehiclesBodyType"){
      if(!this.view.flxHeavyVehiclesBodyTypeSelected.isVisible){
        this.view.flxHeavyVehiclesBodyTypeSelected.setVisibility(true);
      }
    }
    if(id === "flxLightVehiclesBodyType"){
      if(!this.view.flxLightVehiclesBodyTypeSelected.isVisible){
        this.view.flxLightVehiclesBodyTypeSelected.setVisibility(true);
      }
    }
  },
  
  removeFromFilterItems: function(widgetRef){
    var parentFlex = widgetRef.parent;
    parentFlex.setVisibility(false);
  },
  
  navTofrmDetails: function(){
    var x = new voltmx.mvc.Navigation("frmDetails");
    x.navigate();
  }
 });