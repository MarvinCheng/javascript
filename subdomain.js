// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
//
//     Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".
//
//     We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.
//
// Example 1:
// Input:
//     ["9001 discuss.leetcode.com"]
// Output:
//     ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// Explanation:
//     We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let domains = new Map();
    for (let i=0;i<cpdomains.length;i++){ let domain = cpdomains[i];
        let split = domain.split(" ");
        if (split.length !=2){
            throw "Length not match.";
        }
        domains.set(split[1],split[0]);
        // let subDomain = domain.split(".");
        // subDomain.shift();
        // console.log(subDomain);
        let idx = domain.indexOf(".");
        while(idx != -1){

            let subDomain = domain.substring(idx+1,domain.length);
            domain = subDomain;
            console.log(subDomain);
            if(domains.has(subDomain)){
                let total = domains.get(subDomain) + split[0];
                domains.set(subDomain,total);
            }else{
                domains.set(subDomain,split[0]);
            }
            idx = domain.indexOf(".");
        }

    }
    var result = [];
    domains.forEach(function(v,k){
        var string = v + " " + k;
        result.push(string);
    });
    return result;

};