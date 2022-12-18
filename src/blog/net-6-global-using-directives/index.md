---
title: ".NET 6: Global Using Directives"
slug: "/blog/net-6-global-using-directives"
date: "2021-12-11"
tag: "C#"
tags: [".NET", "C#"]
description: ".NET 6: Global Using Directives"
featuredImage: "./images/featuredImage.png"
---

A long and extensive list of `using` directives at the top of a `.cs` or `.razor` file is a familiar sight as a C# developer. The more dependencies you have, the longer this list goes. Some apply the `#region` directive on this part of the code, while others utilize tinker with their IDE setting— just to be able to collapse this area.

This convention has been around since .NET Framework 1.0 was launched in the year 2002. Although there is nothing technically wrong with this, it clutters the top space of the files. Additionally, many common libraries are duplicated across multiple files even under same namespaces.

As of [November 2021](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/), developers now have an option to address this issue through C# 10's <strong>global `using` directive</strong>.

## Global Using Directive

With this new feature, a developer may add the `global` modifier to a `using` directive, to signify that the qualified namespace is applied to all files during compilation.

### Syntax

```cs
global using <namespace>;
```

The global modifier may also be combined with the `static` modifier or applied to a `using alias` directive.

```cs
global using static System.Math;
```

Some rules to keep track of:

- `global using` directives must appear before all `using` directives without the global modifier
- `global using` directives must appear before all namespace and type declarations in the file

Moreover, the order of `global using` directives does not matter, either in a single file, or between multiple files. The `global using` directives may be placed in any source file, but personally, I like to keep them all in one file since it's more organized in that manner.

## Implicit Global Using Directives

.NET 6 also offers a set of <strong>implicit</strong> global using directives for projects for the most common libraries. This means that the compiler will automatically add a bunch of namespaces based on the project type, which will then be available out of the box.

As an example, the following libraries are implicitly added in a console application, which we do not have to specify them.

```cs
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
```

You may deactivate the implicit global using directives by adding this code to the `.csproj` file.

```xml
<ImplicitUsings>disable</ImplicitUsings>
```

## Requirements

To be able to use the `global using` directives, you must have the following:

- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

## Reflection

This newly added feature is helpful in maintaining the cleanliness of our source files. However, before we use the `global using` directives in different libraries, we must first consider and assess the situation.

- Will it introduce any naming conflicts in the project? If so, will aliasing the namespace be an option?
- Will the directive be used in one file? If so, there is no need to add it in the global scope.

If you would like to learn more about .NET 6 and C# 10, please check the following references.

- [What's new in C# 10](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10#global-using-directives)
- [What's new in .NET 6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6)
