var search_data = {"index":{"longSearchIndex":["atomresponseloader","collection","conf","confcollection","context","entity","hash","index","json","json::stream","json::stream::parser","job","jobs","message","object","resultsreader","searchresults","service","splunkerror","splunkhttperror","tcaloader","tcclient","tccontext","collection#[]()","entity#[]()","job#[]()","entity#[]=()","hash#add_attrs()","service#apps()","index#attach()","context#build_stream()","job#cancel()","service#capabilities()","context#check_for_error_return()","index#clean()","service#confs()","context#connect()","service::connect()","collection#contains?()","collection#create()","jobs#create()","jobs#create_oneshot()","context#create_resource()","jobs#create_stream()","collection#delete()","context#delete()","entity#disable()","job#disable_preview()","collection#each()","resultsreader#each()","searchresults#each()","entity#enable()","job#enable_preview()","job#events()","job#finalize()","context#flatten_params()","context#flatten_params_array()","context#fullpath()","context#get()","context#handle_key()","service#indexes()","service#info()","context#init_default()","service#jobs()","collection#list()","jobs#list()","atomresponseloader#load()","atomresponseloader::load_text()","atomresponseloader::load_text_as_record()","service#loggers()","context#login()","service#login()","context#logout()","service#logout()","service#messages()","atomresponseloader::new()","collection::new()","conf::new()","confcollection::new()","context::new()","index::new()","json::stream::parser::new()","job::new()","jobs::new()","message::new()","resultsreader::new()","searchresults::new()","service::new()","splunkerror::new()","splunkhttperror::new()","service#parse()","job#pause()","context#post()","job#preview()","conf#read()","entity#read()","job#read()","entity#readmeta()","atomresponseloader::record()","entity#reload()","service#restart()","job#results()","service#roles()","job#searchlog()","job#setpriority()","service#settings()","job#setttl()","conf#submit()","index#submit()","job#summary()","job#timeline()","job#touch()","job#unpause()","entity#update()","index#upload()","context#url()","hash#urlencode()","service#users()","message#value()","","","","",""],"info":[["AtomResponseLoader","","AtomResponseLoader.html","",""],["Collection","","Collection.html","","<p>Collections are groups of items, which can be Entity objects, subclasses of\nEntity objects or Job objects. …\n"],["Conf","","Conf.html","",""],["ConfCollection","","ConfCollection.html","","<p>A Collection of Conf objects\n"],["Context","","Context.html","",""],["Entity","","Entity.html","","<p>Entity objects represent individual items such as indexes, users, roles,\netc. They are usually contained …\n"],["Hash","","Hash.html","","<p>#Some bitchin metaprogramming to allow “dot notation” reading from a\nHash class Hash\n\n<pre class=\"ruby\"><span class=\"ruby-keyword\">def</span> <span class=\"ruby-identifier\">add_attrs</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["Index","","Index.html","","<p>Splunk can have many indexes.  Each index is represented by an Index\nobject.\n"],["JSON","","JSON.html","",""],["JSON::Stream","","JSON/Stream.html","",""],["JSON::Stream::Parser","","JSON/Stream/Parser.html","","<p>I’m an idiot because I couldn’t find any way to pass local context\nvariables to a block in the parser. …\n"],["Job","","Job.html","",""],["Jobs","","Jobs.html","","<p>Jobs objects are used for executing searches and retrieving a list of all\njobs\n"],["Message","","Message.html","","<p>Message objects represent system-wide messages\n"],["Object","","Object.html","",""],["ResultsReader","","ResultsReader.html","",""],["SearchResults","","SearchResults.html","",""],["Service","","Service.html","","<p>This class is the main place for clients to access and control Splunk. You\ncreate a Service instance …\n"],["SplunkError","","SplunkError.html","",""],["SplunkHTTPError","","SplunkHTTPError.html","",""],["TcAloader","","TcAloader.html","",""],["TcClient","","TcClient.html","",""],["TcContext","","TcContext.html","",""],["[]","Collection","Collection.html#method-i-5B-5D","(key)","<p>Returns an item in this collection given <strong><code>key</code></strong>\n<p>Example - get an Index object called main\n\n<pre>svc = Service.connect(:username ...</pre>\n"],["[]","Entity","Entity.html#method-i-5B-5D","(key)","<p>Access an individual attribute named <strong><code>key</code></strong>.\nNote that this results in an HTTP round trip, fetching all …\n"],["[]","Job","Job.html#method-i-5B-5D","(key)",""],["[]=","Entity","Entity.html#method-i-5B-5D-3D","(key, value)","<p>Updates an individual attribute named <strong><code>key</code></strong>\nwith String <strong><code>value</code></strong>\n<p>Returns\n<p>The new value\n"],["add_attrs","Hash","Hash.html#method-i-add_attrs","()",""],["apps","Service","Service.html#method-i-apps","()","<p>Return a collection of all apps.  To operate on apps, call methods on the\nreturned Collection and Entities …\n"],["attach","Index","Index.html#method-i-attach","(host=nil, source=nil, sourcetype=nil)","<p>Streaming HTTP(S) input for Splunk. Write to the returned stream Socket,\nand Splunk will index the data. …\n"],["build_stream","Context","Context.html#method-i-build_stream","(params = nil)","<p>ripped directly from rest-client\n"],["cancel","Job","Job.html#method-i-cancel","()",""],["capabilities","Service","Service.html#method-i-capabilities","()","<p>Return the list of all capabilities in the system.  This list is not\nmutable because capabilities are …\n"],["check_for_error_return","Context","Context.html#method-i-check_for_error_return","(response)",""],["clean","Index","Index.html#method-i-clean","()","<p>Nuke all events in this index.  This is done by setting\n<strong><code>maxTotalDataSizeMG</code></strong> and\n<strong><code>frozenTimePeriodInSecs</code></strong> …\n"],["confs","Service","Service.html#method-i-confs","()","<p>Return a Collection of ConfCollection objects.  Each ConfCollection\nrepresents a Collection of stanzas …\n"],["connect","Context","Context.html#method-i-connect","()",""],["connect","Service","Service.html#method-c-connect","(args)","<p>Creates an instance of Service and logs into Splunk\n<p>Attributes\n<p><code>args</code> - Same as ::new\n"],["contains?","Collection","Collection.html#method-i-contains-3F","(name)","<p>Returns <em>true</em> if an item called <strong>+name</strong> exists in\nthe Collection\n<p>Example - does an index called main exist? …\n"],["create","Collection","Collection.html#method-i-create","(name, args={})","<p>Creates an item in this collection named <strong><code>name</code></strong>\nwith optional args\n<p>Example - create a user named jack and …\n"],["create","Jobs","Jobs.html#method-i-create","(query, args={})","<p>Run a search.  This search can be either synchronous (oneshot) or\nasynchronous.  A synchronous search …\n"],["create_oneshot","Jobs","Jobs.html#method-i-create_oneshot","(query, args={})","<p>Convenience method that runs a synchronous search returning an enumerable\nSearchResults object. This …\n"],["create_resource","Context","Context.html#method-i-create_resource","(path, params={})",""],["create_stream","Jobs","Jobs.html#method-i-create_stream","(query, args={})","<p>Run a <strong>streamed search</strong> .  Rather than returning an object\nthat can take up a huge amount of memory by …\n"],["delete","Collection","Collection.html#method-i-delete","(name)","<p>Deletes an item named <strong><code>name</code></strong>\n<p>Example - delete stanza sdk-tests from props.conf\n\n<pre>svc = Service.connect(:username ...</pre>\n"],["delete","Context","Context.html#method-i-delete","(path, params={})","<p>TODO: Make this the same as ‘get’.  In other words, params are not\nheaders\n"],["disable","Entity","Entity.html#method-i-disable","()",""],["disable_preview","Job","Job.html#method-i-disable_preview","()",""],["each","Collection","Collection.html#method-i-each","()","<p>Calls block once for each item in the collection\n<p>Example - display the name and level of each logger\n\n<pre>svc ...</pre>\n"],["each","ResultsReader","ResultsReader.html#method-i-each","(&block)",""],["each","SearchResults","SearchResults.html#method-i-each","(&block)",""],["enable","Entity","Entity.html#method-i-enable","()",""],["enable_preview","Job","Job.html#method-i-enable_preview","()",""],["events","Job","Job.html#method-i-events","(args={})",""],["finalize","Job","Job.html#method-i-finalize","()",""],["flatten_params","Context","Context.html#method-i-flatten_params","(params, parent_key = nil)",""],["flatten_params_array","Context","Context.html#method-i-flatten_params_array","(value, calculated_key)",""],["fullpath","Context","Context.html#method-i-fullpath","(path)",""],["get","Context","Context.html#method-i-get","(path, params={})",""],["handle_key","Context","Context.html#method-i-handle_key","(key)","<p>for UrlEncoded escape the keys\n"],["indexes","Service","Service.html#method-i-indexes","()","<p>Returns all indexes\n<p>Returns\n<p>A Collection of Index objects\n"],["info","Service","Service.html#method-i-info","()","<p>Returns a ton of info about the running Splunk instance\n<p>Returns\n<p>A Hash of key/value pairs\n"],["init_default","Context","Context.html#method-i-init_default","(key, deflt)",""],["jobs","Service","Service.html#method-i-jobs","()","<p>Returns a new Jobs object\n<p>Returns\n<p>A new Jobs object\n"],["list","Collection","Collection.html#method-i-list","()","<p>Returns an Array of item names contained in this Collection\n<p>Example - list all roles\n\n<pre>svc = Service.connect(:username ...</pre>\n"],["list","Jobs","Jobs.html#method-i-list","()","<p>Return an Array of Jobs\n<p>Example - Display the disk usage of each job\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">svc</span> = <span class=\"ruby-constant\">Service</span>.<span class=\"ruby-identifier\">connect</span>(:<span class=\"ruby-identifier\">username</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["load","AtomResponseLoader","AtomResponseLoader.html#method-i-load","()",""],["load_text","AtomResponseLoader","AtomResponseLoader.html#method-c-load_text","(text, match=nil, namespaces=nil)",""],["load_text_as_record","AtomResponseLoader","AtomResponseLoader.html#method-c-load_text_as_record","(text, match=nil, namespaces=nil)",""],["loggers","Service","Service.html#method-i-loggers","()","<p>Returns all loggers in the system.  Each logger logs errors, warnings,\ndebug info, or informational information …\n"],["login","Context","Context.html#method-i-login","()",""],["login","Service","Service.html#method-i-login","()","<p>Log into Splunk\n<p>Examples\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">svc</span> = <span class=\"ruby-constant\">Service</span>.<span class=\"ruby-identifier\">new</span>(:<span class=\"ruby-identifier\">username</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">'admin'</span>, :<span class=\"ruby-identifier\">password</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">'foo'</span>)\n<span class=\"ruby-identifier\">svc</span>.<span class=\"ruby-identifier\">login</span> <span class=\"ruby-comment\">#Now we ...</span>\n</pre>\n"],["logout","Context","Context.html#method-i-logout","()",""],["logout","Service","Service.html#method-i-logout","()","<p>Log out of Splunk\n"],["messages","Service","Service.html#method-i-messages","()","<p>Return a collection of Message objects\n<p>Returns\n<p>A Collection of Message objects\n"],["new","AtomResponseLoader","AtomResponseLoader.html#method-c-new","(text, match=nil, namespaces=nil)",""],["new","Collection","Collection.html#method-c-new","(service, path, name=nil, procs={})",""],["new","Conf","Conf.html#method-c-new","(service, path, name)",""],["new","ConfCollection","ConfCollection.html#method-c-new","(svc, conf)",""],["new","Context","Context.html#method-c-new","(args)",""],["new","Index","Index.html#method-c-new","(service, name)",""],["new","JSON::Stream::Parser","JSON/Stream/Parser.html#method-c-new","(obj, &block)",""],["new","Job","Job.html#method-c-new","(svc, sid)",""],["new","Jobs","Jobs.html#method-c-new","(svc)",""],["new","Message","Message.html#method-c-new","(service, name)",""],["new","ResultsReader","ResultsReader.html#method-c-new","(socket)",""],["new","SearchResults","SearchResults.html#method-c-new","(data)",""],["new","Service","Service.html#method-c-new","(args)","<p>Create an instance of Service and logs in to Splunk\n<p>Attributes\n<p><code>args</code> - Valid args are listed below.  Note …\n"],["new","SplunkError","SplunkError.html#method-c-new","(msg)",""],["new","SplunkHTTPError","SplunkHTTPError.html#method-c-new","(response)",""],["parse","Service","Service.html#method-i-parse","(query, args={})","<p>Parse a search into it’s components\n<p>Returns\n<p>A JSON structure with information about the search\n"],["pause","Job","Job.html#method-i-pause","()",""],["post","Context","Context.html#method-i-post","(path, body, params={})",""],["preview","Job","Job.html#method-i-preview","(args={})",""],["read","Conf","Conf.html#method-i-read","(field_list=nil)","<p>Example 2 - Display a Hash of configuration lines on a particular stanza\n\n<pre>svc = Service.connect(:username ...</pre>\n"],["read","Entity","Entity.html#method-i-read","(field_list=nil)","<p>Return all or a specified subset of attribute/value pairs for this Entity\n<p>Returns\n<p>A Hash of all attributes …\n"],["read","Job","Job.html#method-i-read","(field_list=nil)",""],["readmeta","Entity","Entity.html#method-i-readmeta","()","<p>Return metadata information for this Entity. This is the same as:\n<code>entity.read(['eai:acl', 'eai:attributes')</code> …\n"],["record","AtomResponseLoader","AtomResponseLoader.html#method-c-record","(hash)","<p>Method to convert a dict to a ‘dot notation’ accessor object\n"],["reload","Entity","Entity.html#method-i-reload","()",""],["restart","Service","Service.html#method-i-restart","()","<p>Restart the Splunk Server\n<p>Returns\n\n<pre>A bunch of crappy XML that makes little sense</pre>\n"],["results","Job","Job.html#method-i-results","(args={})",""],["roles","Service","Service.html#method-i-roles","()","<p>Returns all roles\n<p>Returns\n<p>A Collection of roles\n"],["searchlog","Job","Job.html#method-i-searchlog","(args={})",""],["setpriority","Job","Job.html#method-i-setpriority","(value)",""],["settings","Service","Service.html#method-i-settings","()","<p>Returns Splunk server settings\n<p>Returns\n<p>An Entity with all server settings\n"],["setttl","Job","Job.html#method-i-setttl","(value)",""],["submit","Conf","Conf.html#method-i-submit","(stanza)","<p>Populate a stanza in the .conf file\n"],["submit","Index","Index.html#method-i-submit","(events, host=nil, source=nil, sourcetype=nil)","<p>Batch HTTP(S) input for Splunk. Specify one or more events in a String\nalong with optional <strong><code>host</code></strong>,\n<strong><code>source</code></strong> …\n"],["summary","Job","Job.html#method-i-summary","(args={})",""],["timeline","Job","Job.html#method-i-timeline","(args={})",""],["touch","Job","Job.html#method-i-touch","()",""],["unpause","Job","Job.html#method-i-unpause","()",""],["update","Entity","Entity.html#method-i-update","(args)","<p>Updates an Entity with a Hash of attribute/value pairs specified as\n<strong><code>args</code></strong>\n<p>Returns\n<p>The Entity object after …\n"],["upload","Index","Index.html#method-i-upload","(filename, args={})","<p>Upload a file accessible by the Splunk server.  The full path of the file\nis specified by <strong><code>filename</code></strong>.\n<p>Optional …\n"],["url","Context","Context.html#method-i-url","(path)",""],["urlencode","Hash","Hash.html#method-i-urlencode","()",""],["users","Service","Service.html#method-i-users","()","<p>Returns all users\n<p>Returns\n<p>A Collection of users\n"],["value","Message","Message.html#method-i-value","()","<p>Return the message\n<p>Returns\n<p>The message String: (the value of the message named\n<strong><code>name</code></strong>)\n"],["LICENSE","","LICENSE.html","","<p>Copyright © 2011 YOUR NAME\n<p>Permission is hereby granted, free of charge, to any person obtaining a\ncopy …\n"],["README","","README_rdoc.html","","<p>splunk\n<p>A gem that provides…\n"],["Rakefile","","Rakefile.html","","<p>require ‘rubygems’ unless ENV require ‘rubygems/package_task’\nrequire ‘rubygems/specification’ require …\n"],["TODO","","TODO.html","","<p>TODO: Fix LICENSE with your name Fix Rakefile with your name and contact\ninfo Add your code to lib/&lt;%= …\n"],["testfile","","test/testfile_txt.html","","<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore …\n"]],"searchIndex":["atomresponseloader","collection","conf","confcollection","context","entity","hash","index","json","stream","parser","job","jobs","message","object","resultsreader","searchresults","service","splunkerror","splunkhttperror","tcaloader","tcclient","tccontext","[]()","[]()","[]()","[]=()","add_attrs()","apps()","attach()","build_stream()","cancel()","capabilities()","check_for_error_return()","clean()","confs()","connect()","connect()","contains?()","create()","create()","create_oneshot()","create_resource()","create_stream()","delete()","delete()","disable()","disable_preview()","each()","each()","each()","enable()","enable_preview()","events()","finalize()","flatten_params()","flatten_params_array()","fullpath()","get()","handle_key()","indexes()","info()","init_default()","jobs()","list()","list()","load()","load_text()","load_text_as_record()","loggers()","login()","login()","logout()","logout()","messages()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","parse()","pause()","post()","preview()","read()","read()","read()","readmeta()","record()","reload()","restart()","results()","roles()","searchlog()","setpriority()","settings()","setttl()","submit()","submit()","summary()","timeline()","touch()","unpause()","update()","upload()","url()","urlencode()","users()","value()","license","readme","rakefile","todo","testfile"]}}