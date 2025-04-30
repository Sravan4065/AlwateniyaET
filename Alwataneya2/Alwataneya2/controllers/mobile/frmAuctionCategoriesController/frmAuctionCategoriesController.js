define({ 

 onNavigate: function()
{
  this.view.flxVehicles.onClick = this.navToVehicleAuction.bind(this);
  this.view.flxProperties.onClick = this.navToComingSoon.bind(this);
},
  
 navToVehicleAuction: function(){
   var x = new voltmx.mvc.Navigation("frmAllAuctionsList");
   x.navigate();
 },
  navToComingSoon: function(){
    var x = new voltmx.mvc.Navigation("frmCominSoon");
   x.navigate();
  }
 });