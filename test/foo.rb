require 'libxml'

foo = '<ns0:feed xmlns:ns0="http://www.w3.org/2005/Atom">
  <ns0:title>server-info</ns0:title>
  <ns0:id>https://localhost/services/server/info</ns0:id>
  <ns0:updated>2011-07-01T16:53:53-07:00</ns0:updated>
  <ns0:generator version="101089" />
  <ns0:author>
    <ns0:name>Splunk</ns0:name>
  </ns0:author>
  <ns1:totalResults xmlns:ns1="http://a9.com/-/spec/opensearch/1.1/">1</ns1:totalResults>
  <ns1:itemsPerPage xmlns:ns1="http://a9.com/-/spec/opensearch/1.1/">30</ns1:itemsPerPage>
  <ns1:startIndex xmlns:ns1="http://a9.com/-/spec/opensearch/1.1/">0</ns1:startIndex>
  <ns1:messages xmlns:ns1="http://dev.splunk.com/ns/rest" />
  <ns0:entry>
    <ns0:title>server-info</ns0:title>
    <ns0:id>https://localhost/services/server/info/server-info</ns0:id>
    <ns0:updated>2011-07-01T16:53:53-07:00</ns0:updated>
    <ns0:link href="/services/server/info/server-info" rel="alternate" />
    <ns0:author>
      <ns0:name>system</ns0:name>
    </ns0:author>
    <ns0:link href="/services/server/info/server-info" rel="list" />
    <ns0:content type="text/xml">
      <ns1:dict xmlns:ns1="http://dev.splunk.com/ns/rest">
        <ns1:key name="build">101089</ns1:key>
        <ns1:key name="cpu_arch">i386</ns1:key>
        <ns1:key name="eai:acl"><ns1:dict><ns1:key name="app" /><ns1:key name="can_write">0</ns1:key><ns1:key name="modifiable">0</ns1:key><ns1:key name="owner">system</ns1:key><ns1:key name="perms"><ns1:dict><ns1:key name="read"><ns1:list><ns1:item>*</ns1:item></ns1:list></ns1:key><ns1:key name="write"><ns1:list /></ns1:key></ns1:dict></ns1:key><ns1:key name="sharing">system</ns1:key></ns1:dict></ns1:key>
        <ns1:key name="guid">3FD18BC4-010D-4845-AD51-27963CB17412</ns1:key>
        <ns1:key name="isFree">0</ns1:key>
        <ns1:key name="isTrial">0</ns1:key>
        <ns1:key name="licenseKeys"><ns1:list><ns1:item>E4BF242DB47AB54B5F9DC69D00E65A4BD4E89F917B93D0FA611EDF85ABFC639D</ns1:item></ns1:list></ns1:key>
        <ns1:key name="licenseSignature">3af106e3af0db73ca69339684cad26eb</ns1:key>
        <ns1:key name="licenseState">OK</ns1:key>
        <ns1:key name="master_guid">3FD18BC4-010D-4845-AD51-27963CB17412</ns1:key>
        <ns1:key name="mode">normal</ns1:key>
        <ns1:key name="os_build">Darwin Kernel Version 10.8.0: Tue Jun  7 16:33:36 PDT 2011; root:xnu-1504.15.3~1/RELEASE_I386</ns1:key>
        <ns1:key name="os_name">Darwin</ns1:key>
        <ns1:key name="os_version">10.8.0</ns1:key>
        <ns1:key name="serverName">blovering.local</ns1:key>
        <ns1:key name="version">4.3</ns1:key>
      </ns1:dict>
    </ns0:content>
  </ns0:entry>
</ns0:feed>'

parser = LibXML::XML::Parser.string(foo)
doc =  parser.parse
items = doc.find('//ns0:feed/title', ['ns0:http://www.w3.org/2005/Atom', 'ns1:http://dev.splunk.com/ns/rest'])
p items
