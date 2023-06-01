---
title: "Using Options pattern on ASP.NET"
slug: "/blog/using-options-pattern-on-aspnet"
date: "2023-04-15"
tag: ".NET"
tags: ["SOLID", ".NET"]
description: "Options pattern on ASP.NET, its usage and benefits"
featuredImage: "https://raw.githubusercontent.com/gmlunesa/gmlunesa.github.io/development/src/blog/using-options-pattern-on-aspnet/images/featuredImage.png"
---

In practically every project or application, there is a requirement to configure and modify various settings based on the environment being operated on. A prime example of this is handling connection strings for databases, which should ideally remain confidential and not be exposed. Other types of configurations could be paths, default values, user secrets, et cetera. For .NET and ASP.NET, these settings could be stored in environmental variables, `appsettings.json`, user secrets, a key vault (like Azure Key Vault), databases, or other custom settings files.

.NET provides the `IOptions` interface to be able to use strongly typed configuration values from the aforementioned files above. This way, we can also observe the **Options pattern**.

## Options Pattern

According to Microsoft, the options pattern utilizes classes to provide strongly-typed access to groups of related configuration values. When these values are isolated by scenario into separate classes, the application would adhere to two important software engineering principles:

- Interface Segregation Principle (ISP): Classes that depend on configuration settings depend only on configuration settings that they use.

- Separation of Concerns: Settings for different parts of the application are not dependent or tightly coupled with each other.

## Configuration Binding

Let's say we would like to access the configuration values under `LongPollingOptions` from an `appsettings.json`.

```json
{
  "LongPollingOptions": {
    "AutoRetry": true,
    "IntervalSeconds": 3000
  },
  "DatabaseLogLevel": "Warning"
}
```

We should create a strongly typed options class that matches the section of the configuration file.

```cs
public sealed class LongPollingOptions
{
    public bool AutoRetry { get; set; }
    public double IntervalSeconds { get; set; }
}
```

To follow the options pattern, the options class must:

- Built as non-abstract with a public constructor with no parameters
- Contain public read-write properties to bind (fields are **_not_** bound)

We can now bind the configuration values to the options class. In `Program.cs`, insert the following code after declaring and initializing the WebApplication builder.

```cs
// Program.cs
// Declare and initialize WebApplication builder
var builder = WebApplication.CreateBuilder(args);

// Insert following code to bind configuration data
builder.Services.Configure<LongPollingOptions>(builder.Configuration.GetSection("LongPollingOptions"));
```

Let's discuss the code that was inserted bit by bit.

```cs
builder.Configuration.GetSection("LongPollingOptions")
```

The preceding code retrieves a configuration section by its name, `LongPollingOptions` as specified here.

```cs
builder.Services.Configure<LongPollingOptions>(builder.Configuration.GetSection("LongPollingOptions"));
```

In the preceding code, the `LongPollingOptions` configuration section that was retrieved is bound to the `LongPollingOptions` instance. This hydrates the C# `LongPollingOptions` object properties with corresponding values from the configuration. It is then added to the dependency injection service container.

That's it! The newly created strongly typed `LongPollingOptions` options could now be accessed anywhere in the application that need to call it.

## Access the options

The following code demonstrates how we can access the options in our classes.

```cs
public sealed class ExampleService
{
  private readonly TransientFaultHandlingOptions _options;

  public ExampleService(IOptions<LongPollingOptions> options) =>
      _options = options.Value;

  public void DisplayValues()
  {
      Console.WriteLine($"TransientFaultHandlingOptions.AutoRetry={_options.AutoRetry}");
      Console.WriteLine($"TransientFaultHandlingOptions.IntervalSeconds={_options.IntervalSeconds}");
  }
}
```
