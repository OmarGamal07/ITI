xquery version "3.1";

declare namespace ext="http://www.altova.com/xslt-extensions";
<videos>{

for $v in doc("E:\opensource\xml\Day 3\Lab\projects.xml")/Team/Employee
order by $v/@id descending
return
<sort name="{$v/Name}" id="{$v/@id}"/>
}
</videos>