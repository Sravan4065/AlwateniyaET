define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.flxBackNav.onClick= this.flxBackNavOnClickAction;
    this.view.preShow = this.onPreShow;
  },
  flxBackNavOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmMyDocuments");
    ntf.navigate();
  },
  onPreShow: function(){
    this.toggleFooterIcons();
    this.createDynamicGovtSeg();
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
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
  createDynamicGovtSeg: function(){

    this.view.segGovtIds.widgetDataMap = {
      "lblIdName" : "lblIdName",
      "btnStatus" : "btnStatus",
      "imgUpload" : "imgUpload",
      "imgEyeOpen": "imgEyeOpen",
      "flxUpload" : "flxUpload",
      "flxEyeOpen": "flxEyeOpen"
    };
    // Dummy Data for Segment (Modify as Needed)
    var data = [
      {
        "imgUpload" : "material_symbols_light_upload.png",
        "imgEyeOpen": "lsicon_view_outline.png",
        "lblIdName" : "Passport",
        "btnStatus" : {
                       "text": "Under Review",
                       "skin": "sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px",
                      }
      },
      {
        "imgUpload" : "material_symbols_light_upload.png",
        "imgEyeOpen": "lsicon_view_outline.png",
        "lblIdName" : "UAE Pass",
        "btnStatus" : {
                       "text": "Verified",
                       "skin": "sknbtnBGd32437Fontffffff45pxRoundedBorder1px"
                      }

      },
      {
        "imgUpload" : "material_symbols_light_upload.png",
        "imgEyeOpen": "lsicon_view_outline.png",
        "lblIdName" : "Driving License",
        "btnStatus" : {
                       "text": "Not Uploaded",
                       "skin": "sknbtnBG767676Fontffffff45pxRoundedBorder1px"
                      }
      }
    
    ];
    // Set data to the segment
  this.view.segGovtIds.setData(data);

  }
});