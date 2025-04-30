define({ 

  onNavigate: function(){
   
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   
 },
  
  backToPreviousForm: function() {
  var previousForm = voltmx.application.getPreviousForm();
  if (previousForm && previousForm.id) {
    var x = new voltmx.mvc.Navigation(previousForm.id);
    x.navigate();
  } else {
    voltmx.print("No previous form found!");
  }
}
  

 });