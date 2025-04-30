define({ 

  //Type your controller code here 
  onNavigate: function(){
    //     alert("Entered into on Navigate");
    this.view.flxDownArrowCategory.onClick = this.CategoryDownArrow;
    this.view.flxUpArrowCategory.onClick = this.CategoryUpArrow;
    this.view.flxsubcatageoryDownArrow.onClick = this.SubCategoryDownArrow;
    this.view.flxSubcatagryUparrow.onClick = this.SubCategoryUpArrow;
    this.view.flxBranchDownArrow.onClick = this.BranchDownArrow;
    this.view.flxBranchUparrow.onClick = this.BranchUpArrow;
    this.view.flxYearOfMakeDownArrow.onClick = this.YearOfMakeDownArrowAction;
    this.view.flxYearOfMakeUpArrow.onClick = this.YearOfMakeUpArrowAction;
    this.view.preShow = this.onPreShow.bind(this);
    this.view.SegCatageoryList.onRowClick = this.segOnRowClickActionCategory;
    this.view.segSubcatageory.onRowClick = this.segOnRowClickSubCategoryAction;
    this.view.segYearOfMake.onRowClick = this.segYearOfMakeonRowClickAction;
    this.view.SegBranches.onRowClick = this.BranchesonRowClickAction;
    this.view.segKeys.onRowClick = this.keysonRowClickAction;
    this.view.btnSubmit.onClick = this.submitOnClickAction;
  },
  onPreShow: function(){
    this.getCategories();
    this.getYearOfMake();

  },

  CategoryDownArrow: function(){
    //     alert("+Down Aroow")
    this.view.flxDownArrowCategory.setVisibility(false);
    this.view.flxCatageryListDropdown.setVisibility(true);
    this.view.flxUpArrowCategory.setVisibility(true);

  },
  CategoryUpArrow: function(){
    //     alert("Up Aroow");
    this.view.flxCatageryListDropdown.setVisibility(false);
    this.view.flxUpArrowCategory.setVisibility(false);
    this.view.flxDownArrowCategory.setVisibility(true);
  },
  SubCategoryDownArrow: function(){
    this.view.flxsubcatageoryDownArrow.setVisibility(false);
    this.view.flxSubcatageoryDropdown.setVisibility(true);
    this.view.flxSubcatagryUparrow.setVisibility(true);
  },
  SubCategoryUpArrow: function(){
    this.view.flxSubcatagryUparrow.setVisibility(false);
    this.view.flxSubcatageoryDropdown.setVisibility(false);
    this.view.flxsubcatageoryDownArrow.setVisibility(true);

  },
  BranchDownArrow: function(){
    this.view.flxBranchDownArrow.setVisibility(false);
    this.view.flxBranchDropdown.setVisibility(true);
    this.view.flxBranchUparrow.setVisibility(true);
  },
  BranchUpArrow: function(){
    this.view.flxBranchUparrow.setVisibility(false);
    this.view.flxBranchDropdown.setVisibility(false);
    this.view.flxBranchDownArrow.setVisibility(true);
  },
  YearOfMakeDownArrowAction: function(){
    this.view.flxYearOfMakeDownArrow.setVisibility(false);
    this.view.flxYearMakeDropDownList.setVisibility(true);
    this.view.flxYearOfMakeUpArrow.setVisibility(true);
  },
  YearOfMakeUpArrowAction: function(){
    this.view.flxYearOfMakeUpArrow.setVisibility(false);
    this.view.flxYearMakeDropDownList.setVisibility(false);
    this.view.flxYearOfMakeDownArrow.setVisibility(true);
  },



  getCategories: function() {
    var self = this;
    //     alert("Entered into getCategories!!!!");

    var id = 1;
    var asset_name ="fleet";



    var AssetCategoriesMasterValues_inputparam = AssetCategoriesMasterValues_inputparam||{};

    AssetCategoriesMasterValues_inputparam["serviceID"] = "ms_fleet$asset-categories-master-values";
    AssetCategoriesMasterValues_inputparam["category_id"] = id;//what we need to pass here?
    AssetCategoriesMasterValues_inputparam["asset_name"] = asset_name;//what we need to pass here?
    var AssetCategoriesMasterValues_httpheaders = {};
    AssetCategoriesMasterValues_inputparam["httpheaders"] = AssetCategoriesMasterValues_httpheaders;
    var AssetCategoriesMasterValues_httpconfigs = {};
    AssetCategoriesMasterValues_inputparam["httpconfig"] = AssetCategoriesMasterValues_httpconfigs;
   ms_fleet$asset_categories_master_values = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "ms_fleet", "asset-categories-master-values", 
                                                                                 function(status, response) {

            voltmx.print("response: " + JSON.stringify(response));
//             alert("response: " + JSON.stringify(response));

//       alert("cat_name : "+response.data[0].cat_name);
      var cat_array = [];
      response.data.forEach(res=>{
        cat_array.push({
          "lblCatageyName": res.cat_name,
          "lblId": res.cat_id // Convert ID to string if needed
        });
      });
     
      self.view.SegCatageoryList.setData(cat_array);
    });

  },

  segOnRowClickActionCategory: function(){
    var catSelectedRow = this.view.SegCatageoryList.selectedRowItems;
    //     alert("catSelectedRow : " +catSelectedRow);
    var setedName =voltmx.store.setItem("categoriesSelectedRowName", catSelectedRow[0].lblCatageyName);
    var setedId = voltmx.store.setItem("categoriesSelectedRowId", catSelectedRow[0].lblId);
    //     alert("categoriesSelectedRow value :"+setedName);
    //     alert("setedid : "+setedId);
    this.view.tbxCatageory.text = catSelectedRow[0].lblCatageyName;
    this.view.flxCatageryListDropdown.setVisibility(false);
    this.subCategoryData();
    //     this.view.tbxCatageory.text = this.view.tbxCatageory.text;
    // var id = 
    // var id = 
    // alert("selected row :"+catSelectedRow);
  },
  subCategoryData: function(){
    var self = this;
    //     alert("Entered into getCategories!!!!");


    var asset_name ="fleet";

    var gettedId = voltmx.store.getItem("categoriesSelectedRowId");
    var AssetCategoriesMasterValues_inputparam = AssetCategoriesMasterValues_inputparam||{};

    AssetCategoriesMasterValues_inputparam["serviceID"] = "ms_fleet$asset-categories-master-values";
    AssetCategoriesMasterValues_inputparam["category_id"] = gettedId;//what we need to pass here?
    AssetCategoriesMasterValues_inputparam["asset_name"] = asset_name;//what we need to pass here?
    var AssetCategoriesMasterValues_httpheaders = {};
    AssetCategoriesMasterValues_inputparam["httpheaders"] = AssetCategoriesMasterValues_httpheaders;
    var AssetCategoriesMasterValues_httpconfigs = {};
    AssetCategoriesMasterValues_inputparam["httpconfig"] = AssetCategoriesMasterValues_httpconfigs;
   ms_fleet$asset_categories_master_values = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "ms_fleet", "asset-categories-master-values", 
                                                                                 function(status, response) {

//             voltmx.print("response from subCategory  dATA: " + JSON.stringify(response));
//             alert("response from subCategory  dATA:" + JSON.stringify(response));


      var cat_array= [];
      response.data.forEach(res=>{

        cat_array.push({
          "lblBranchname": res.cat_name,
           "lblId"        : res.cat_id // Convert ID to string if needed

        });
      });
//                 alert("second funciton ending!!!"+cat_array);
//      alert("json cat_array sub cat:"+JSON.stringify(cat_array));
      self.view.segSubcatageory.setData(cat_array);
    });


  }, 
  getYearOfMake: function(){
    var self = this;
//     alert("Entered into GetYearOf AMAKE");
    var FleetSpecMasterValues_inputparam = FleetSpecMasterValues_inputparam|| {};

    FleetSpecMasterValues_inputparam["serviceID"] = "fry_int_fleet$master-fleet-spec-values";
    FleetSpecMasterValues_inputparam["spec_list"] = "year_make";
    var FleetSpecMasterValues_httpheaders = {};
    FleetSpecMasterValues_inputparam["httpheaders"] = FleetSpecMasterValues_httpheaders;
    var FleetSpecMasterValues_httpconfigs = {};
    FleetSpecMasterValues_inputparam["httpconfig"] = FleetSpecMasterValues_httpconfigs;
    fry_int_fleet$master_fleet_spec_values = mfintegrationsecureinvokerasync(FleetSpecMasterValues_inputparam, "fry_int_fleet", "master-fleet-spec-values", function(status, response){
//             alert("response : "+response);
//             alert("Json REesponse for year mae:"+JSON.stringify(response));
      var year_of_make_id = response.data[0].year_make[0].id;
//       alert("year_of_make_id :"+year_of_make_id);
//       voltmx.store.setItem("yearOfMakeId", year_of_make_id);
      var year_array = [];
      

      response.data[0].year_make.forEach(res=>{
        year_array.push({
          "lblYearMake"  : res.value,
          "lblYearMakeId": res.id
        });
      });
      //       alert("year array :"+year_array);
      self.view.segYearOfMake.setData(year_array);

    });
  },


  segOnRowClickSubCategoryAction: function(){
    var self = this;
    var selectedSubCategory =  this.view.segSubcatageory.selectedRowItems;
//         alert("selectedSubCategory : "+selectedSubCategory);
    self.view.tbxSubcatageory.text = selectedSubCategory[0].lblBranchname;
    this.view.flxSubcatageoryDropdown.setVisibility(false);
    voltmx.store.setItem("subCategorySelected", selectedSubCategory[0].lblBranchname);
 voltmx.store.setItem("SubCategorySelectedRowId", selectedSubCategory[0].lblId);

  },
  segYearOfMakeonRowClickAction: function(){
    var self= this;
    var selectedYearOfMake =  this.view.segYearOfMake.selectedRowItems ;
    //     alert("selectedYearOfMake : "+selectedYearOfMake);
    self.view.tbxYearOfMaking.text= selectedYearOfMake[0].lblYearMake;
    this.view.flxYearMakeDropDownList.setVisibility(false);
    voltmx.store.setItem("YearOfMakeSelected", selectedYearOfMake[0].lblYearMake);
    voltmx.store.setItem("yearOfMakeId", selectedYearOfMake[0].lblYearMakeId);
  },
  BranchesonRowClickAction: function(){

    var self = this;

    var selectedBranch = this.view.SegBranches.selectedRowItems;
    //     alert("selectedBranch : "+selectedBranch);
    self.view.tbxBranchName.text = selectedBranch[0].lblBranchName;
    this.view.flxBranchDropdown.setVisibility(false);
    voltmx.store.setItem("BranchesSelected", selectedBranch[0].lblBranchName);
  },
  keysonRowClickAction: function(){
    var self = this;

    var selectedKey = this.view.segKeys.selectedRowItems;
    //     alert("selectedKey :"+selectedKey);
    this.view.tbxKeyInnername.text = selectedKey[0].lblKeylist;
    this.view.flxKeydropdown.setVisibility(false);
    voltmx.store.setItem("KeysSelected", selectedKey[0].lblKeylist);
  },
  submitOnClickAction: function(){
//     alert("Entered into Submit onclick....");
    var self = this;
  var category_id =  voltmx.store.getItem("categoriesSelectedRowId");
    var asset_name = voltmx.store.getItem("categoriesSelectedRowName");
    var sub_Category_id = voltmx.store.getItem("SubCategorySelectedRowId");
    var year_Of_Make = voltmx.store.getItem("YearOfMakeSelected");
    var branch = voltmx.store.getItem("BranchesSelected");
    var keys = voltmx.store.getItem("KeysSelected");
    var userObj = voltmx.store.getItem("UserObj");
    var yearOfMakeId =  voltmx.store.getItem("yearOfMakeId");
//     alert("UserObj :"+userObj);
//     alert("Json responmse :"+JSON.stringify(userObj));
   
var UserObjJson = JSON.parse(userObj);
var UserObjJsonDataAccessToken = UserObjJson.access_token;

//     JSON.parse(json, reviver?, value)
//     alert("UserObjJson: "+UserObjJson);
//         alert("UserObjJsonjson : "+JSON.stringify(UserObjJson));
//         alert("UserObjJsonData: "+JSON.stringify(UserObjJsonData));
//       var stringifiedJSON=JSON.stringify(UserObjJsonData).replace(/"/g, "'");
// var stringifiedWithSingleQuotes = stringifiedJSON.replace(/"/g, "'");

//         alert("stringifiedJSON: "+JSON.stringify(stringifiedJSON));
//         alert("stringifiedJSON: "+JSON.stringify(stringifiedJSON));
//     alert("vstringifiedJSON2 :"+stringifiedJSON);

//     var inputParams = {
//         httpheaders: {
//             "Content-Type": "application/json",
//             "X-Kony-Authorization": "<YOUR_SECOND_APP_AUTH_TOKEN>"
//         },
//         httpconfig: { method: "POST" }, // Change method as needed
//         data: { "param1": "value1" } // API parameters
//     };

//     kony.net.invokeServiceAsync(serviceURL, inputParams, function(status, response) {
//         if (status === 400) {
//             kony.print("Second Foundry App API Success: " + JSON.stringify(response));
//         } else {
//             kony.print("Second Foundry App API Failed: " + JSON.stringify(response));
//         }
//     });

//     var serviceURL = "https://dev-hcltx.et.ae:443/services/ms_fleet/api/v1/addfleet";
    var targetSellingPrice = 15000;
    var addAFleet_inputParam = addAFleet_inputParam || {};
    addAFleet_inputParam["serviceId"] = "ms_fleet$addfleet";
    addAFleet_inputParam["category_id"] =  voltmx.visualizer.toNumber(category_id);
//     addAFleet_inputParam["assetName"] = asset_name;
    addAFleet_inputParam["sub_category_id"] = voltmx.visualizer.toNumber(sub_Category_id);
    addAFleet_inputParam["year_of_making"] =voltmx.visualizer.toNumber(yearOfMakeId);
    addAFleet_inputParam["branch"] =voltmx.visualizer.toNumber(branch);
    addAFleet_inputParam["no_of_keys"] = voltmx.visualizer.toNumber(keys);
    addAFleet_inputParam["target_selling_price"] = targetSellingPrice;
//     addAFleet_inputParam["userObj"] =UserObjJsonData;
    addAFleet_inputParam["chassis_number"] = self.view.tbxChasisofNumber.text;
alert("UserObjJsonData Access token:"+UserObjJsonDataAccessToken);
        var addAFleet_httpheaders = {
          "user_token": UserObjJsonDataAccessToken
        };
    addAFleet_inputParam["httpheaders"] = addAFleet_httpheaders;
//     addAFleet_inputParam["httpheaders"] = UserObjJsonData;
    
var addAFleet_httpconfigs = {};
   addAFleet_inputParam["httpconfig"] = addAFleet_httpconfigs;
    
         ms_fleet$addfleet  = mfintegrationsecureinvokerasync(
//      kony.net.invokeServiceAsync(serviceURL, 
      addAFleet_inputParam,
      "ms_fleet",
      "addfleet", 
      function(status, response){
//     alert("Json status from Adda Fleet : "+JSON.stringify(status));
//        alert("Json Response from Adda fleet : "+JSON.stringify(response));
//           var ntf = voltmx.mvc.Navigation("frmDashBoard");
// ntf.navigate();
//         alert
//         alert(response.opstatus+"opstatus");
        if(response.opstatus === 0){
          
          var ntf = new voltmx.mvc.Navigation("frmDashBoard");
           ntf.navigate();
//           alert("Fleet Has Been Created Successfully!!!!!"+)
//                   alert(response.data.message+" Your Object Id is : "+response.data.object_id);
  
//           alert(UserObjJsonData.data.message+" Your Object Id is : "+UserObjJsonData.data.object_id);
       
        }
        else{
//           alert("response : null");
          alert("status : "+status);
//           alert("Given Response is having opstatus ")
        }
    });
                               }

//     try {
//   var UserObjJson = JSON.parse(userObj);
//   if (UserObjJson && UserObjJson.data) {
//     var UserObjJsonData = UserObjJson.data;
//     var stringifiedJSON = JSON.stringify(UserObjJsonData);

//     var targetSellingPrice = 15000;
//     var addAFleet_inputParam = addAFleet_inputParam || {};
//     addAFleet_inputParam["serviceId"] = "Al_Wataneya_Custom_Services$AddaFleet";
//     addAFleet_inputParam["category_id"] = voltmx.visualizer.toNumber(category_id);
//     addAFleet_inputParam["assetName"] = asset_name;
//     addAFleet_inputParam["sub_category_id"] = voltmx.visualizer.toNumber(sub_Category_id);
//     addAFleet_inputParam["year_of_making"] = voltmx.visualizer.toNumber(year_Of_Make);
//     addAFleet_inputParam["branch"] = voltmx.visualizer.toNumber(branch);
//     addAFleet_inputParam["no_of_keys"] = voltmx.visualizer.toNumber(keys);
//     addAFleet_inputParam["target_selling_price"] = targetSellingPrice;
//     addAFleet_inputParam["userObj"] = stringifiedJSON;
//     addAFleet_inputParam["chassis_number"] = self.view.tbxChasisofNumber.text;

//     var addAFleet_httpheaders = {};
//     addAFleet_inputParam["httpheaders"] = addAFleet_httpheaders;
//     var addAFleet_httpconfigs = {};
//     addAFleet_inputParam["httpconfig"] = addAFleet_httpconfigs;

//     Al_Wataneya_Custom_Services$AddaFleet = mfintegrationsecureinvokerasync(
//       addAFleet_inputParam,
//       "Al_Wataneya_Custom_Services",
//       "AddaFleet",
//       function(status, response) {
//         alert("Json status from Adda Fleet: " + JSON.stringify(status));
//         alert("Json Response from Adda Fleet: " + JSON.stringify(response));
//         if (response && response.opstatus === 0) {
//           var ntf = voltmx.mvc.Navigation("frmDashBoard");
//           ntf.navigate();
//         } else {
//           alert("Error: " + (response ? JSON.stringify(response) : "No response"));
//         }
//       }
//     );
//   } else {
//     alert("Invalid user object data.");
//   }
// } catch (e) {
//   alert("Error parsing user object: " + e.message);
// }
//   }

});