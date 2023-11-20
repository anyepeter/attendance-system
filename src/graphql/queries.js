/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttend = /* GraphQL */ `
  query GetAttend($id: ID!) {
    getAttend(id: $id) {
      id
      present
      dayID
      userID
      courseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttends = /* GraphQL */ `
  query ListAttends(
    $filter: ModelAttendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        present
        dayID
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendsByDayID = /* GraphQL */ `
  query AttendsByDayID(
    $dayID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendsByDayID(
      dayID: $dayID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        present
        dayID
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendsByUserID = /* GraphQL */ `
  query AttendsByUserID(
    $userID: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        present
        dayID
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendsByCourseID = /* GraphQL */ `
  query AttendsByCourseID(
    $courseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendsByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        present
        dayID
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      name
      Courses {
        nextToken
        __typename
      }
      Attends {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEnroll = /* GraphQL */ `
  query GetEnroll($id: ID!) {
    getEnroll(id: $id) {
      id
      status
      userID
      courseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEnrolls = /* GraphQL */ `
  query ListEnrolls(
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const enrollsByUserID = /* GraphQL */ `
  query EnrollsByUserID(
    $userID: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enrollsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const enrollsByCourseID = /* GraphQL */ `
  query EnrollsByCourseID(
    $courseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enrollsByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        userID
        courseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserCourse = /* GraphQL */ `
  query GetUserCourse($id: ID!) {
    getUserCourse(id: $id) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userCoursesByCourseID = /* GraphQL */ `
  query UserCoursesByCourseID(
    $courseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByCourseID(
      courseID: $courseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userCoursesByUserID = /* GraphQL */ `
  query UserCoursesByUserID(
    $userID: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      code
      UserCourses {
        nextToken
        __typename
      }
      Enrolls {
        nextToken
        __typename
      }
      dayID
      Attends {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        code
        dayID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coursesByDayID = /* GraphQL */ `
  query CoursesByDayID(
    $dayID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByDayID(
      dayID: $dayID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        code
        dayID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      userType
      UserCourses {
        nextToken
        __typename
      }
      Enrolls {
        nextToken
        __typename
      }
      Attends {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        userType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
