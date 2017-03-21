if(b["isRewardsMember"] != undefined && b["rewardsStatus.membershipTier"] != undefined){
    b["u5"] = b["isRewardsMember"].toString().charAt(0).toUpperCase() + "|" + b["rewardsStatus.membershipTier"]
}
else if(b["isRewardsMember"] != undefined ){
    b["u5"] = b["isRewardsMember"].toString().charAt(0).toUpperCase() + "|" + "";
}
