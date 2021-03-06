function CurrentUser(id, name, email, token, pic, mentorBio = "", mentorSkill = "", menteeBio = "", menteeInterest = "", menteeID) {
  this._id = id;
  this._name = name;
  this._email = email;
  this._pic = pic;
  this._token = token;
  this._mentorBio = mentorBio;
  this._mentorSkill = mentorSkill;
  this._menteeBio = menteeBio;
  this._menteeInterest = menteeInterest;
  this._menteeID = menteeID;
}

CurrentUser.prototype.getName = function() {
  return this._name;
}

CurrentUser.prototype.setName = function(updatedName) {
  this._name = updatedName
}

CurrentUser.prototype.getEmail = function() {
  return this._email;
}

CurrentUser.prototype.setEmail = function(updatedEmail) {
  this._email = updatedEmail
}

CurrentUser.prototype.getToken = function() {
  return this._token;
}

CurrentUser.prototype.setToken = function(updatedToken) {
  this._token = updatedToken;
}

module.exports = CurrentUser;
