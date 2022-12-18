---
title: "One Year of .NET 6: My Top Favorite Features"
slug: "/blog/one-year-net-6-my-top-favorite"
date: "2022-11-04"
tag: "C#"
tags: [".NET", "C#"]
description: "One Year of .NET 6: My Top Favorite Features"
featuredImage: "./images/featuredImage.png"
---

As we approach the first anniversary of the .NET 6 general launch (originally released last November 8, 2021), I thought I would share my favorite additions to the latest and greatest ;) version of .NET 6. Let's review the goals of .NET 6. If we take a look at Microsoft's initiatives available in this [site](https://themesof.net/query?q=group%3Atheme%20is%3Aopen%20-is%3Atask%20-is%3Abottomup%20%28no%3Amilestone%20or%20milestone%3A%3E%3D6.0%20milestone%3A%3C7.0%29), the .NET 6 release aimed to accomplish the following:

- Appeal to net-new developers, students and new technologists
- Provide a great client app development experience
- Get recognized as compelling framework for building cloud native apps
- Improve startup and throughput using runtime execution information
- Grow the .NET ecosystem through increased Quality, Confidence and Support
- Meet Developer Expectations

## C# 10

Alongside .NET 6, Microsoft also launched the newest version of C#, which is C# 10. It introduces new language features, such as global usings (which I wrote about [here](https://gmlunesa.com/blog/net-6-global-using-directives)), file-scoped namespaces, extended property patterns, null argument checks, lambda improvements to name a few. The [Microsoft blog](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/) goes in much more detail about the brand new additions.

## Minimal APIs

The ASP.NET team rolled out the Minimal APIs, which are a straightforward way to create HTTP APIs with minimal dependencies. Minimal APIs hook into ASP.NET Core’s hosting and routing capabilities and allow developers to create fully functioning APIs with just a few lines of code. Hence, they are recommended for everyone who wants to build microservices and apps but only want to include a minimum number of files and dependencies in ASP.NET Core.

With Minimal APIs, we can build an API with just **3 lines of code**.

```cs
var app = WebApplication.Create(args);

app.MapGet("/", () => "Hello World!");

app.Run();
```

This structure is very reminiscent of the [Express app model](https://expressjs.com/en/starter/hello-world.html). This is also a great way for newbies or devs from JS background to get into .NET in general.

## Hot Reload

Developers from other spaces, particularly in the front-end ecosystem, are already familiar with the concept of Hot Reload— save a file and see the changes almost instantaneously. Admittedly, establishing hot reload with a statically typed language is exponentially more complex compared to a traditionally interpreted language like JavaScript, so this feature had a long time coming along.

Finally, with .NET 6, developers can modify the apps managed source code while the application is running, eliminating the need to manually pause, hit a breakpoint or restart as a whole. Personally it still has some bugs here and there but overall it has improved my productivity when developing .NET apps or in other terms, my developer inner-loop performance!

## Simplified HTTP logging

.NET 6 introduced the HTTP Logging middleware for ASP.NET Core applications that logs information about incoming HTTP requests and HTTP responses, like:

- HTTP request information
- Common properties
- Headers
- Body
- HTTP response information

To enabled the said middleware, just add the following code:

```cs
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Add this code
app.UseHttpLogging();
```

This feature is really useful and replaces the custom middleware, libraries, or solutions we had to use to log simple HTTP requests before. However, HTTP Logging _**can reduce the performance of an app**_. The following needs to be considered to factor in performance impact:

- Filter which parts of the request and/or response to log.
- Filter which headers to log.
- Filter which information about incoming requests and/or responses to log.
- Avoid logging sensitive data such as personally identifiable information (PII).
- Test the performance impact of selected logging properties.

## Remarks

The new LTS version of .NET looks promising, both in the newly introduced features and benchmarks. I've had a great experience with it so far, I haven't encountered any major bug or issue. The Microsoft documentation is also very reliable which makes things definitely easier.

Microsoft is rolling out a new .NET version, .NET 7 (STS) on the 8th of November 2022! Details are available at [.NET Conf website](https://www.dotnetconf.net/).
