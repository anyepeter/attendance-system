/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttend = /* GraphQL */ `
  subscription OnCreateAttend($filter: ModelSubscriptionAttendFilterInput) {
    onCreateAttend(filter: $filter) {
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
export const onUpdateAttend = /* GraphQL */ `
  subscription OnUpdateAttend($filter: ModelSubscriptionAttendFilterInput) {
    onUpdateAttend(filter: $filter) {
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
export const onDeleteAttend = /* GraphQL */ `
  subscription OnDeleteAttend($filter: ModelSubscriptionAttendFilterInput) {
    onDeleteAttend(filter: $filter) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onCreateEnroll = /* GraphQL */ `
  subscription OnCreateEnroll($filter: ModelSubscriptionEnrollFilterInput) {
    onCreateEnroll(filter: $filter) {
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
export const onUpdateEnroll = /* GraphQL */ `
  subscription OnUpdateEnroll($filter: ModelSubscriptionEnrollFilterInput) {
    onUpdateEnroll(filter: $filter) {
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
export const onDeleteEnroll = /* GraphQL */ `
  subscription OnDeleteEnroll($filter: ModelSubscriptionEnrollFilterInput) {
    onDeleteEnroll(filter: $filter) {
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
export const onCreateUserCourse = /* GraphQL */ `
  subscription OnCreateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onCreateUserCourse(filter: $filter) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserCourse = /* GraphQL */ `
  subscription OnUpdateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onUpdateUserCourse(filter: $filter) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserCourse = /* GraphQL */ `
  subscription OnDeleteUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onDeleteUserCourse(filter: $filter) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
