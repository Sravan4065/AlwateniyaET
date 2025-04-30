
define({
  onNavigate: function(){
    this.view.flxDownArrow1.onClick = this.toggleItem.bind(this, this.view.flxInfo1Matter, this.view.imgDownArrow1);
    this.view.flxDownArrow2.onClick = this.toggleItem.bind(this, this.view.flxInfo2Matter, this.view.imgDownArrow2);
    this.view.flxDownArrow3.onClick = this.toggleItem.bind(this, this.view.flxInfo3Matter, this.view.imgDownArrow3);
    this.view.flxDownArrow4.onClick = this.toggleItem.bind(this, this.view.flxInfo4Matter, this.view.imgDownArrow4);
    this.view.flxDownArrow5.onClick = this.toggleItem.bind(this, this.view.flxInfo5Matter, this.view.imgDownArrow5);
    this.view.btnContactUs.onClick = this.openContactUs.bind(this);
  },

  toggleItem: function(flx, img){
    // Check if the clicked flex is already visible
    if (!flx.isVisible) {
      // Hide all flexes and reset all arrows
      this.view.flxInfo1Matter.setVisibility(false);
      this.view.flxInfo2Matter.setVisibility(false);
      this.view.flxInfo3Matter.setVisibility(false);
      this.view.flxInfo4Matter.setVisibility(false);
      this.view.flxInfo5Matter.setVisibility(false);

      this.view.imgDownArrow1.src = "downarrowfromvehicleinsp.png";
      this.view.imgDownArrow2.src = "downarrowfromvehicleinsp.png";
      this.view.imgDownArrow3.src = "downarrowfromvehicleinsp.png";
      this.view.imgDownArrow4.src = "downarrowfromvehicleinsp.png";
      this.view.imgDownArrow5.src = "downarrowfromvehicleinsp.png";

      // Now show the clicked flex and set the arrow to up
      flx.setVisibility(true);
      img.src = "uparrowfromvehicleinsp.png";
    }
    else {
      // If the clicked flex is already visible, close it and reset the arrow
      flx.setVisibility(false);
      img.src = "downarrowfromvehicleinsp.png";
    }
  },
  
  openContactUs: function(){
    this.view.Header2WithLatestMenu.flxContactPopup.setVisibility(true);
    this.view.flxHeader.zIndex = "2";
  }
});
