define({ 

 onNavigate: function(){
   
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   
 },
  
  backToPreviousForm: function() {
 
  
    var x = new voltmx.mvc.Navigation("frmProfile");
    x.navigate();
  
}
  

 });