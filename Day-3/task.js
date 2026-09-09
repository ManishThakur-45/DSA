function calculateCompoundInterest(P, r, t, n) {
    // Write your logic here

    let A = P*Math.pow((1+r/n),(n*t))
     return (CI=A-P).toFixed(2)
    
}

module.exports = { calculateCompoundInterest };

function swapNumbers(a, b) {
    // Write your logic here


  a=a+b;
  b=a-b;
  a=a-b;
  return[a,b]
}

module.exports = { swapNumbers };


function calculateTriangleArea(a, b, c) {
    // Write your logic here

    let s = (a+b+c)/2
    let A=Math.sqrt(s* (s-a)* (s-b)* (s-c))

    return A.toFixed(2)

}

module.exports = { calculateTriangleArea };


function calculateCircleProperties(r) {
    // Write your logic here
    let c = 2 * Math.PI * r
    let a = Math.PI*Math.pow(r,2)

 return [c.toFixed(2), a.toFixed(2)];}

module.exports = { calculateCircleProperties };


