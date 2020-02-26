//Two sum
___________________________________________________________
//Traditional way
function twoSum(nums, target) {
    for(var i=0; i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            var sum = nums[i]+nums[i+1];
        if(sum==target){

            console.log([i,j]);//returns [0,1]


        }

        }

    }

        return[];

};
twoSum([2,7,11,15],9);


___________________________________________________________
//faster way
const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
___________________________________________________________

// comp is going to be a key/value store where
// key === number in input array
// value === an index. Specifically,the index of the
// complementing number needed to add to get the target.
// So 2+7=== 9, the key 4 would have the index 1
// assigned to it in the array [2,7,11,15]
// now we iterate over nums. We hit the first condition:
//if(comp[nums[i] ]>=0)

// at this point nums[i] === 2
// comp looks like this:
{
//  '2': undefined
}

// so we go past the first conidtion on the first run
// always, b/c we won't have an index assigned, that comes later.
// Now we hit:
//comp[target-nums[i]] = i
// inside the brackets, we have comp[9 - 2] = 0
// or comp[11] = 0
// now comp looks like this:
// (by the way you wouldn't have keys assigned the value
// undefined, they just would not exist in the object. I'm
//{
  //'2': undefined,
//}
// next run: we have 7 and comp looks like:
//{
//  '2': 0,
//  '7': 1

// On our last run  we have a match
//greater than 0 so we enter the condition
// then we return the value of comp[]
//(the index of the complementing number to add to get to target, 9)
//and the current index in an array: [0,1]
