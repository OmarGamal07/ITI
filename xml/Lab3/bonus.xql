xquery version "1.0";

declare namespace ext="http://www.altova.com/xslt-extensions";

for $proj in doc("E:\opensource\xml\Day 3\Lab\projects.xml")/Projects/Project,
$emp in doc("E:\opensource\xml\Day 3\Lab\team.xml")//Employee
where $proj/Category = $emp/Expertise
return	<assigment proj="{$proj/Name}">
	{$emp/Name}
</assigment>