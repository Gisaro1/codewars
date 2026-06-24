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
const arr = {
    'id':id,
    'profile.name':profile.name,
    'profile.email':profile.email,
    'profile.preferences.theme':profile.preferences.theme,
    'profile.preferences.notifications':profile.preferences.notifications
}
for(let i = 0;i<fields.length;i++){
    let char = fields[i]
    if(arr.hasOwnProperty(char))
        result[char] = arr[char]
    }
    return {...result}
}
console.log(extractUserData(user,['id', 'profile.name']))
