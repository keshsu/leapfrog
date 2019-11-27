var me = {
    name: "keshab",
    address:"bhaktapur",
    email:["keshab.bhadel.5@gmail.com"],
    interests:["coding","designing","testing"],
    education:[{
        name:"kist-college",
        enrolleddate:"2016"
    },
    {
        name:"ghumante college",
        enrolleddate:"2018"
    }]
}
var eduLength = me.education.length;
for(i=0; i<eduLength;i++){ 
console.log(me.education[i]);
}