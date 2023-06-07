"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4570],{2635:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t=i(87462),o=i(63366),a=(i(15007),i(64983)),d=i(91515),r=["components"],m={},p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},l=p("Variant"),s=p("InlineNestedAlert"),c={_frontmatter:m},g=d.Z;function u(e){var n=e.components,i=(0,o.Z)(e,r);return(0,a.mdx)(g,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l,{platform:"android",task:"add",repeat:"8",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Add the Media for Edge Network extension and its dependencies to your project using the app's Gradle file.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:2.+'\nimplementation 'com.adobe.marketing.mobile:edge:2.+'\nimplementation 'com.adobe.marketing.mobile:edgeidentity:2.+'\nimplementation 'com.adobe.marketing.mobile:edgemedia:2.+'\n")),(0,a.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,a.mdx)("p",null,"Using dynamic dependency versions is ",(0,a.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,a.mdx)("a",{parentName:"p",href:"../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,a.mdx)("ol",{start:2},(0,a.mdx)("li",{parentName:"ol"},"Import the libraries in your application's main activity.")),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Edge;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\nimport com.adobe.marketing.mobile.edge.media.Media;\n")),(0,a.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Edge\nimport com.adobe.marketing.mobile.edge.identity.Identity\nimport com.adobe.marketing.mobile.edge.media.Media\n")),(0,a.mdx)(l,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"To add the Media for Edge Network extension and its dependencies to your project, add the following pods to your ",(0,a.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'AEPCore'\npod 'AEPEdge'\npod 'AEPEdgeIdentity'\npod 'AEPEdgeMedia'\n")),(0,a.mdx)("ol",{start:2},(0,a.mdx)("li",{parentName:"ol"},"In Xcode project, import the Media extension:")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Swift")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPEdgeMedia\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Objective-C")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPEdgeMedia;\n")),(0,a.mdx)(l,{platform:"android",task:"register",repeat:"5",mdxType:"Variant"}),(0,a.mdx)("p",null,"To register Media with Mobile Core, import the Media library and register it:"),(0,a.mdx)("h4",{id:"java-1"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n     @Override\n     public void onCreate() {\n         super.onCreate();\n\n         MobileCore.setApplication(this);\n         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n         List<Class<? extends Extension>> extensions = Arrays.asList(\n            Edge.EXTENSION, Identity.EXTENSION, Media.EXTENSION);\n         MobileCore.registerExtensions(extensions, o -> {\n             Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n         });\n     }\n }\n')),(0,a.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'class MyApp : Application() {\n    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        val extensions = listOf(Edge.EXTENSION, Identity.EXTENSION, Media.EXTENSION)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,a.mdx)(l,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,a.mdx)("h4",{id:"swift"},"Swift"),(0,a.mdx)("p",null,"In your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"_:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n   MobileCore.registerExtensions([Edge.self, Identity.self, Media.self], {\n   MobileCore.configureWith(appId: "yourEnvironmentId")\n })\n ...\n}\n')),(0,a.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,a.mdx)("p",null,"In your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register Media with Mobile Core:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileEdgeMedia.class, AEPMobileEdge.class, AEPMobileEdgeIdentity.class] completion:^{\n    [AEPMobileCore configureWithAppId: @"yourEnvironmentId"];\n  }];\n  ...\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-media-for-edge-network-tabs-index-md-e15bb28ed6905edeb4bf.js.map