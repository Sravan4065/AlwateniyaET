
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
    this.view.flxKeyDownArrow.onClick = this.flxKeyDownArrowAction;
    this.view.flxkeyUparrow.onClick = this.flxkeyUparrowAction;
    this.view.preShow = this.onPreShow.bind(this);
    this.view.SegCatageoryList.onRowClick = this.segOnRowClickActionCategory;
    this.view.segSubcatageory.onRowClick = this.segOnRowClickSubCategoryAction;
    this.view.segYearOfMake.onRowClick = this.segYearOfMakeonRowClickAction;
    this.view.SegBranches.onRowClick = this.BranchesonRowClickAction;
    this.view.segKeys.onRowClick = this.keysonRowClickAction;
    this.view.btnSubmit.onClick = this.submitOnClickAction;
    this.view.tbxCatageory.onTextChange = this.searchJournel.bind(this,"category");
    this.view.tbxSubcatageory.onTextChange = this.searchJournel.bind(this,"subcategory");
    this.view.tbxYearOfMaking.onTextChange = this.searchJournel.bind(this,"year");

  },
  onPreShow: function(){
    this.getCategories();
    this.getYearOfMake();
    this.toggleFooterIcons();
    this.getKeys();
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
  flxKeyDownArrowAction: function(){
    this.view.flxKeyDownArrow.setVisibility(false);
    this.view.flxKeydropdown.setVisibility(true);
    this.view.flxkeyUparrow.setVisibility(true);
  },
  YearOfMakeUpArrowAction: function(){
    this.view.flxYearOfMakeUpArrow.setVisibility(false);
    this.view.flxYearMakeDropDownList.setVisibility(false);
    this.view.flxYearOfMakeDownArrow.setVisibility(true);
  },
  flxkeyUparrowAction: function(){
  this.view.flxkeyUparrow.setVisibility(false);
    this.view.flxKeydropdown.setVisibility(false);
    this.view.flxKeyDownArrow.setVisibility(true);
  },
  searchJournel: function(type) {
    var item = [];
    var searchValue = "";
    var segLabelName = "";

    // Set the item array, search text, and label name based on type
    switch (type) {
      case "category":
        item = this.catarray;
        searchValue = this.view.tbxCatageory.text;
        segLabelName = "lblCatageyName";
        break;
      case "subcategory":
        item = this.subcatarray;
        searchValue = this.view.tbxSubcatageory.text;
        segLabelName = "lblBranchname";
        break;
      case "year":
        item = this.yeararray;
        searchValue = this.view.tbxYearOfMaking.text;
        segLabelName = "lblYearMake";
        break;
      default:
        return false; // Invalid type
    }

    // Validate array and search input
    if (!Array.isArray(item) || !searchValue) {
      return false;
    }

    var sData = [];

    var pattern = searchValue.trim().toUpperCase();

    for (var i = 0; i < item.length; i++) {
      var labelValue = item[i][segLabelName];
      if (labelValue && labelValue.toUpperCase().includes(pattern)) {
        sData.push(item[i]);
      }
    }

    // Update the corresponding segment
    switch (type) {
      case "category":
        this.view.SegCatageoryList.setData(sData);
        break;
      case "subcategory":
        this.view.segSubcatageory.setData(sData);
        break;
      case "year":
        this.view.segYearOfMake.setData(sData);
        break;
    }
  },

  getCategories: function() {
    var self = this;
    //     alert("Entered into getCategories!!!!");

    var id = 1;
    var asset_name ="fleet";



    var AssetCategoriesMasterValues_inputparam = AssetCategoriesMasterValues_inputparam||{};

    AssetCategoriesMasterValues_inputparam["serviceID"] = "fry_int_fleet$asset-categories-master-values";
    AssetCategoriesMasterValues_inputparam["category_id"] = id;//what we need to pass here?
    AssetCategoriesMasterValues_inputparam["asset_name"] = asset_name;//what we need to pass here?
    var AssetCategoriesMasterValues_httpheaders = {};
    AssetCategoriesMasterValues_inputparam["httpheaders"] = AssetCategoriesMasterValues_httpheaders;
    var AssetCategoriesMasterValues_httpconfigs = {};
    AssetCategoriesMasterValues_inputparam["httpconfig"] = AssetCategoriesMasterValues_httpconfigs;
    fry_int_fleet$asset_categories_master_values = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "fry_int_fleet", "asset-categories-master-values", 
                                                                                   function(status, response) {

      voltmx.print("response: " + JSON.stringify(response));
      //       alert("response: " + JSON.stringify(response));

      //       alert("cat_name : "+response.records[0].cat_name);
      var cat_array = [];
      response.records.forEach(res=>{
        cat_array.push({
          "lblCatageyName": res.cat_name,
          "lblId": res.cat_id // Convert ID to string if needed
        });
      });

      self.view.SegCatageoryList.setData(cat_array);
      self.catarray = cat_array;
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

    AssetCategoriesMasterValues_inputparam["serviceID"] = "fry_int_fleet$asset-categories-master-values";
    AssetCategoriesMasterValues_inputparam["category_id"] = gettedId;//what we need to pass here?
    AssetCategoriesMasterValues_inputparam["asset_name"] = asset_name;//what we need to pass here?
    var AssetCategoriesMasterValues_httpheaders = {};
    AssetCategoriesMasterValues_inputparam["httpheaders"] = AssetCategoriesMasterValues_httpheaders;
    var AssetCategoriesMasterValues_httpconfigs = {};
    AssetCategoriesMasterValues_inputparam["httpconfig"] = AssetCategoriesMasterValues_httpconfigs;
    fry_int_fleet$asset_categories_master_values = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "fry_int_fleet", "asset-categories-master-values", 
                                                                                   function(status, response) {

      //             voltmx.print("response from subCategory  dATA: " + JSON.stringify(response));
      //       alert("response from subCategory  dATA:" + JSON.stringify(response));


      var cat_array= [];
      response.records.forEach(res=>{

        cat_array.push({
          "lblBranchname": res.cat_name,
          "lblId"        : res.cat_id // Convert ID to string if needed

        });
      });
      //                 alert("second funciton ending!!!"+cat_array);
      //      alert("json cat_array sub cat:"+JSON.stringify(cat_array));
      self.view.segSubcatageory.setData(cat_array);
      self.subcatarray = cat_array;
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
      //       alert("Json REesponse for year mae:"+JSON.stringify(response));
      var year_of_make_id = response.data[0].year_make[0].id;
      //       alert("year_of_make_id :"+year_of_make_id);
      //       voltmx.store.setItem("yearOfMakeId", year_of_make_id);
      var year_array = [];

      var rawYearData = response.data[0].year_make;

      var sortedYears = rawYearData.sort((a, b) => Number(b.value) - Number(a.value));


      sortedYears.forEach(res=>{
        year_array.push({
          "lblYearMake"  : res.value,
          "lblYearMakeId": res.id
        });
      });
      //       alert("year array :"+year_array);
      self.view.segYearOfMake.setData(year_array);
      self.yeararray = year_array;

    });
  },

  getKeys: function(){
    var self = this;
    //     alert("Entered into GetYearOf AMAKE");
    var FleetSpecMasterValues_inputparam = FleetSpecMasterValues_inputparam|| {};

    FleetSpecMasterValues_inputparam["serviceID"] = "fry_int_fleet$master-fleet-spec-values";
    FleetSpecMasterValues_inputparam["spec_list"] = "keys";
    var FleetSpecMasterValues_httpheaders = {};
    FleetSpecMasterValues_inputparam["httpheaders"] = FleetSpecMasterValues_httpheaders;
    var FleetSpecMasterValues_httpconfigs = {};
    FleetSpecMasterValues_inputparam["httpconfig"] = FleetSpecMasterValues_httpconfigs;
    fry_int_fleet$master_fleet_spec_values = mfintegrationsecureinvokerasync(FleetSpecMasterValues_inputparam, "fry_int_fleet", "master-fleet-spec-values", function(status, response){
      //             alert("response : "+response);
//       alert("Json REesponse for keys:"+JSON.stringify(response));
      var year_of_make_id = response.data[0].keys[0].id;

      var keys_array = [];

      var rawYearData = response.data[0].keys;

      var sortedYears = rawYearData.sort((a, b) => Number(b.value) - Number(a.value));


      sortedYears.forEach(res=>{
        keys_array.push({
          "lblKeylist"  : res.value,
          "lblKeyId": res.id
        });
      });
      //       alert("year array :"+year_array);
      self.view.segKeys.setData(keys_array);

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
    self.view.tbxKeyInnername.text = selectedKey[0].lblKeylist;
    this.view.flxKeydropdown.setVisibility(false);
    voltmx.store.setItem("KeysSelected", selectedKey[0].lblKeylist);
  },
  submitOnClickAction: function(){
    var self = this;
    var category_id =  voltmx.store.getItem("categoriesSelectedRowId");
    var asset_name = voltmx.store.getItem("categoriesSelectedRowName");
    var sub_Category_id = voltmx.store.getItem("SubCategorySelectedRowId");
    var year_Of_Make = voltmx.store.getItem("YearOfMakeSelected");
    var branch = voltmx.store.getItem("BranchesSelected");
    var keys = voltmx.store.getItem("KeysSelected");
    var userObj = voltmx.store.getItem("userObject");
    var yearOfMakeId =  voltmx.store.getItem("yearOfMakeId");
    //     alert("Json responmse :"+JSON.stringify(userObj));
    // var UserObjJson = JSON.parse(userObj);
    var UserObjJsonDataAccessToken = userObj.rawResponse.access_token;
    var targetSellingPrice = 15000;
    var addAFleet_inputParam = addAFleet_inputParam || {};
    addAFleet_inputParam["serviceId"] = "ms_fleet$addfleet";
    addAFleet_inputParam["category_id"] =  voltmx.visualizer.toNumber(category_id);
    addAFleet_inputParam["sub_category_id"] = voltmx.visualizer.toNumber(sub_Category_id);
    addAFleet_inputParam["year_of_making"] =voltmx.visualizer.toNumber(year_Of_Make);
    addAFleet_inputParam["branch"] =voltmx.visualizer.toNumber(branch);
    addAFleet_inputParam["no_of_keys"] = voltmx.visualizer.toNumber(keys);
    addAFleet_inputParam["target_selling_price"] = targetSellingPrice;
    addAFleet_inputParam["chassis_number"] = self.view.tbxChasisofNumber.text;
    addAFleet_inputParam["minimum_selling_price"] = voltmx.visualizer.toNumber(this.view.tbxMinimumSellingPrice.text); 
    addAFleet_inputParam["previous_numberplate"] = this.view.tbxNumberPlate.text;
    addAFleet_inputParam["color"] = 37;
    //     alert("UserObjJsonData Access token:"+UserObjJsonDataAccessToken);
    var addAFleet_httpheaders = {
      "user_token": UserObjJsonDataAccessToken,
      "jwt_token": ""
    };
    addAFleet_inputParam["httpheaders"] = addAFleet_httpheaders;

    var addAFleet_httpconfigs = {};
    addAFleet_inputParam["httpconfig"] = addAFleet_httpconfigs;

    ms_fleet$addfleet  = mfintegrationsecureinvokerasync(
      addAFleet_inputParam,
      "ms_fleet",
      "addfleet", 
      function(status, response){
        //         alert("Json Response from Adda fleet : "+JSON.stringify(response));
        if(response.opstatus === 0){
          alert("Fleet Has Been Created Successfully!!!!!");

          var ntf = new voltmx.mvc.Navigation("frmDashBoard");
          ntf.navigate();
          //            alert(response.data.message+" Your Object Id is : "+response.data.object_id);
          //           alert(UserObjJsonData.data.message+" Your Object Id is : "+UserObjJsonData.data.object_id);
        }
        else{
          alert("status : "+status);
        }
      });
  }



});