class Resource {
  constructor(){
    //定向id资源号
    this._id = '';
  }
  //对网站进行规整话统一化处理，然后和_id有机联系起来
  static genUUID(oriThirdPartyId){

  }

  static getIdByUUID(){

  }
  static getUUIDById(){
    
  }
}

class DoubanNoteResource extends Resource{
  constructor(){
    super()
  }

  static get['UUID_PREF'](){
      return `https://douban.com/note`
  }

  static genUUID(oriThirdPartyId){
    return `${DoubanNoteResource.UUID_PREF}${oriThirdPartyId}`
  }

  static getOriginThridPartyId(UUID) {
    return UUID.split(DoubanNoteResource.UUID_PREF)[1]
  }

  static getIdByUUID(UUID){
    return UUID;
  }
  static getUUIDById(ID){
    return ID
  }
}