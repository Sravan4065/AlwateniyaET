define({ 

 //Type your controller code here 

  pdfCheck: function() {

    try {

      
      var VoltMXMain = java.import("com.konylabs.android.KonyMain"); 
     var PdfPickerActivity = java.import("com.example.pdffileupload.TestNfi");
     PdfPickerActivity.pdfCallback = this.pdfCallback;
     var activityContext = VoltMXMain.getActivityContext();
     var Intent  = java.import("android.content.Intent");
     var intentObj =  new Intent(activityContext, PdfPickerActivity.class);
     activityContext.startActivity(intentObj);
      
    } catch (e) {
        alert("Error: " + e.message);
    }
 },
  
  pdfCallback: function ( data) {
    voltmx.print( "selcted pdf callback data:::" + data) ;
    alert("Filename selected :::"+data);
//     this.view.Label0a7cc320a541645.text =data;
    
  }
 });