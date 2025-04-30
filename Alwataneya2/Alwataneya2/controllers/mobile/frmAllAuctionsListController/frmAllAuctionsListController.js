define({
selectedFilters: {},
  
 onNavigate: function()
  {
   this.view.preShow = this.onPreshow.bind(this);
    this.view.Header2WithLatestMenu.flxFilterFromHeader.setVisibility(false);
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
  },
  
  onPreshow: function(){
   this.setDataToSeg();
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
  setDataToSeg: function()
  {   
    this.view.segCurrentAuctionList.widgetDataMap = {
      "imgCarPIcture":"imgCarPIcture",
      "lblCarname":"lblCarname",
      "lblTimerCount":"lblTimerCount",
      "lblLotNum":"lblLotNum",
      "lblTotalBids":"lblTotalBids",
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
        "lblTimerCount" : "04:59S",
        "lblLotNum" : "#Lot:69952",
        "lblTotalBids" : "Total Bids: 68",
        "flxLikeHeart" : {
          "onClick": this.addToWishList.bind(this)
        },
        "imgHeart" : "dislikeheartcurrentauctions.png",
        "lblCurrentBid" : "CURRENT BID",
        "lblPrice" : "40,000",
        "flxAutoBid": {
          "onClick": this.enableAutoBid.bind(this)
        },
        "imgAutoBidicon" : "autobidicon.png",
        "lblAutoBid" : "AUTO BID",
        "btnBidNow" : "BID NOW"
        
        
      },
      
      {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Ford Mustang 2022",
    "lblTimerCount": "03:45S",
    "lblLotNum": "#Lot:12345",
    "lblTotalBids": "Total Bids: 50",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "55,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Tesla Model S",
    "lblTimerCount": "02:30S",
    "lblLotNum": "#Lot:56789",
    "lblTotalBids": "Total Bids: 75",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "80,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "BMW M3",
    "lblTimerCount": "04:10S",
    "lblLotNum": "#Lot:23456",
    "lblTotalBids": "Total Bids: 40",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "70,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Audi R8",
    "lblTimerCount": "01:59S",
    "lblLotNum": "#Lot:98765",
    "lblTotalBids": "Total Bids: 90",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "120,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Porsche 911",
    "lblTimerCount": "05:20S",
    "lblLotNum": "#Lot:34567",
    "lblTotalBids": "Total Bids: 65",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "95,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Mercedes AMG GT",
    "lblTimerCount": "02:15S",
    "lblLotNum": "#Lot:54321",
    "lblTotalBids": "Total Bids: 55",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "85,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Chevrolet Camaro",
    "lblTimerCount": "03:00S",
    "lblLotNum": "#Lot:11122",
    "lblTotalBids": "Total Bids: 48",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "60,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Nissan GTR",
    "lblTimerCount": "01:45S",
    "lblLotNum": "#Lot:33344",
    "lblTotalBids": "Total Bids: 120",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "130,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Lamborghini Huracan",
    "lblTimerCount": "04:30S",
    "lblLotNum": "#Lot:77788",
    "lblTotalBids": "Total Bids: 150",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "250,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Dodge Challenger",
    "lblTimerCount": "05:00S",
    "lblLotNum": "#Lot:99900",
    "lblTotalBids": "Total Bids: 35",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "58,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
     "btnBidNow" : "BID NOW"
  }   
    ]
    
    this.view.segCurrentAuctionList.setData(data);
  },
  
  addToWishList: function(widgetRef, sectionIndex, rowIndex){
    var selectedRow  = this.view.segCurrentAuctionList.selectedRowItems;
    if (!selectedRow || selectedRow.length === 0) {
      voltmx.print("No row is selected");
      return;
    }
    var rowData = selectedRow[0];
    var rowIndex = this.view.segCurrentAuctionList.selectedRowIndex[1];

    rowData.imgHeart = rowData.imgHeart === "dislikeheartcurrentauctions.png" ? "heartlikexx.png" : "dislikeheartcurrentauctions.png";

    // Update only the selected row
    this.view.segCurrentAuctionList.setDataAt(rowData, rowIndex);
  },
  enableAutoBid: function(){

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