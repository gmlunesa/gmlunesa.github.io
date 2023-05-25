---
title: "C#: Int.Parse versus Convert.ToInt32"
slug: "/blog/c-intparse-versus-converttoint32"
date: "2023-01-05"
tag: "C#"
tags: [".NET", "C#"]
description: "Difference between Int.Parse versus Convert.ToInt32 methods, written by Goldy Mariz Lunesa gmlunesa"
featuredImage: "./images/featuredImage.png"
---

> What is the difference between the Int.Parse and Convert.ToInt32 methods?

This question recently popped up in my head and prompted me to conduct more research, which is now laid out in this article.

## Key Notes

|                 | Int.Parse                                                                               | Convert.ToInt32                                        |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Objective       | Converts the string representation of a number to its 32-bit signed integer equivalent. | Converts a specified value to a 32-bit signed integer. |
| Syntax          | `Int32.Parse(String);`                                                                  | `Convert.ToInt32(String)`                              |
| Null Parameters | Returns `ArgumentNullException`.                                                        | Returns `0`.                                           |

## Int.Parse

`Int.Parse` is a method that converts the string representation of a number to its 32-bit signed integer equivalent.

### Syntax

```cs
public static int Parse (string s);
```

Let's demonstrate this method in the following example:

```cs
string[] values = { "+500", "-0", "1,300,423", "$230,873,083",
								"0xFA1C", "-10", "007", "2147483647",
								"2147483648", "16e05", "134985.0", "-12039",
								"-2147483648", "-2147483649" };
foreach (string value in values)
{
	try {
		int number = Int32.Parse(value);
		Console.WriteLine("{0} --> {1}", value, number);
	}
	catch (FormatException) {
		Console.WriteLine("{0}: Bad Format", value);
	}
	catch (OverflowException) {
		Console.WriteLine("{0}: Overflow", value);
	}
}

/**
Outputs the following:
+500 --> 500
-0 --> 0
1,300,423: Bad Format
$230,873,083: Bad Format
0xFA1C: Bad Format
-10 --> -10
007 --> 7
2147483647 --> 2147483647
2147483648: Overflow
16e05: Bad Format
134985.0: Bad Format
-12039 --> -12039
-2147483648 --> -2147483648
-2147483649: Overflow
**/
```

## Convert.ToInt32

`Convert.ToInt32` is a method that converts the specified string representation of a number to an equivalent 32-bit signed integer.

### Syntax

```cs
public static int ToInt32 (string? value);
```

Let's demonstrate this method in the following example:

```cs
string[] values = { "One", "1.34e28", "-26.87", "-18", "-6.00",
								" 0", "137", "1601.9", Int32.MaxValue.ToString() };
foreach (string value in values)
{
	try
	{
		int number = Int32.Parse(value);
		Console.WriteLine("{0} --> {1}", value, number);
	}
	catch (FormatException)
	{
		Console.WriteLine("{0}: Bad Format", value);
	}
	catch (OverflowException)
	{
		Console.WriteLine("{0}: Overflow", value);
	}
}
/**
Outputs the following:
One: Bad Format
1.34e28: Bad Format
-26.87: Bad Format
-18 --> -18
-6.00: Bad Format
 0 --> 0
137 --> 137
1601.9: Bad Format
2147483647 --> 2147483647
**/
```

## Looking Closer

### Similarities

These are the similar behaviors between `Int.Parse` and `Convert.ToInt32`:

- Convert a string to an integer.
- Raise Format exception when parameter is a datatype other than an integer.
- Raise Overflow exception when parameter is a large value.

### Differences

Although they operate similarly, these behaviors are where `Int.Parse` and `Convert.ToInt32` differ:

- `Int.Parse` works on a `string` exclusively, while`Convert.ToInt32` accepts any `object` (unless if the `object` does not implement `IConvertible`.
- `Convert.Int32` accepts null parameter and simply returns `0`, while `Int.Parse` raises an exception.

Interestingly enough, I looked over the [source code](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Convert.cs,069d595792a157df) of `Convert.ToInt32` and it simply calls `Int.Parse`.

### Int.TryParse

Another similar method to `Int.Parse` is `Int.TryParse`. It converts the string representation of a number to its 32-bit signed integer equivalent. However, the return value indicates whether the conversion succeeded.

## Remarks

Personally, I gravitate towards using `Int.TryParse`, since it makes the application more robust and enables me to prevent unhandled exceptions.

A preferable use case for `Convert.ToInt32` is when the type of `object` is unknown. Based on the source code, if the unknown `object` parameter is your type is already an `int`, `short` or `byte`, it will directly return it, no parsing needed. If the unknown `object` parameter is a `double`, it will round it and return it, no parsing needed. If it's a string, it will simply call `Int.Parse`.

To read more about this topic, please check out my sources:

- [Int32.Parse Method](https://learn.microsoft.com/en-us/dotnet/api/system.int32.parse?view=net-6.0)
- [Int32.TryParse Method](https://learn.microsoft.com/en-us/dotnet/api/system.int32.tryparse?view=net-6.0)
- [Convert.ToInt32 Method](https://learn.microsoft.com/en-us/dotnet/api/system.convert.toint32?view=net-6.0)
- [.NET Source Browser](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Convert.cs,069d595792a157df)
