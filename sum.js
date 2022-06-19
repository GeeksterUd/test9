const input = [ 1, -5, 2, 10, -30, 29, 50];
function add(input)
{
    let sum=0;
    for(let i=0;i<input.length;++i)
    {
        if(input[i]>=0)
        {
            sum=sum+input[i];
        }
    }
    return sum;
}
let r=add(input)
console.log(r);

