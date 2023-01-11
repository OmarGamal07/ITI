xquery version "3.1";

declare namespace ext="http://www.altova.com/xslt-extensions";

if(every $emp in doc("E:\opensource\xml\Day 3\Lab/team.xml")//Employee satisfies
$emp/@years > 5) then "YES"
else "no"