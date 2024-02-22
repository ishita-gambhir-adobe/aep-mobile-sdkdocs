"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1278],{32851:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var i=n(87462),a=n(63366),o=(n(15007),n(64983)),d=n(91515),r=n(27586),s=["components"],l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},m=p("InlineAlert"),u=p("TabsBlock"),c={_frontmatter:l},x=d.Z;function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.mdx)(x,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"mobile-core-api-reference"},"Mobile Core API reference"),(0,o.mdx)("h2",{id:"clearupdatedconfiguration"},"clearUpdatedConfiguration"),(0,o.mdx)("p",null,"Programmatic updates made to the configuration can be cleared via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"clearUpdatedConfiguration")," API. For more information about configuration in Mobile Core, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"configuration/api-reference.md#clearupdatedconfiguration"},"Configuration API reference"),"."),(0,o.mdx)("h2",{id:"collectmessageinfo"},"collectMessageInfo"),(0,o.mdx)("p",null,"User interactions with local or push notifications can be tracked by invoking the ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectMessageInfo")," API. Please refer to ",(0,o.mdx)("a",{parentName:"p",href:"../../../solution/adobe-campaign-standard/index.md#tracking-local-and-push-notification-message-interactions"},"this page")," for more information about tracking local and push notification message interactions."),(0,o.mdx)("h2",{id:"collectlaunchinfo"},"collectLaunchInfo"),(0,o.mdx)("p",null,"You can provide the user information to the SDK from various launch points in your application."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If the Adobe Analytics extension is enabled in your SDK, collecting this launch data results in an Analytics request being sent. Other extensions in the SDK might use the collected data, for example, as a rule condition for an In-App Message."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=collect-launch-info",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=collect-launch-info",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"collectpii"},"collectPii"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," method lets the SDK to collect sensitive or personally identifiable information (PII)."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although this method enables the collection of sensitive data, no data is sent to any Adobe or other third-party endpoints. To send the data to an endpoint, use a PII type postback."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=collect-pii",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=collect-pii",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"configurewithappid"},"configureWithAppId"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"configureWithAppId")," API can be used to download the configuration for the provided app ID and apply the configuration to the current session. For more information about configuration in Mobile Core, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"configuration/api-reference.md#configurewithappid"},"Configuration API reference"),"."),(0,o.mdx)("h2",{id:"configurewithfileinassets"},"configureWithFileInAssets"),(0,o.mdx)("p",null,"You can bundle a JSON configuration file in the app's assets folder and use ",(0,o.mdx)("inlineCode",{parentName:"p"},"configureWithFileInAssets")," API to replace or complement the configuration that was downloaded using the ",(0,o.mdx)("a",{parentName:"p",href:"#configurewithappid"},(0,o.mdx)("inlineCode",{parentName:"a"},"configureWithAppId"))," API. For more information about configuration in Mobile Core, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"configuration/api-reference.md#configurewithfileinassets"},"Configuration API reference"),"."),(0,o.mdx)("h2",{id:"configurewithfileinpath"},"configureWithFileInPath"),(0,o.mdx)("p",null,"You can bundle a JSON configuration file in you app package and use ",(0,o.mdx)("inlineCode",{parentName:"p"},"configureWithFileInPath")," API to replace or complement the configuration that was downloaded using the ",(0,o.mdx)("a",{parentName:"p",href:"#configurewithappid"},(0,o.mdx)("inlineCode",{parentName:"a"},"configureWithAppId"))," API. For more information about configuration in Mobile Core, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"configuration/api-reference.md#configurewithfileinpath"},"Configuration API reference"),"."),(0,o.mdx)("h2",{id:"dispatch--dispatchevent"},"dispatch / dispatchEvent"),(0,o.mdx)("p",null,"This method can be used to send an event through the Mobile Core for other extensions to consume."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=dispatch-event",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=dispatch-event",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"dispatch--dispatcheventwithresponsecallback"},"dispatch / dispatchEventWithResponseCallback"),(0,o.mdx)("p",null,"This method can be used to send an event through the Mobile Core for other extensions to consume. The provided event is used as a trigger and in return a response event is provided as a callback. The callback is invoked with a null event if the response could not be provided within the given timeout."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=dispatch-event-with-response-callback",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=dispatch-event-with-response-callback",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"getapplication"},"getApplication"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"getApplication")," method to get the previously set Android ",(0,o.mdx)("inlineCode",{parentName:"p"},"Application")," instance. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Application")," instance is mainly provided for third-party extensions."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=get-application",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"getloglevel"},"getLogLevel"),(0,o.mdx)("p",null,"This API gets the current log level being used in the SDK."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=get-log-level",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=get-log-level",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"getprivacystatus"},"getPrivacyStatus"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"getPrivacyStatus")," API to retrieve the current privacy status. For more information about privacy in Mobile Core, please see ",(0,o.mdx)("a",{parentName:"p",href:"../../resources/privacy-and-gdpr.md#getprivacystatus"},"Privacy and GDPR")),(0,o.mdx)("h2",{id:"getsdkidentities"},"getSdkIdentities"),(0,o.mdx)("p",null,"The following SDK identities are locally stored:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Company Context - IMS Org IDs"),(0,o.mdx)("li",{parentName:"ul"},"Experience Cloud ID (MID)"),(0,o.mdx)("li",{parentName:"ul"},"User IDs"),(0,o.mdx)("li",{parentName:"ul"},"Integration codes (ADID, push IDs)"),(0,o.mdx)("li",{parentName:"ul"},"Data source IDs (DPID, DPUUID)"),(0,o.mdx)("li",{parentName:"ul"},"Analytics IDs (AVID, AID, VID, and associated RSIDs)"),(0,o.mdx)("li",{parentName:"ul"},"Target legacy IDs (TNTID, TNT3rdpartyID)"),(0,o.mdx)("li",{parentName:"ul"},"Audience Manager ID (UUID)")),(0,o.mdx)("p",null,"To retrieve data as a JSON string from the SDKs and send this data to your servers, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"getSdkIdentities")," method."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You must call the API below and retrieve identities stored in the SDK, ",(0,o.mdx)("strong",{parentName:"p"},"before")," the user opts out.",(0,o.mdx)("br",null),(0,o.mdx)("br",null),"This API does ",(0,o.mdx)("strong",{parentName:"p"},"not")," include the identities stored in the Edge Identity extension. To retrieve the identities from the Edge Identity extension, use ",(0,o.mdx)("a",{parentName:"p",href:"../../edge/identity-for-edge-network/api-reference.md#getidentities"},"getIdentities"),"."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=get-sdk-identities",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=get-sdk-identities",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"log"},"log"),(0,o.mdx)("p",null,"This is the API used to log from the SDK."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=log",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=log",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"registereventlistener"},"registerEventListener"),(0,o.mdx)("p",null,"An EventListener can be registered with MobileCore to be notified when Events matching a type and source are dispatched."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=register-event-listener",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=register-event-listener",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This API has been deprecated starting in v2.0.0 version of Mobile Core extension.\nUse ",(0,o.mdx)("a",{parentName:"p",href:"#registerextensions"},"registerExtensions")," to register desired extensions and boot up the SDK for event processing. Calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.start()")," API is no longer required when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()"),"."),(0,o.mdx)("p",null,"Extensions can be incrementally registered with Mobile Core using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"registerExtension")," API."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=register-extension",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"registerextensions"},"registerExtensions"),(0,o.mdx)("p",null,"Extensions are registered with Mobile Core so that they can dispatch and listen for events.\nThis API can be used to register desired extensions and boot up the SDK for event processing. Calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.start()")," API is deprecated starting Mobile Core v2.0.0 and is no longer required when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()"),"."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Extension registration is ",(0,o.mdx)("strong",{parentName:"p"},"mandatory"),". Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior."),(0,o.mdx)("p",null,"The following code snippets demonstrate how Lifecycle, Signal, Profile, Edge, and other extensions are imported and registered."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=register-extensions",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=register-extensions",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"resetidentities"},"resetIdentities"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"resetIdentities")," method requests that each extension resets the identities it owns and each extension responds to this request uniquely. For more details, check the ",(0,o.mdx)("inlineCode",{parentName:"p"},"resetIdentities")," API reference on each of the extensions you use."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=reset-identities",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=reset-identities",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setadvertisingidentifier"},"setAdvertisingIdentifier"),(0,o.mdx)("p",null,"The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via ",(0,o.mdx)("a",{parentName:"p",href:"signals/index.md"},"Signals"),", and is removed at uninstall."),(0,o.mdx)("p",null,"For more information about identity in Mobile Core, please read the documentation on the ",(0,o.mdx)("a",{parentName:"p",href:"identity/api-reference.md#setadvertisingidentifier"},"identity APIs"),"."),(0,o.mdx)("h2",{id:"setappgroup"},"setAppGroup"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setAppGroup")," method to set the app group, which is used to share user defaults and files among the containing app and the extension apps. Please note that this method is ",(0,o.mdx)("strong",{parentName:"p"},"only")," supported on iOS versions of Mobile Core."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This API ",(0,o.mdx)("em",{parentName:"p"},"must")," be called in ",(0,o.mdx)("inlineCode",{parentName:"p"},"AppDidFinishLaunching")," and before any other interactions with the Adobe Experience SDK have happened. Only the first call to this function will have any effect."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=set-app-group",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setapplication"},"setApplication"),(0,o.mdx)("p",null,"When building Android applications, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"android.app.Application")," reference must be passed to Mobile SDK, which allows Mobile SDK to access the ",(0,o.mdx)("inlineCode",{parentName:"p"},"android.app.Context")," and monitor the lifecycle of the Android application."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Android applications must call ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.setApplication()")," before calling any other Mobile SDK API."),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setApplication")," method to pass the Android ",(0,o.mdx)("inlineCode",{parentName:"p"},"Application")," instance to Mobile SDK. Please note that this method is ",(0,o.mdx)("strong",{parentName:"p"},"only")," supported on Android versions of Mobile Core."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=set-application",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setloglevel"},"setLogLevel"),(0,o.mdx)("p",null,"The logging APIs allow log messages to be tagged and filtered with the Mobile SDK log messages. This allows application developers to filter the logged messages based on the current logging mode."),(0,o.mdx)("p",null,"Application developers can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setLogLevel")," method to filter the log messages that are coming from the Mobile SDK."),(0,o.mdx)("p",null,"From least to most verbose, the order of Mobile SDK logging modes is as follows:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"ERROR"),(0,o.mdx)("li",{parentName:"ul"},"WARNING"),(0,o.mdx)("li",{parentName:"ul"},"DEBUG"),(0,o.mdx)("li",{parentName:"ul"},"VERBOSE / TRACE")),(0,o.mdx)("p",null,"When debugging on iOS, you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"LogLevel.verbose")," to enable all the logging messages that are coming from Mobile SDK and partner extensions. Similarly, on Android, you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"LoggingMode.VERBOSE")," to enable all the logging messages that are coming from Mobile SDK and partner extensions."),(0,o.mdx)("p",null,"In a production application, you should use a less verbose logging mode, such as error-level logging."),(0,o.mdx)("p",null,"By default, Mobile SDK logging mode is set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"LoggingMode.ERROR")," for Android and ",(0,o.mdx)("inlineCode",{parentName:"p"},"LogLevel.error"),"on iOS."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"On ",(0,o.mdx)("strong",{parentName:"p"},"Android"),", Mobile SDK uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"android.util.Log")," class to log messages.",(0,o.mdx)("br",null),(0,o.mdx)("br",null),"On ",(0,o.mdx)("strong",{parentName:"p"},"iOS"),", Mobile SDK uses ",(0,o.mdx)("inlineCode",{parentName:"p"},"NSLog")," to messages to Apple System Log facility."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=set-log-level",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=set-log-level",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setprivacystatus"},"setPrivacyStatus"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus")," API to set the privacy status. For more information about privacy in Mobile Core, please see ",(0,o.mdx)("a",{parentName:"p",href:"../../../resources/privacy-and-gdpr.md#setprivacystatus"},"Privacy and GDPR")," API's."),(0,o.mdx)("h2",{id:"setpushidentifier"},"setPushIdentifier"),(0,o.mdx)("p",null,"This API sets the device token for push notifications in the SDK. If the current SDK privacy status is ",(0,o.mdx)("inlineCode",{parentName:"p"},"optedout"),", the push identifier is not set."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You should call ",(0,o.mdx)("inlineCode",{parentName:"p"},"setPushIdentifier")," on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, ",(0,o.mdx)("inlineCode",{parentName:"p"},"null"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"nil")," should be passed."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=set-push-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=set-push-identifier",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setsmalliconresourceid--setlargeiconresourceid"},"setSmallIconResourceID / setLargeIconResourceID"),(0,o.mdx)("p",null,"You can set the small and large icons that will be used for notifications that are created by the SDK. The small icon appears in the status bar and is the secondary image that is displayed when the user sees the complete notification in the notification center. The large icon is the primary image that is displayed when the user sees the complete notification in the notification center. Please note that this method is ",(0,o.mdx)("strong",{parentName:"p"},"only")," supported on Android versions of Mobile Core."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=set-icon-resource-id",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setwrappertype"},"setWrapperType"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setWrapperType")," API to set the wrapper type when the SDK is being used in a cross-platform environment."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=set-wrapper-type",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=set-wrapper-type",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"start"},"start"),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This is an Android only API and has been deprecated starting in v2.0.0 of the Mobile Core extension.\nUse ",(0,o.mdx)("a",{parentName:"p",href:"#registerextensions"},"registerExtensions")," to register desired extensions and boot up the SDK for event processing. Calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.start()")," API is no longer required when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()"),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"start")," API triggers Mobile Core to start event processing. This should be used after the desired set of extensions have been registered using ",(0,o.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtension()"),"  or ",(0,o.mdx)("inlineCode",{parentName:"p"},"<EXTENSION_NAME>.registerExtension()"),". A call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"start")," will wait for any outstanding registrations to complete and then start event processing. You can use the callback to kickoff additional operations immediately after any operations kicked off during registration. This method should not be invoked more than once in your app."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=start",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"trackaction"},"trackAction"),(0,o.mdx)("p",null,"Actions are events that occur in your application. You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"trackAction")," method to track and measure an action. Each action has one or more corresponding metrics that are incremented each time the event occurs. For example, you can use an action to track new subscriptions, every time an article is viewed, or every time a level is completed."),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You want to use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"trackAction")," method when you want to track an occurring event. In addition to the action name, you can also send context data with each ",(0,o.mdx)("inlineCode",{parentName:"p"},"trackAction")," call."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you installed and configured the Adobe Analytics extension, this method sends an Adobe Analytics action tracking hit with the provided optional context data."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=track-action",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=track-action",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"trackstate"},"trackState"),(0,o.mdx)("p",null,"States represent screens or views in your application. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"trackState")," method needs to be called every time a new state is displayed in your application. For example, this method should be called when a user navigates from the home page to the news feed. This method sends an Adobe Analytics state tracking hit with optional context data."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If you installed and configured the Adobe Analytics extension, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"trackState")," method increments page views and an Adobe Analytics state tracking hit with the provided optional context data."),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=track-state",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=track-state",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"updateconfiguration"},"updateConfiguration"),(0,o.mdx)("p",null,"You can update the configuration programmatically by passing configuration keys and values to override the existing configuration using ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateConfiguration")," API. For more information about configuration in Mobile Core, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"configuration/api-reference.md#updateconfiguration"},"Configuration API reference"),"."),(0,o.mdx)("h2",{id:"public-classes"},"Public classes"),(0,o.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(r.default,{query:"platform=android&api=public-classes",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(r.default,{query:"platform=ios&api=public-classes",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"additional-information"},"Additional information"),(0,o.mdx)("p",null,"To learn what context data is, please read the ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html"},"documentation on context data"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-api-reference-md-a95ab1d92328a8180897.js.map