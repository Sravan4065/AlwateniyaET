define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.flxFooter.onClick = this.NavigateToSignUpForm;
    this.view.btnSubmit.onClick = this.login.bind(this);
    this.view.preShow = this.onPreShow.bind(this);
//   this.view.btnSubmit.onClick = this.submitOnclickAction;
  },

  NavigateToSignUpForm: function(){
    var ntf = new voltmx.mvc.Navigation("frmRegister1");
    ntf.navigate();
  },
  
  onPreShow: function(){
    var previousForm = voltmx.application.getPreviousForm();
    if(previousForm){
      var id = previousForm.id;
      if(id === "frmRegister2"){
        voltmx.application.destroyForm("frmRegister2");
      }
    }
  },
  
  
  login: function(){
    var self = this;
    
     if (login_inputparam == undefined) {
        var login_inputparam = {};
    }
    
    function invSuccess(response) {
      alert("login success");
      var instance = voltmx.sdk.getCurrentInstance();
     if (instance.tokens && instance.tokens.DevAzureB2C && instance.tokens.DevAzureB2C.provider_token && instance.tokens.DevAzureB2C.provider_token.params) {
        var accesstoken = instance.tokens.DevAzureB2C.provider_token.params.access_token;
        var refreshtoken = instance.tokens.DevAzureB2C.provider_token.params.refresh_token;
        var expon = instance.tokens.DevAzureB2C.provider_token.params.expires_on;
        
        voltmx.store.setItem("accesstoken", accesstoken);
        voltmx.store.setItem("refreshtoken", refreshtoken);
        voltmx.store.setItem("expon", expon);
    } else {
        voltmx.print("Provider tokens missing after login!");
    }

      voltmx.store.setItem("isLogin",true);
      voltmx.store.setItem("isUserCreated",true);
      var x = new voltmx.mvc.Navigation("frmDashBoard");
      x.navigate();
      self.getUserObject();
      
    }
    function invFailure(error) {
      alert("login failed");
    }
    
    login_inputparam["serviceID"] = "DevAzureB2C$login";
    login_inputparam["operation"] = "login";
    login_inputparam["UseDeviceBrowser"] = true;
    //#ifdef preview
    //#ifdef iphone
    login_inputparam['success_url'] = "konyfunctionalpreview://";
    //#endif
    //#ifdef android
    login_inputparam['success_url'] = "https://www.hclvoltmx.com/marketplace/app_preview";
    //#endif
    //#ifdef androidwear
    login_inputparam['success_url'] = "https://www.hclvoltmx.com/marketplace/app_preview";
    //#endif
    //#ifdef ipad
    login_inputparam['success_url'] = "konyfunctionalpreview://";
    //#endif
    //#ifdef winphone8
    login_inputparam['success_url'] = "konyfunctionalpreview://";
    //#endif                        
    //#ifdef windows8
    login_inputparam['success_url'] = "konyfunctionalpreview://";
    //#endif
    //#else
    //#ifdef iphone
    login_inputparam['success_url'] = "alwataneya2://";
    //#endif
    //#ifdef android
    login_inputparam['success_url'] = encodeURIComponent("intent://com.orgname.Alwataneya2/#Intent;scheme=alwataneya2;package=com.orgname.Alwataneya2;end");
    //#endif
    //#ifdef androidwear
    login_inputparam['success_url'] = encodeURIComponent("intent://com.orgname.Alwataneya2/#Intent;scheme=alwataneya2;package=com.orgname.Alwataneya2;end");
    //#endif
    //#ifdef ipad
    login_inputparam['success_url'] = "alwataneya2://";
    //#endif
    //#ifdef winphone8
    login_inputparam['success_url'] = "alwataneya2://";
    //#endif                        
    //#ifdef windows8
    login_inputparam['success_url'] = "alwataneya2://";
    //#endif
    //#endif
    DevAzureB2C$login = mfidentityserviceinvoker("DevAzureB2C", login_inputparam, invSuccess, invFailure);

  },

  getUserObject: function()
  {
    
     var self = this;

    function invoke_service_callback(status, get_user_object) {
      voltmx.print(status);
//       alert(get_user_object);
//       alert("user object id:"+get_user_object.rawResponse.user_id);
     var getUserAccesstoken =  get_user_object.rawResponse.access_token;
      var userId = get_user_object.rawResponse.user_id;
      var userAccessTokenExp = get_user_object.rawResponse.expires_in;
      voltmx.store.setItem("userObject",get_user_object);
      voltmx.store.setItem("userId",userId);
      voltmx.store.setItem("getUserAccesstoken",getUserAccesstoken);
      voltmx.store.setItem("userAccessTokenExp",userAccessTokenExp);
      
      voltmx.store.setItem("username",get_user_object.rawResponse.nick);
    }
    if (get_user_object_inputparam == undefined) {
        var get_user_object_inputparam = {};
    }
    get_user_object_inputparam["serviceID"] = "ms_user$get-user-object";
    var get_user_object_httpheaders = {
        "jwt_azure_token": voltmx.store.getItem("accesstoken")
    };
    get_user_object_inputparam["httpheaders"] = get_user_object_httpheaders;
    var get_user_object_httpconfigs = {};
    get_user_object_inputparam["httpconfig"] = get_user_object_httpconfigs;
    ms_user$get_user_object = mfintegrationsecureinvokerasync(get_user_object_inputparam, "ms_user", "get-user-object", invoke_service_callback);
}
});