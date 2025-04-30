define({ 

 onNavigate: function() {  
   
    this.view.preShow = this.onPreshow.bind(this);
   
      if (!this.isUIInitialized) {
        this.createSegmentDynamically();
        this.isUIInitialized = true;
         }
   this.invokeOnlineAuctionList();
   this.view.postShow = this.onPostShow.bind(this);
    this.view.btnRecommended.onClick = this.showRecommendedFilterFlex.bind(this,"recommended");
   this.view.btnEndingSoon.onClick = this.showRecommendedFilterFlex.bind(this,"endingsoon");
    this.view.btnRecentlyViewed.onClick = this.showRecommendedFilterFlex.bind(this,"recentlyviewed");
   this.view.btnYourFavourites.onClick = this.showRecommendedFilterFlex.bind(this,"yourfavourites");
   this.view.btnNewlyListedVehicles.onClick =  this.showRecommendedFilterFlex.bind(this,"newlylisted");
   this.view.flxServiceItem1.onClick = this.navToVehicleInspection.bind(this);
   this.view.flxAuctionCalendarItem1.onClick = this.navToAuctionCalendar.bind(this);
   this.view.flxAuctionCalendarItem2.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem3.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem4.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem5.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem6.onClick = this.navToComingSoon.bind(this);
   this.view.flxViewAll.onClick = this.navToAuctionList.bind(this);
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

    this.toggleFooterIcons();
    
    this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
    this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
  },
  
  onPostShow: function(){
    
    this.view.btn500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"500");
    this.view.btn1000AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1000");
    this.view.btn1500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1500");
    this.view.btnBidNow.onClick =  this.invokeFryWfAuctionBidding.bind(this);
      this.view.flxCheckBox.onClick = () => {
       this.view.imgCheck.setVisibility(!this.view.imgCheck.isVisible);
    };
    
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(true);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooteractive.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldDisp333333Font200";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
     this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
    var isLogin =voltmx.store.getItem("isLogin");

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
  
  navToComingSoon: function(){
    var x = new voltmx.mvc.Navigation("frmCominSoon");
   x.navigate();
  },
  
    invokeOnlineAuctionList: function(){
    
     var self = this;

    function invServiceCallBack(status, online_auction_list) {
    var records = online_auction_list && online_auction_list.auction_list ? online_auction_list.auction_list : [];
    
    if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions();
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
  
  createSegmentDynamically: function(){
  
   this.view.segCarouselView.widgetDataMap = {
        "imgCarousel": "imgCarousel",
        "lblCarouselSlideHeading": "lblCarouselSlideHeading",
        "lblCarouselSlideSubheading": "lblCarouselSlideSubheading",
        "btnAction": "btnAction"
    };

    // Dummy Data for Segment (Modify as Needed)
    var data = [
        {
            "imgCarousel":"dashboardcarouselnew1.jpg",
            "lblCarouselSlideHeading": "ONLINE AUCTIONS",
            "lblCarouselSlideSubheading": "180 Vehicles available",
            "btnAction": { "text": "VIEW ALL"}
        },
        {
             "imgCarousel":"dashboardcarouselimg2.jpg",
            "lblCarouselSlideHeading": "OUR OTHER SERVICES",
            "lblCarouselSlideSubheading": "Professional servicing, repairs and diagnostics",
            "btnAction": { "text": "VIEW ALL"}
        },
       {
             "imgCarousel":"dashboardcarouselnew2.png",
            "lblCarouselSlideHeading": "FLASH AUCTIONS",
            "lblCarouselSlideSubheading": "Bid Fast, Win Big - Time's Ticking",
            "btnAction": { "text": "VIEW ALL"}
        },
      {
             "imgCarousel":"dashboardcarouselnew3.png",
            "lblCarouselSlideHeading": "PHYSICAL AUCTIONS",
            "lblCarouselSlideSubheading": "From the Floor to Your Hands - Secure Your Asset",
            "btnAction": { "text": "VIEW ALL"}
        }
      
      
    ];

    // Set data to the segment
   this.view.segCarouselView.setData(data);
  
     
    this.view.segCarouselView.pageOnDotImage = "segmentpageonimg.png"; 
    this.view.segCarouselView.pageOffDotImage = "segmentpageoffimg.png";
  },

   createsIntoFeaturedAuctions: function() {
        voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFilteredItems;
//           parentFlex.removeAll();
        var records = this.isRecords ? this.records : this.getStaticCarRecords();

        for (var i = 0; i < 5; i++) {
            // Creating the main flex container for each widget

            var flexFeaturedAuctionsItem = new voltmx.ui.FlexContainer({
                id: "flexFeaturedAuctionsItem" + i,
                left: "20dp",
                width: "280dp", 
                height: "92%",
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
                skin: "sknFlxFFFFFFBorderCCCCCC2px",
                clipBounds: true
                
            }, {}, {});
          
          
            var flxFeaturedAuctionsItemTop = new voltmx.ui.FlexContainer({
              
             id: "flxFeaturedAuctionsItemTop" + i,
             centerX: "50%",
             height: "50%",
             width: "90%",
             zIndex:1,
             isVisible: true,
             top: "5%",
             skin: "sknFlxWhiteRoundedCorner",
             clipBounds: true  
            },{},{});
          
          var imgFeaturedAuctions = new voltmx.ui.Image2({
                id: "imgFeaturedAuctions" + i,
                isVisible: true,
               src : records[i].thumbnail_url ? records[i].thumbnail_url : "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });


          var flxFeaturedAuctionsItemBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxFeaturedAuctionsItemBottom" + i,
             centerX: "50%",
             height: "45%",
             width: "100%",
             zIndex: 2,
             isVisible: true,
             top: "55%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FREE_FORM
            
            
          },{},{});
          
          var lblCarname = new voltmx.ui.Label(
           {
                id: "lblCarname" + i,
                text: records[i].sub_category_name ? records[i].sub_category_name : "N/A", 
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "10%",
                height: "15%",
                skin: "sknLblCronosPro231f2022pxbold"
          }
          );
          
          var lblLot = new voltmx.ui.Label({
            
                id: "lblLot" + i,
                text: "Lot #:"+(records[i].ID ? records[i].ID : "N/A"),
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "30%",
                height: "15%",
                skin: "sknLblCronosPro231f2016px"
            
          });
          
             var lblTotalBids = new voltmx.ui.Label({
            
                id: "lblTotalBids" + i,
                text: "Total Bids: "+ (records[i].bids ? records[i].bids: "N/A"),
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "50%",
                height: "15%",
                skin: "sknLblCronosPro231f2016px"
            
          });
          
        
          
          var lblCountDown = new voltmx.ui.Label({
                id: "lblCountDown" + i,
                text: records[i].time_remaining ? records[i].time_remaining : "N/A", 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "10%",
                skin: "sknLblCronosProd3243716px"
          });
          
          
          var lblLocation = new voltmx.ui.Label({
            
            
                id: "lblLocation" + i,
                text: records[i].location ? records[i].location : "N/A", 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "30%",
                skin: "sknLblCronosPro231f2016px"
            
            
          });
          
          var lblBidRate = new voltmx.ui.Label({
            
                id: "lblBidRate" + i,
                text: "AED "+ (records[i].max_bid_amount ? records[i].max_bid_amount : "N/A"), 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "50%",
                skin: "sknLblCronosProd32437Bold22px"
          });
          
          
          var flxLikeFromRecommendedFilter = new voltmx.ui.FlexContainer({
              id: "flxLikeFromRecommendedFilter"+i,
            isVisible: true,
            clipBounds: false,
            left: "5%",
            bottom: "10%",
            top: "70%",
            skin: "sknFlx231f20custom120pxround",
            width: "25dp",
            height: "25dp",
            zIndex: 2,
            onClick: this.toggleHeartStatusFromRecommended.bind(this,i)
          },{},{});
          
              var imgHeartIconFromRecommended = new voltmx.ui.Image2({
                id: "imgHeartIconFromRecommended" + i,
                isVisible: true,
               src : "imgdislikenew.png",
               centerY: "50%",
               centerX: "50%",
              width: "55%", 
                height: "55%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
          var flxBidEnable = new voltmx.ui.FlexContainer({
              id: "flxBidEnable"+i,
            isVisible: true,
            clipBounds: false,
            right: "44%",
            bottom: "10%",
            top: "70%",
            skin: "sknFlxBasic",
            width: "25dp",
            height: "25dp",
            zIndex: 2,
            onClick: this.enableAutoBid.bind(this,{
              auction_id: records[i].auction_id,
              object_id: records[i].object_id
            })
          },{},{});
          
            var imgAutoBid = new voltmx.ui.Image2({
                id: "imgAutoBid" + i,
                isVisible: true,
               src : "imgautobidnew.png",
               centerY: "50%",
               centerX: "50%",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });

          var btnBidNow = new voltmx.ui.Button({
            
            id: "btnBidNow"+ i,
            right: "5%",
            top: "70%",
            text: "BID NOW",
            zindex: 3,
            skin: "sknBtnBidNow",
            width: "35%",
            height: "20%", 
            onClick: this.openBidAmountContainer.bind(this, {
              auction_id: records[i].auction_id,
              object_id: records[i].object_id,
              max_bid_amount: records[i].max_bid_amount,
              ID: records[i].ID,
              currentIndex: i
            })    
          });
          
             
          var btnTest = new voltmx.ui.Button({
             id: "btnTest"+ i,
             right: "5%",
            top: "69%",
            text: "BID NOW",
            height: "preferred",
            width: "30%",
            skin: "sknBtnBidNow",
           
            onClick: this.openBidAmountContainer.bind(this, {
              auction_id: records[i].auction_id,
              object_id: records[i].object_id,
              max_bid_amount: records[i].max_bid_amount,
              ID: records[i].ID,
              currentIndex: i
            })  
            
          })

          flxFeaturedAuctionsItemTop.add(imgFeaturedAuctions);
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemTop); 
          flxFeaturedAuctionsItemBottom.add(lblCarname);
          flxFeaturedAuctionsItemBottom.add(lblLot);
          flxFeaturedAuctionsItemBottom.add(lblTotalBids);
          flxFeaturedAuctionsItemBottom.add(lblCountDown);
          flxFeaturedAuctionsItemBottom.add(lblLocation);
          flxFeaturedAuctionsItemBottom.add(lblBidRate);
          flxLikeFromRecommendedFilter.add(imgHeartIconFromRecommended);
          flxBidEnable.add(imgAutoBid);
          flxFeaturedAuctionsItemBottom.add(flxBidEnable);
          flxFeaturedAuctionsItemBottom.add(flxLikeFromRecommendedFilter);
//           flxFeaturedAuctionsItemBottom.add(btnBidNow);
          flxFeaturedAuctionsItemBottom.add(btnTest);
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemBottom);
          parentFlex.add(flexFeaturedAuctionsItem);
        }

        voltmx.print("exit from function");
    },
  
  openBidAmountContainer: function(params){
    
    var isLogin = voltmx.store.getItem("isLogin");
    
    if(isLogin)
    {
     this.aucid = params.auction_id;
    this.objid = params.object_id;
    this.currentAmount = Number(params.max_bid_amount);
    this.selectedID = params.ID;
    this.currentIndex = params.currentIndex;

    // amount changes every time when bid,so wrote like this to get amount+hike (updated one) every time.
    var lblId = "lblBidRate" + this.currentIndex;
    if (this.view[lblId]) {
      var amountText = this.view[lblId].text;   // "AED 23500.00" for understanding 
      var amountOnly = amountText.replace("AED", "").trim();  // "23500.00"
      this.currentAmount = Number(amountOnly); 
    }

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
         
          if (self.view.lblSuccessMsg) {
            self.view.lblSuccessMsg.text = "Your Bid Has Been Placed Successfully";
          }
          self.view.flxBidSuccessPopup.setVisibility(true);
           self.closeBidAmountContainer();
          self.view.flxOverLay.setVisibility(true);
//           self.updateSegmentWithUpdatedBidRate(); IN place of this need to update flex
          
          var bidAmount = self.view.tbxBidAmount.text.trim();
          var lblId = "lblBidRate" + self.currentIndex;
          if (self.view[lblId]) {
            self.view[lblId].text = bidAmount;
             self.view[lblId].skin = "sknLblCronosProd0290512Bold22px";
          } else {
            voltmx.print("Label not found for ID: " + self.selectedID);
          }
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
    
    this.view.tbxBidAmount.text =
      this.currentAmount + 
      Number(amount) +" AED";
    this.vehicleHike = amount;
    
  },
  
  invokeAutoBidFunction: function()
  {
     if(this.view.tbxAutoBidAmount.text && this.view.tbxAutoBidAmount.text.trim() !== "")
       {
      var self = this;

    function invokeServiceCallBack(status, register_auto_bidding) {
     if (register_auto_bidding && register_auto_bidding.opstatus === 0 && register_auto_bidding.records && register_auto_bidding.records.length > 0){
       self.view.flxAutoBidAmountContainer.setVisibility(false);
       
       if (self.view.lblSuccessMsg) {
         self.view.lblSuccessMsg.text = "Auto Bid Activated Successfully";
       }
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
  
  getStaticCarRecords: function() {
  return [
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Nissan Sunny 2023",
      ID: "69952",
      bids: "68",
      time_remaining: "11D 7H 02M",
      location: "Sharjah",
      max_bid_amount: "15,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Toyota Corolla 2022",
      ID: "70123",
      bids: "54",
      time_remaining: "5D 2H 10M",
      location: "Dubai",
      max_bid_amount: "18,500"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Hyundai Elantra 2021",
      ID: "69342",
      bids: "41",
      time_remaining: "2D 11H 45M",
      location: "Ajman",
      max_bid_amount: "12,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Kia Sportage 2020",
      ID: "68201",
      bids: "77",
      time_remaining: "1D 4H 05M",
      location: "Abu Dhabi",
      max_bid_amount: "22,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Ford EcoSport 2022",
      ID: "70588",
      bids: "33",
      time_remaining: "3D 6H 30M",
      location: "Fujairah",
      max_bid_amount: "16,750"
    }
  ];
},
  
  toggleHeartStatus: function(index){
   var imgHeart = this.view["imgHeartIcon" + index]; // Get the image by ID

    if (imgHeart.src === "heartdislikefeaturedauctions.png") {
        imgHeart.src = "heartlikexx.png"; // Change to liked state
    } else {
        imgHeart.src = "heartdislikefeaturedauctions.png"; // Change back to unliked state
    }
  },
  
  toggleHeartStatusFromRecommended: function(index){
    
     var imgHeart = this.view["imgHeartIconFromRecommended" + index]; // Get the image by ID
     var flxHeart = this.view["flxLikeFromRecommendedFilter" + index];
    if (imgHeart.src === "imgdislikenew.png") {
        flxHeart.skin = "sknFlxd32437custom120pxround";
        imgHeart.src = "heartlikerecommended.png"; // Change to liked state
    } else {
        flxHeart.skin = "sknFlx231f20custom120pxround";
        imgHeart.src = "imgdislikenew.png"; // Change back to unliked state
    }
  },
  
  enableAutoBid: function(params){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin)
      {
    this.objIdForAutoBid = params.object_id;
    this.aucIdForAutoBid = params.auction_id;
   this.view.flxOverLay.setVisibility(true);
   this.view.flxAutoBidAmountContainer.setVisibility(true);
      }  
     else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },

  showRecommendedFilterFlex: function(filter){
    switch(filter){
      case "recommended":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;
      case "endingsoon":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilter";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;
      case "recentlyviewed":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilter";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";

        break;

      case "yourfavourites":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilter";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;

      case "newlylisted":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilter";
        break;

    }
  },
  
  navToVehicleInspection: function(){
    var x = new voltmx.mvc.Navigation("frmVehicleInspection");
    x.navigate();
  },
  
  navToAuctionCalendar: function(){
    var x = new voltmx.mvc.Navigation("frmAuctionCalendar");
    x.navigate();
  },
  
  navToAuctionList: function(){
    var x = new voltmx.mvc.Navigation("frmAllAuctionsList");
    x.navigate();
  }

 });