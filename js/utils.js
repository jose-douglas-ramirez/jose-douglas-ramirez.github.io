houseContact = window.houseContact || {};

houseContact = function () {

    var attempNumber = 4;
    var currentAttemp = 1;
    
    /**********************jwt utils*********************************/
    
     function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
          throw 'Illegal base64url string!';
        }
      }
      return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
    }

    function decodeToken(token) {
      var parts = token.split('.');

      if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
      }

      var decoded = urlBase64Decode(parts[1]);
      if (!decoded) {
        throw new Error('Cannot decode the token');
      }

      return JSON.parse(decoded);
    }

    function getTokenExpirationDate(token) {
      var decoded;
      decoded = decodeToken(token);

      if(typeof decoded.exp === "undefined") {
        return null;
      }

      var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
      d.setUTCSeconds(decoded.exp);

      return d;
    };

    function isTokenExpired(token, offsetSeconds) {
      var d = getTokenExpirationDate(token);
      offsetSeconds = offsetSeconds || 0;
      if (d === null) {
        return false;
      }

      // Token expired?
      return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    

    function isTokenStillValid(){

      if(!localStorage.getItem('nsuHouseExpires')){
        return false;
      }

      var a = moment(localStorage.getItem('nsuHouseExpires','MM/DD/YYYY HH:mm:ss'));
      return a.isSameOrAfter(moment());
    }
    
    
    /****************************************************************/
  
   
    return {        
        "isTokenExpired": isTokenExpired,	
        "decodeToken" : decodeToken,
        "isTokenStillValid" : isTokenStillValid
    }
}();
