define({ 

 //Type your controller code here 
  onNavigate: function()
{
  this.view.preShow = this.onPreShow.bind(this);
} , 
  
  
  onPreShow: function(){
    this.flxonClickAction();
    this.toggleFooterIcons();
  },
  
   toggleFooterIcons: function()
  {
  this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(true);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
   this.view.Footer2.imgMyBids.src = "mybidsfooteractive.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldDisp333333Font200";
    
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
  flxonClickAction: function(){
    this.view.flxActiveCarsList.onClick =this.onActivebidsonClick.bind(this);
    this.view.flxWiningbidslist.onClick =this.onWinningbidsOnclick.bind(this);
    this.view.flxlostbid.onClick =this.onLostbidsonClick;
  },
  onActivebidsonClick: function(){
     this.view.flxlostbid.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(false);
    this.view.flxActiveCarsList.setVisibility(true);
  },
  
  onWinningbidsOnclick: function(){
    this.view.flxlostbid.setVisibility(false);
    this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(true);
  },
  
  onLostbidsonClick: function(){
    this.view.flxWiningbidslist.setVisibility(false);
     this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxlostbid.setVisibility(true);
  },
  

 });