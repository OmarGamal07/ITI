xquery version "3.1";

declare namespace ext="http://www.altova.com/xslt-extensions";
<Employee>
{
let $doc:=.
for $emp in $doc//Employee 
let $size := count($emp/Employee)
return <Stored Name="{$emp/Name}" EmployeeNumbers="{$size}" />
}
</Employee>