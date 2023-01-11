xquery version "3.1";

declare namespace ext="http://www.altova.com/xslt-extensions";
declare namespace my ="my";
declare function my:fun($p as xs:string,$d as xs:string)as xs:string
{
concat($p, $d)
 
};


<con>
{
  my:fun ('asdas','asdf')
}
 </con>