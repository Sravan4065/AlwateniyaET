define(function() {

	return {
      onNavigate: function(){
        this.view.flxSellCar.onClick = this.SellCarNavigation.bind(this);
       this.view.flxHome.onClick = this.navigateToDashboard.bind(this);
        this.view.flxAuctions.onClick = this.navigateToAllAuctions.bind(this);
        this.view.flxProfile.onClick = this.flxProfileOnClickAction.bind(this);
      },
         SellCarNavigation: function(){
           //If User Exists Navigate to sell Car List Page or Login Page!!x
//            alert(this.view.flxProfile.isVisible+"flxProfileIsVisisblre");
           if(this.view.flxProfile.isVisible){
               var ntf= new voltmx.mvc.Navigation("frmProfile");
           ntf.navigate();
           }
           else if(this.view.imgSellCar.isVisible){
           var ntf2= new voltmx.mvc.Navigation("frmLoginScreen");
           ntf2.navigate();
           }
         },
      navigateToDashboard: function(){
        var x = new voltmx.mvc.Navigation("frmDashBoard");
        x.navigate();
      },
      navigateToAllAuctions: function()
      {
          var x = new voltmx.mvc.Navigation("frmAuctionCategories");
        x.navigate();
      },
      
     navigateToMyBidsPage: function()
      {
        var x = new voltmx.mvc.Navigation("frmMyBidsPage");
        x.navigate();
      }
//       flxProfileOnClickAction: function(){
//          var ntf3= new voltmx.mvc.Navigation("frmMenuBar");
//            ntf3.navigate();
//       }
	};
});