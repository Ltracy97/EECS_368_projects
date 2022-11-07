
/*
this project will create two Group objects that has a member that is an empty array
the programm will be able to add members into each array and delete them from each array
the program can then use the two groups to perform various functions from set theory
such as : Union, Intersect, Difference, and check is a given value is in the designated group
*/









// this will create a class called Group
class Group
{   // this code will outline how a Group object is created
    constructor()
    {
        // this will created an empty array called this.Group_list
        this.Group_list = [];
    }
// this is an add function that will add a member to a given array
    add(num)
    {     // a constant variable called length is created that takes in the length of the this.Group_list array
        const length = this.Group_list.length;
        //this will run a for loop for time equal to the length of the array    
        for(var n = 0; n<= length; n++)
            {
                //every look will check if the given value is equal to a memeber in the array
                if(num == this.Group_list[n])
                {
                    //if the check is sucessful we sent a message that the given input is already in the array
                    return(console.log("This element is already in the Array"));
                
                }

            }
            //after the loop finishes and the input in not part of the array it will be added to the array throught the push function
            this.Group_list.push(num);
           
            
    }
    
    // this will delete a given member of a group
    delete(num)
    {
            // a constant variable called length is created that takes in the length of the this.Group_list array
        const length = this.Group_list.length;
            
        //this will run a for loop for time equal to the length of the array
        for(let n = 0; n < length; n++)
            {   // this will check if the given inout is in the group
                if(num == this.Group_list[n])
                {
                    // if the check is sucessful the location of the member will begiven to the splce function so it can be removed
                    this.Group_list.splice(n,1);
                    
                    
                }
            }
            

    }
    
    has(value)
    {
        // a constant variable called length is created that takes in the length of the this.Group_list array
        const length = this.Group_list.length;
        //this will run a for loop for time equal to the length of the array
        for(let i = 0; i < length; i++)
        {
            //the statement will check if the input is in the group
            if(value == this.Group_list[i])
            {
                // if successful the boolean value true will be returned
                return(true);
            }
        }
        // after the loop had fully ran the boolean value false will be returned
        return(false);

    }
    
    union(group)
    {   // a constant variable group3 will be created that creates a new set that combines two groups
       const group3 = [ ...new Set([ ...this.Group_list, ...group.Group_list])];
        // group3 will then be returned
       return (group3);
    }

    
    intersection(group)
    {
        /* a constant variable group4 will be created with the caller group and the called group using 
        the filter function to find the members the groups do not share
        */
        const group4  = this.Group_list.filter(g => group.Group_list.includes(g));
        // group4 is returned
        return (group4);

    }

    difference(group)
    {
      // a constant variable group5 is created that takes and filters both groups and leaves the memebers the groups do not shrare 
    const group5 =[ ...this.Group_list.filter(g => !group.Group_list.includes(g)), 
                    ...group.Group_list.filter(r => !this.Group_list.includes(r))];
    
    // returns group5
    return (group5);
    
    }

}


//creates a new group called group1
let group1 = new Group();
//creates a new group caleed group2
let group2 = new Group();
//adds 1 to group1
group1.add(1);
// adds 2 to group1 
group1.add(2);
//adds 3 to group1
group1.add(3);
//prints group1
console.log(group1);
//adds 2 to group2
group2.add(2);
//adds 3 to group2
group2.add(3);
//adds 5 to group2
group2.add(5);
//attempts to add 2 again to group1
group2.add(2);
//prints group2
console.log(group2);
//performs the has function using group1 and 5 then prints the result
console.log(group1.has(5));
//performs the has function using group2 and 3 then prints the result
console.log(group2.has(3));
//performs the union function with group1 and group2 then prints the result
console.log(group1.union(group2));
//performs the intersection function using group1 and group2 then prints the result
console.log(group1.intersection(group2));
//performs the difference function using group1 and group2 then prints the result
console.log(group1.difference(group2));
//performs the delete function using group1 and 1
group1.delete(1);
//prints group1
console.log(group1);
//performs the delete function using group2 and 1
group2.delete(1);
//prints group2
console.log(group2);
var tab = {group1,group2};
console.log(tab);