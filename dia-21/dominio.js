function getDomainName(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/:]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
}

console.log(getDomainName('https://www.pinkman.com/page'));  
console.log(getDomainName('https://example.com:8080/test'));
