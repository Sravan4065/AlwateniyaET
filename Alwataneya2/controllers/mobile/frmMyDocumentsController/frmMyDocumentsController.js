define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.preShow = this.onPreShow;
    this.view.segDocs.onRowClick = this.segDocsOnRowClickAction.bind(this);
    this.view.flxBack.onClick    = this.flxBackOnClickAction;
    this.view.flxUploadContainer.onClick = this.flxUploadContainerOnClick;
    this.view.btnBack.onClick = this.btnBackOnClickAction;
    this.view.btnSubmit.onClick = this.btnSubmitOnClickAction;
    this.view.flxPlus.onClick = this.flxPlusOnClickAction;
    this.view.flxDropDown.onClick = this.flxDropDownOnClickAction;
    this.view.segTypes.onRowClick = this.segTypesOnRowClickAction;
    this.view.btnUploadBackView.onClick = this.btnUploadBackViewOnClickAction;
  },
  onPreShow: function(){
    this.toggleFooterIcons();
     
    
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
  segDocsOnRowClickAction: function(){
    var self = this;
    var selectedSegDocs = self.view.segDocs.selectedRowItems;
//     alert("selected Seg Docs:"+selectedSegDocs);
    var selectedValue = selectedSegDocs[0].lblRowDocs;
    switch(selectedValue){
        case "Government IDs"      :   {
                                         var ntf = new voltmx.mvc.Navigation("frmGovtIds");
                                           ntf.navigate();
                                       }
                                       break;
        case "Trade Licenses"      :   {
        
                                       }
                                       break;
        case "VAT Certificates"    :   {
        
                                       }
                                       break; 
        case "Payment Receipt"     : {
        
                                      }
                                      break;
        case "Sale Letters"        :  {
        
                                      }
                                      break;
        case "Possession Letters"  : {
        
                                      }
                                      break;
        case "Inspection Reports"   : {
        
                                      }
                                      break;
    }
  },
  flxBackOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmOpenMyAccount");
    ntf.navigate();
  },
  flxUploadContainerOnClick: function(){
        var self = this;
  
     voltmx.phone.openMediaGallery(function(rawbytes) {
     if (rawbytes) {
           voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
       var testfilename = rawbytes.getResourcePath();
//        alert("testfilename"+testfilename);
       var filename =  rawbytes.getResourcePath().substring(rawbytes.getResourcePath().lastIndexOf("/") + 1);
//             this.view.flxUploadConfirmationinGsovtID.setVisibility(true);
//            .text = filename;
            
            // Convert to Base64 and store based on file index
            var base64Data = voltmx.convertToBase64(rawbytes);
          var filetype =  detectFileType(base64Data);
//        alert("type"+filetype);
       var filefullname = filename+filetype;
//        alert("fullname"+filefullname);
       this.filename =filefullname
           this.base64MyDocsUpload = base64Data;
            voltmx.print("Base64 : "+base64Data);
//        this.view.flxUploadedBackView
       self.view.flxUploadedFrontview.setVisibility(true);
       self.view.imgFrontView.base64 = base64Data;
       self.view.flxUploadPhotoClickArea.setVisibility(false);
       self.view.btnUploadBackView.setVisibility(true);
       self.view.btnSubmit.setEnabled(true);
       self.view.btnSubmit.skin ="sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px";
       //           self.createDamItems(type,filename,base64Data);
     }  }.bind(this), {}, {
        action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
        format: voltmx.phone.MEDIA_DOCUMENT_RAW,
              mimetype: "image/*"  // Set the mime type for images
//       mimetype: "application/*" 

    }
    );
  },
  btnBackOnClickAction: function(){
    
    if(this.view.imgFrontView.base64 ==="" &&  this.view.imgBackView.base64 === ""){
          this.view.flxUploadPopup.setVisibility(false);
    }
    else{
        this.view.imgFrontView.base64 ="";
        this.view.imgBackView.base64 = "";   
         this.view.btnSubmit.setEnabled(false);
    this.view.btnSubmit.skin="sknbtnBGccccccRoundedBordercccccc1pxFontDubaiReg767676Size40px";
    this.view.flxUploadPhotoClickArea.setVisibility(true);
    this.view.flxUploadedFrontview.setVisibility(false);
    this.view.flxUploadedBackView.setVisibility(false);
    }
    
  },
  btnSubmitOnClickAction: function(){
      var self = this;
    if( self.view.btnSubmit.skin === "sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px"){
   voltmx.application.showLoadingScreen();
var filename =  self.filename;
//     var filename = "image1.png";
// var userObj = voltmx.store.getItem("UserObj");
// var base64 =  voltmx.store.getItem("base64");
var type = voltmx.store.getItem("type");

// alert("UserObj :"+userObj);
// alert("UserObj :"+JSON.stringify(userObj));
var moduleName = "CreateItems";
var moduleType = "Customers";
var is_org = 1;
var user_token = voltmx.store.getItem("getUserAccesstoken");
var user_id = voltmx.store.getItem("userId");
// alert("userId :"+user_id);
var fileDetails = 
[{"is_thumbnail": "false",  
  "filename"    : filename, 
  "base64"      : this.base64MyDocsUpload.replaceAll('+','/plus/'),
  "type"        : type
 }];
var create_dam_items_inputparam = {};
create_dam_items_inputparam["serviceID"] = "fry_collection$create-dam-items";
var create_dam_items_httpheaders = {};
create_dam_items_inputparam["httpheaders"] = create_dam_items_httpheaders;
var create_dam_items_httpconfigs = {};
create_dam_items_inputparam["httpconfig"] = create_dam_items_httpconfigs;
// create_dam_items_inputparam["type"] = type;
 create_dam_items_inputparam["collectionId"] = "";
 create_dam_items_inputparam["moduleType"] = moduleType;
 create_dam_items_inputparam["user_id"] = user_id;
 create_dam_items_inputparam["moduleName"] = moduleName;
 create_dam_items_inputparam["file_details"] = fileDetails;
 create_dam_items_inputparam["user_token"] = user_token;
 create_dam_items_inputparam["is_org"] = is_org;

fry_collection$create_dam_items = 
mfintegrationsecureinvokerasync(
create_dam_items_inputparam, 
"fry_collection", 
"create-dam-items", 
function(status,response){
// alert("create dam items service response :"+JSON.stringify(response));
// alert("status: "+status);
 
  if(response.opstatus === 0){
   
     if(response.message === "Success"){
          voltmx.application.dismissLoadingScreen();
//     alert("Sucess"+response.message);
       alert("Uploaded Successfully");
//     alert("Response for upload : "+JSON.stringify(response));
       self.view.flxUploadPopup.setVisibility(false);
//     alert("request :"+JSON.stringify(create_dam_items_inputparam));
//     voltmx.print("request :"+JSON.stringify(create_dam_items_inputparam));

  }
    else{
      alert("file upload failed!!")
    }
  }
  else{
    voltmx.application.dismissLoadingScreen();
    alert("file upload response: "+JSON.stringify(response));
    alert("Backend Request Failed, Please try Again!!");
  }
//  var x = new voltmx.mvc.Navigation("frmDashBoard");
//   x.navigate();
});
  }
  },
  
  flxPlusOnClickAction: function(){
    this.view.flxUploadPopup.setVisibility(true);
    this.view.btnSubmit.setEnabled(false);
    this.view.btnSubmit.skin="sknbtnBGccccccRoundedBordercccccc1pxFontDubaiReg767676Size40px";
  },
  flxDropDownOnClickAction: function(){
    if(this.view.imgUpArrow.isVisible){
       this.view.flxDocTypeDropDownList.setVisibility(false);
      this.view.imgDropDown.setVisibility(true);
      this.view.imgUpArrow.setVisibility(false);
    }
    else if(this.view.imgDropDown.isVisible){
      this.view.flxDocTypeDropDownList.setVisibility(true);
       this.view.imgUpArrow.setVisibility(true);
       this.view.imgDropDown.setVisibility(false);
    }
    
  },
  segTypesOnRowClickAction: function(){
  var selectedType = this.view.segTypes.selectedRowItems;
//     alert("selectedType:"+selectedType);
    var selectedType2 = selectedType[0].lblType;
    this.view.lblSelect.text = selectedType[0].lblType;
    this.view.lblBackView.text =  selectedType[0].lblType+" Back View";
    this.view.lblFrontView.text =  selectedType[0].lblType+" Front View";
    this.view.btnUploadBackView.text ="Upload "+selectedType[0].lblType+" Back Copy";
    if(this.view.lblSelect.text!==""){
      this.view.flxDocTypeDropDownList.setVisibility(false);
      this.view.imgUpArrow.setVisibility(false);
      this.view.imgDropDown.setVisibility(true);
    }
    if(selectedType2 === "Emirates ID"){
      voltmx.store.setItem("type","GonvtId")
    }
  },
  btnUploadBackViewOnClickAction: function(){
      var self = this;
  
     voltmx.phone.openMediaGallery(function(rawbytes) {
     if (rawbytes) {
           voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
       var filename =  rawbytes.getResourcePath().substring(rawbytes.getResourcePath().lastIndexOf("/") + 1);
//             this.view.flxUploadConfirmationinGsovtID.setVisibility(true);
//            .text = filename;
            voltmx.store.setItem("filename",filename);
            // Convert to Base64 and store based on file index
            let base64Data = voltmx.convertToBase64(rawbytes);
//            this.base64MyDocsUpload = base64Data;
//             voltmx.print("Base64 : "+base64Data);
//        this.view.flxUploadedBackView
      self.view.flxUploadedBackView.setVisibility(true);
       self.view.imgBackView.base64 = base64Data;
       self.view.flxUploadPhotoClickArea.setVisibility(false);
       self.view.btnUploadBackView.setVisibility(false);
//           self.createDamItems(type,filename,base64Data);
     }  }.bind(this), {}, {
        action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
        format: voltmx.phone.MEDIA_DOCUMENT_RAW,
      //         mimetype: "image/*"  // Set the mime type for images
      mimetype: "application/*" 

    }
    );
  }
 });