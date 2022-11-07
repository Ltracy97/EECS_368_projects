
    add(num)
    {
            for(var n = 0; n<=this.length; n++)
            {
                if(num == this.Group_list[n])
                {
            
                    return(console.log("This element is already in the Array"));
                
                }

            }

            this.Group_list.push(num);
            this.length++;
    }
    delete(num)