let key = 'AIzaSyAS9kz_GcI4HcQcoIYiqpqL_Cei_ogEwxk'
console.log("Made it to Service")
export default class AddressService {
  constructor() {

  }
  search(formData) {
    let location = '901 Maple st Nampa ID'
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?', {
        params: {
          query: location,
          key: key
        }
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (e) {
        console.log(e)
      })
  }
}