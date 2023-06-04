---
title: "MeowLearn"
slug: "/project/meowlearn"
date: "2022-06-01"
tag: "C#"
tags: ["ASP.NET", "C#", "SQL Server"]
links:
  [
    "https://github.com/gmlunesa/meowlearn",
    "https://meowlearn.azurewebsites.net",
  ]
description: "MeowLearn, a project by Goldy Mariz Lunesa @gmlunesa"
featuredImage: "./images/featuredImage.png"
---

MeowLearn is a concept project that uses the ASP.NET MVC framework to build a fullstack e-learning platform.

> Please take note that the live demo might be taken down from time to time to save on my personal Azure budget.
>
> If you would like to view the deployed project, please do contact me through this site or through [email](mailto:gmlunesa@gmail.com).

## Technologies Used

- ASP.NET MVC
- Azure App Service
- Azure SQL Server

<img
  src="./images/Screenshot_MeowLearn.png"
  alt="A screenshot of MeowLearn by @gmlunesa"
/>

## Features

- Register and Login
- Admin functionality
- Enroll in a course
- View lessons

### Register and Login

Authorization and authentication is managed by the ASP.NET Identity Framework.

### Admin Functionality

- The admin can create, modify and delete courses.
- Under each course, multiple lessons could be added.
- The admin can create, modify and delete lessons.
- Each lesson has its own content.
- A lesson could also have its own media type for viewing purposes.

- The admin can assign courses to the different users.
- The admin can also create, modify and delete media types, applicable to lessons.

<figure>
  <img
    src="./images/AdminFunctionalities.png"
    alt="MeowLearn Admin Functionalities: Course Management, User Management, Media Type Management"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Course Management, User Management, Media Type Management</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminManageCourses.png"
    alt="MeowLearn Admin Functionalities: Manage Courses"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Manage Courses</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminEditCourse.png"
    alt="MeowLearn Admin Functionalities: Edit a Course"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Edit a Course</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminDeleteCourse.png"
    alt="MeowLearn Admin Functionalities: Delete a Course"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Delete a Course</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminManageLessons.png"
    alt="MeowLearn Admin Functionalities: Manage Lessons"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Manage Lessons</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminCreateLessonContent.png"
    alt="MeowLearn Admin Functionalities: Create Lesson Content"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Create Lesson Content</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminEditLessonContent.png"
    alt="MeowLearn Admin Functionalities: Edit Lesson Content"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Edit Lesson Content</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminManageUsers.png"
    alt="MeowLearn Admin Functionalities: Manage Users"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Manage Users</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/AdminManageMediaTypes.png"
    alt="MeowLearn Admin Functionalities: Manage Media Types"
  />
  <figcaption>
    <em>MeowLearn Admin Functionalities: Manage Media Types</em>
  </figcaption>
</figure>

### Enroll in a course

Users are able to add or remove course membership.

<figure>
  <img
    src="./images/UserEnrollCourse.png"
    alt="MeowLearn User Functionalities: Enroll Course"
  />
  <figcaption>
    <em>MeowLearn User Functionalities: Enroll Course</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/UserViewCourses.png"
    alt="MeowLearn User Functionalities: View Enrolled Courses"
  />
  <figcaption>
    <em>MeowLearn User Functionalities: View Enrolled Courses</em>
  </figcaption>
</figure>

### View lessons

Users who are enrolled in a course are able to view lessons, which can contain text (with HTML syntax) and in-line videos.

<figure>
  <img
    src="./images/UserReadLesson.png"
    alt="MeowLearn User Functionalities: Read Lesson"
  />
  <figcaption>
    <em>MeowLearn User Functionalities: Read Lesson</em>
  </figcaption>
</figure>

<figure>
  <img
    src="./images/UserWatchLesson.png"
    alt="MeowLearn User Functionalities: Watch Lesson"
  />
  <figcaption>
    <em>MeowLearn User Functionalities: Watch Lesson</em>
  </figcaption>
</figure>

## Remarks

A video preview of MeowLearn is available on [Youtube](https://youtube.com).

As mentioned, please take note that the live demo might be taken down from time to time to save on my personal Azure budget. If you would like to view the deployed project, please do contact me through this site or through [email](mailto:gmlunesa@gmail.com), so I can get it up and running for you.
