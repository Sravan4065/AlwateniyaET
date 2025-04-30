//Type your code here

// Function to print current epoch time
function currentEpochTime() {
  const epochMillis = new Date().getTime();
  voltmx.print("=============================");
  voltmx.print(epochMillis);
  voltmx.print("=============================");
}

// Function to check token validity
function checkTokenValidatity() {
  var epochMillis = new Date().getTime();
  var expires_in = Number(voltmx.store.getItem("userAccessTokenExp"));

  voltmx.print("Token expiration time: " + expires_in);
  voltmx.print("Current epoch time: " + epochMillis);

  if (expires_in < epochMillis) {
    voltmx.print("Token still valid. No need to refresh.");
  } else {
    voltmx.print("Token expired. Calling refresh service.");
    calling_service();
  }
}

// Function to call the token refresh service
function calling_service() {
  var refresh_token = voltmx.store.getItem("refreshtoken");

  var get_refresh_token_inputparam = {
    
    "serviceID": "ms_user_token$refresh-token",
    "httpheaders": {"refresh_token": refresh_token},
    "httpconfig": {}
  };

  mfintegrationsecureinvokerasync(
    get_refresh_token_inputparam,
    "ms_user_token",
    "refresh-token",
    get_refresh_token_callback
  );
}

// Callback function for token refresh
function get_refresh_token_callback(status, get_refresh_token) {
  voltmx.print("=============================");
  voltmx.print(get_refresh_token);
  voltmx.print("=============================");
  
  
  voltmx.print("==== New Token Info ====");
  voltmx.print(get_refresh_token.data.access_token);
  voltmx.print(get_refresh_token.data.expires_in);
  voltmx.print("========================");

  voltmx.store.setItem("user_access_token", get_refresh_token.data.access_token);
  voltmx.store.setItem("expires_in", get_refresh_token.data.expires_in);
}

function detectFileType(base64) {
  if (!base64) return ".bin";

  if (base64.startsWith("data:image/jpeg") || base64.startsWith("/9j/")) {
    return ".jpg";
  } else if (base64.startsWith("data:image/png") || base64.startsWith("iVBORw0KGgo")) {
    return ".png";
  } else if (base64.startsWith("data:image/webp") || base64.startsWith("UklG")) {
    return ".webp";
  } else if (
    base64.startsWith("data:application/pdf") || 
    base64.startsWith("JVBER")
  ) {
    return ".pdf";
  } else {
    return ".bin";
  }
}

