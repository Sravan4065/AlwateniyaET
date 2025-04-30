define({ 

 onNavigate: function() {  
   
    this.view.preShow = this.onPreshow.bind(this);
   
      if (!this.isUIInitialized) {
        this.createsIntoFeaturedAuctions();
        this.createsIntoRecommendedFilter();
        this.createSegmentDynamically();
        this.isUIInitialized = true;
         }
   
    this.view.btnRecommended.onClick = this.showRecommendedFilterFlex.bind(this,"recommended");
   this.view.btnEndingSoon.onClick = this.showRecommendedFilterFlex.bind(this,"endingsoon");
    this.view.btnRecentlyViewed.onClick = this.showRecommendedFilterFlex.bind(this,"recentlyviewed");
   this.view.btnYourFavourites.onClick = this.showRecommendedFilterFlex.bind(this,"yourfavourites");
   this.view.btnNewlyListedVehicles.onClick =  this.showRecommendedFilterFlex.bind(this,"newlylisted");
   this.view.flxServiceItem1.onClick = this.navToVehicleInspection.bind(this);
 },
  
  onPreshow: function(){
    this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
    this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
//     alert("dashboard");

    
    
    
    
    
    
    var isLogin =voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
//     alert("isLogin :"+isUserCreated);
    if(isLogin === true && isUserCreated === true){
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }

    
    
    
  },
  
  createSegmentDynamically: function(){
  
   this.view.segCarouselView.widgetDataMap = {
        "imgBackgroundCarousel": "imgBackgroundCarousel",
        "lblCarouselSlideHeading": "lblCarouselSlideHeading",
        "lblCarouselSlideSubheading": "lblCarouselSlideSubheading",
        "btnAction":"btnAction",
        "imgRelatedSlide1": "imgRelatedSlide1",
       "imgFlashAuctionslide":"imgFlashAuctionslide",
        "imgAwaLogo":"imgAwaLogo"
    };

    // Dummy Data for Segment (Modify as Needed)
    var data = [
        {
           "imgRelatedSlide1": "dashboardcarouselimg1.png",
           "imgBackgroundCarousel": {"isVisible": false},
            "imgFlashAuctionslide": {"isVisible": false},
          "imgAwaLogo": {"isVisible": true, "src": "awalogodashboardcarousel.png"},
           "imgRelatedSlide1":{"isVisible": true , "src":"dashboardcarouselimg1.png"},
            "lblCarouselSlideHeading": "ONLINE AUCTIONS",
            "lblCarouselSlideSubheading": "180 Vehicles available",
            "btnAction": { "text": "BID NOW"}
        },
        {
           "imgRelatedSlide1": {"isVisible": false},
           "imgBackgroundCarousel": { 
        "src": "dashboardcarouselimg2.png", 
        "isVisible": true 
           },
          "imgAwaLogo": {"isVisible": false},
           "imgFlashAuctionslide": {"isVisible": false},
            "lblCarouselSlideHeading": "OUR OTHER SERVICES",
            "lblCarouselSlideSubheading": "Professional servicing, repairs and diagnostics",
            "btnAction": { "text": "KNOW MORE"}
        },
       {
           "imgRelatedSlide1": "dashboardcarouselimg3.png",
          "imgBackgroundCarousel": {"isVisible": false},
           "imgFlashAuctionslide": {"isVisible": true, "src": "imgflash.png"},
           "imgAwaLogo": {"isVisible": false},
            "lblCarouselSlideHeading": "FLASH AUCTIONS",
            "lblCarouselSlideSubheading": "Bid Fast, Win Big - Time's Ticking",
            "btnAction": { "text": "BID NOW"}
        },
      {
           "imgRelatedSlide1": "dashboardcarouselimg4.png",
           "imgBackgroundCarousel": {"isVisible": false},
           "imgFlashAuctionslide": {"isVisible": false},
           "imgAwaLogo": {"isVisible": false},
            "lblCarouselSlideHeading": "PHYSICAL AUCTIONS",
            "lblCarouselSlideSubheading": "From the Floor to Your Hands - Secure Your Asset",
            "btnAction": { "text": "KNOW MORE"}
        }
      
      
    ];

    // Set data to the segment
   this.view.segCarouselView.setData(data);
  
     
    this.view.segCarouselView.pageOnDotImage = "segmentpageonimg.png"; 
    this.view.segCarouselView.pageOffDotImage = "segmentpageoffimg.png";
  },

   createsIntoFeaturedAuctions: function() {
        voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFeaturedAuctions;
//           parentFlex.removeAll();


        for (var i = 0; i < 10; i++) {
            // Creating the main flex container for each widget
          
          
            var flexFeaturedAuctionsItem = new voltmx.ui.FlexContainer({
                id: "flexFeaturedAuctionsItem" + i,
                left: "10dp",
                width: "200dp", 
                height: "100%", 
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
                skin: "sknFlxFeaturedAuctionsItem",
                clipBounds: true
                
            }, {}, {});
          
          
            var flxFeaturedAuctionsItemTop = new voltmx.ui.FlexContainer({
              
             id: "flxFeaturedAuctionsItemTop" + i,
             centerX: "50%",
             height: "54%",
             width: "98%",
             zIndex:1,
             isVisible: true,
             top: "1%",
             skin: "sknFlxWhiteRoundedCorner",
             clipBounds: true
              
              
              
            },{},{});
          
          var imgFeaturedAuctions = new voltmx.ui.Image2({
                id: "imgFeaturedAuctions" + i,
                isVisible: true,
               src : "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
          var flxLive = new voltmx.ui.FlexContainer({
            
            id: "flxLive"+i,
            isVisible: true,
            clipBounds: true,
            left: "10dp",
            top: "10dp",
            skin: "sknflxLiveCustom70Maroon",
            width: "30%",
            height: "28dp",
            zIndex: 2,
            layout: voltmx.flex.FLOW_HORIZONTAL
            
          },{},{});
          
          var imgLiveIcon = new voltmx.ui.Image2({
                id: "imgLiveIcon" + i,
                isVisible: true,
               src : "liveicon2x.png",
               centerY: "50%",
               left: "5%",
               width: "15dp",
                height: "15dp",
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
          var lblLive = new voltmx.ui.Label({
                id: "lblLive" + i,
                skin: "sknLblCronosWhiteLive",
                text: "Live", 
                isVisible: true,
                left: "37%",
                centerY: "50%"
            }
);
          
          var flxHeart = new voltmx.ui.FlexContainer({
             id: "flxHeart"+i,
            isVisible: true,
            clipBounds: true,
            right: "10dp",
            top: "10dp",
            skin: "sknflxCustom100WhiteRounded",
            width: "12%",
            height: "12%",
            zIndex: 2,
            onClick: this.toggleHeartStatus.bind(this,i)
          },{},{});
          
              var imgHeartIcon = new voltmx.ui.Image2({
                id: "imgHeartIcon" + i,
                isVisible: true,
               src : "heartdislikefeaturedauctions.png",
               centerY: "50%",
               centerX: "50%",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
           var flxCountDown = new voltmx.ui.FlexContainer({
             
             id: "flxCountDown"+i,
            isVisible: true,
            clipBounds: true,
            centerX: "50%",
            skin: "sknFlxCountDown",
            width: "80%",
            height: "18%",
            zIndex: 2,
            top: "75%"
             
           },{},{});
          
          var flxFeaturedAuctionsItemBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxFeaturedAuctionsItemBottom" + i,
             centerX: "50%",
             height: "45%",
             width: "100%",
             zIndex:1,
             isVisible: true,
             top: "55%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
            
            
          },{},{});
          
          var lblCarname = new voltmx.ui.Label(
           {
                id: "lblCarname" + i,
                text: "Nissan Patrol 2018", 
                isVisible: true,
                width: "preferred",
                left: "10%",
                top: "10%",
                skin: "sknLblCronosProBlack17px"
          }
          );
          
          var lblLocation = new voltmx.ui.Label({
            
                id: "lblLocation" + i,
                text: "Abu Dhabi - Al Falah",
                isVisible: true,
                width: "preferred",
                left: "10%",
                top: "4%",
                skin: "sknLblCronosProBlack14px"
            
          });
          
          var flxBidPortion = new voltmx.ui.FlexContainer({
              id: "flxBidPortion" + i,
             centerX: "50%",
             height: "40%",
             width: "90%",
             zIndex:2,
             isVisible: true,
             top: "5%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_HORIZONTAL
            
          },{},{});
          
          var flxBidPortionCurrentBid = new voltmx.ui.FlexContainer({
            
             id: "flxBidPortionCurrentBid" + i,
             left: "0%",
             height: "100%",
             width: "60%",
             zIndex:2,
             isVisible: true,
             top: "0%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
            
            
            
          },{},{});
          
          var lblCurrentBidText = new voltmx.ui.Label({
            
            
                id: "lblCurrentBidText" + i,
                text: "Current Bid At", 
                isVisible: true,
                width: "preferred",
                height: "preferred",
                left: "10%",
                top: "2%",
                skin: "sknLblCronosProBlack10px"
            
            
          });
          
          var lblBidRate = new voltmx.ui.Label({
            
                id: "lblBidRate" + i,
                text: "AED 25,000", 
                isVisible: true,
                width: "preferred",
                height: "preferred",
                left: "10%",
                top: "2%",
                skin: "sknLblCronosProRedBold"
          });
          
          var flxBidNow = new voltmx.ui.FlexContainer({
            
              id: "flxBidNow" + i,
             left: "0%",
             height: "100%",
             width: "40%",
             zIndex:2,
             isVisible: true,
             top: "0%",
             skin: "sknFlxBasic",
             clipBounds: true,
             
            
            
          },{},{});
          
          var btnBidNow = new voltmx.ui.Button({
            
            id: "btnBidNow"+i,
            centerX: "60%",
            centerY: "50%",
            text: "Bid Now",
            skin: "sknBtnBidNow",
            width: "80%",
            height: "60%"
            
          });



          
          
            flxHeart.add(imgHeartIcon);
            flxFeaturedAuctionsItemTop.add(flxHeart);
            flxLive.add(lblLive);
            flxLive.add(imgLiveIcon);
           flxFeaturedAuctionsItemTop.add(flxLive);
           flxFeaturedAuctionsItemTop.add(flxCountDown);
           flxFeaturedAuctionsItemTop.add(imgFeaturedAuctions);
           flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemTop);
          flxFeaturedAuctionsItemBottom.add(lblCarname);
          flxFeaturedAuctionsItemBottom.add(lblLocation);
           
          flxBidPortionCurrentBid.add(lblCurrentBidText);
          flxBidPortionCurrentBid.add(lblBidRate);
           flxBidPortion.add(flxBidPortionCurrentBid);
          
           flxBidNow.add(btnBidNow);
          flxBidPortion.add(flxBidNow);
          
          flxFeaturedAuctionsItemBottom.add(flxBidPortion);
         
          
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemBottom);
            parentFlex.add(flexFeaturedAuctionsItem);
        }

        voltmx.print("exit from function");
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
    alert('Clicked')
     var imgHeart = this.view["imgHeartIconFromRecommended" + index]; // Get the image by ID

    if (imgHeart.src === "heartdislikerecommended.png") {
        imgHeart.src = "heartlikerecommended.png"; // Change to liked state
    } else {
        imgHeart.src = "heartdislikerecommended.png"; // Change back to unliked state
    }
  },
  
  createsIntoRecommendedFilter: function(){
     voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFilteredItems;
//           parentFlex.removeAll();


        for (var i = 0; i < 10; i++) {
            // Creating the main flex container for each widget
          
          
            var flxRecommendedFilterItems = new voltmx.ui.FlexContainer({
                id: "flxRecommendedFilterItems" + i,
                left: "10dp",
                width: "175dp", 
                height: "100%", 
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
//                 skin: "sknFlxFeaturedAuctionsItem",
              skin: "sknFlxBasic",
                clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
                
            }, {}, {});
          
          
            var flxRecommendedFilterItemsTop = new voltmx.ui.FlexContainer({
              
             id: "flxRecommendedFilterItemsTop" + i,
             centerX: "50%",
             height: "65%",
             width: "98%",
             zIndex:1,
             isVisible: true,
             top: "1%",
             skin: "sknFlxWhiteRoundedCorner",
             clipBounds: true
              
              
              
            },{},{});
          
          var imgRecommendedFilterItem = new voltmx.ui.Image2({
                id: "imgRecommendedFilterItem" + i,
                isVisible: true,
               src : "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
         
          
          var flxLikeFromRecommendedFilter = new voltmx.ui.FlexContainer({
              id: "flxLikeFromRecommendedFilter"+i,
            isVisible: true,
            clipBounds: false,
            left: "10%",
            bottom: "10%",
            skin: "sknflxCustom100WhiteRounded",
            width: "11%",
            height: "10%",
            zIndex: 2,
            onClick: this.toggleHeartStatusFromRecommended.bind(this,i)
          },{},{});
          
              var imgHeartIconFromRecommended = new voltmx.ui.Image2({
                id: "imgHeartIconFromRecommended" + i,
                isVisible: true,
               src : "heartdislikerecommended.png",
               centerY: "50%",
               centerX: "50%",
              width: "70%", 
                height: "70%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
           var flxShareFromRecommendedFilter = new voltmx.ui.FlexContainer({
            
            
              id: "flxShareFromRecommendedFilter"+i,
            isVisible: true,
            clipBounds: false,
            left: "25%",
            bottom: "10%",
            skin: "sknflxCustom100WhiteRounded",
            width: "15%",
            height: "10%",
            zIndex: 2
//             onClick: this.toggleHeartStatusFromRecommended.bind(this,i)
          },{},{});
           
            var imgShareIconFromRecommended = new voltmx.ui.Image2({
                id: "imgShareIconFromRecommended" + i,
                isVisible: true,
               src : "shareiconrecommended.png",
               centerY: "50%",
               centerX: "50%",
              width: "50%", 
                height: "50%",
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
               var flxPlayFromRecommendedFilter = new voltmx.ui.FlexContainer({

              id: "flxPlayFromRecommendedFilter"+i,
            isVisible: true,
            clipBounds: false,
            right: "10%",
            bottom: "10%",
            skin: "sknflxCustom100WhiteRounded",
            width: "11%",
            height: "10%",
            zIndex: 2
//             onClick: this.toggleHeartStatusFromRecommended.bind(this,i)
          },{},{});
          
               var imgPlayIconFromRecommended = new voltmx.ui.Image2({
                id: "imgPlayIconFromRecommended" + i,
                isVisible: true,
               src : "playicon.png",
               centerY: "50%",
               centerX: "50%",
              width: "60%", 
                height: "60%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
          var flxRecommendedFilterItemsBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxRecommendedFilterItemsBottom" + i,
             centerX: "50%",
             height: "35%",
             width: "100%",
             zIndex:1,
             isVisible: true,
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
            
            
          },{},{});
          
           var lblCountdownFromRecommendedFilter = new voltmx.ui.Label(
           {
                id: "lblCountdownFromRecommendedFilter" + i,
                text: "6D 6H 54M 29S", 
                isVisible: true,
                width: "preferred",
                left: "10%",
                top: "10%",
                skin: "sknLblCronosProBlack17px"
          }
          );
          
          var lblCarnameFromRecommendedFilter = new voltmx.ui.Label(
           {
                id: "lblCarnameFromRecommendedFilter" + i,
                text: "Suzuki Swift", 
                isVisible: true,
                width: "preferred",
                left: "10%",
                top: "10%",
                skin: "sknLblCronosProBlack17px"
          }
          );
          
            var lblCarpriceFromRecommendedFilter = new voltmx.ui.Label(
           {
                id: "lblCarpriceFromRecommendedFilter" + i,
                text: "5,85,000", 
                isVisible: true,
                width: "preferred",
                left: "10%",
                top: "10%",
                skin: "sknLblCronosPro04041512pxopa50"
          }
          );
          
           

           flxLikeFromRecommendedFilter.add(imgHeartIconFromRecommended);
            flxRecommendedFilterItemsTop.add(flxLikeFromRecommendedFilter);

           flxShareFromRecommendedFilter.add(imgShareIconFromRecommended);
           flxRecommendedFilterItemsTop.add(flxShareFromRecommendedFilter);
          
          flxPlayFromRecommendedFilter.add(imgPlayIconFromRecommended);
          flxRecommendedFilterItemsTop.add(flxPlayFromRecommendedFilter);
           
            
           
           
          flxRecommendedFilterItemsTop.add(imgRecommendedFilterItem);
          flxRecommendedFilterItems.add(flxRecommendedFilterItemsTop);
           flxRecommendedFilterItemsBottom.add(lblCountdownFromRecommendedFilter);
          flxRecommendedFilterItemsBottom.add(lblCarnameFromRecommendedFilter);
          flxRecommendedFilterItemsBottom.add(lblCarpriceFromRecommendedFilter);
         
          
          
          
          flxRecommendedFilterItems.add(flxRecommendedFilterItemsBottom);
            parentFlex.add(flxRecommendedFilterItems);
        }

        voltmx.print("exit from function");
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
  }

 });