define({ 

 //Type your controller code here 


getData: function(){
  
  
 
    var self = this;
    var id = 4052;// Asset name
// Al_Wataneya_Custom_Services
    var AssetCategoriesMasterValues_inputparam = {
        "serviceID": "Al_Wataneya_Custom_Services$GetUserObj",
        "user_id": id,   // Pass ID dynamically here
      "user_source": "azure",
        "httpheaders": {},
        "httpconfig": {}
    };

    // Service call to fetch categories
    Al_Wataneya_Custom_Services$GetUserObj = mfintegrationsecureinvokerasync(
        AssetCategoriesMasterValues_inputparam,
        "Al_Wataneya_Custom_Services", 
        "GetUserObj",
        function(status, response) {
            var responseString = JSON.stringify(response);
//           self.anotherServiceCall(responseString);
          voltmx.store.setItem("UserObj", responseString);
          
          alert("Response from login: " + responseString);
          alert("Response from json Login : "+JSON.typeOf(responseString));
            voltmx.print("response: " + JSON.stringify(responseString));
          voltmx.print("response: " + responseString);
            
        }
    );


},
  
//   anotherServiceCall: function(responseString){
//      var anotherServiceInput = {
//         "serviceID" : "Al_Wataneya_Custom_Services$AddaFleet",  // Your service ID
//         "response_data": responseString  // Pass the response as a string
//     };

//     // Service call logic for the next service
//     mfintegrationsecureinvokerasync(
//         anotherServiceInput,
//         "Al_Wataneya_Custom_Services",  // Your service provider
//         "AddaFleet",    // Your method name
//         function(status, response) {
//             // Handle the response from this service call
//             voltmx.print("Response from AddaFleet service: " + JSON.stringify(response));
//             alert("Response from AddaFleet service: " + JSON.stringify(response));
//         }
//       );	
//   }

 });
