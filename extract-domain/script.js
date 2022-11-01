// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//6 indexs in http:// .. regex if www remove?

const domainName = (url) => new URL(url).hostname.replace(".com", "");

console.log(domainName("http://github.com/carbonfive/raygun"));
