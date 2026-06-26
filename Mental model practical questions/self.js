const user = {
  id: 1,
  profile: {
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "dark",
      notifications: true
    }
  },
};
const extractUserData = (user,fields) =>{
const result = {};
const {id,profile} = user;
const obj ={
  'id':id,
  'profile.name':profile.name,
  'profile.email':profile.email,
  'profile.preferences.theme':profile.preferences.theme
}
for(let i = 0; i< fields.length;i++){
  const char = fields[i];
  if(obj.hasOwnProperty(char)){
    result[char] = obj[char]
  }
}
return result
}
console.log(extractUserData(user,['id', 'profile.name','theme' ]))
