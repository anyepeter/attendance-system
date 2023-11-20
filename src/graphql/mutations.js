/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttend = /* GraphQL */ `
  mutation CreateAttend(
    $input: CreateAttendInput!
    $condition: ModelAttendConditionInput
  ) {
    createAttend(input: $input, condition: $condition) {
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
export const updateAttend = /* GraphQL */ `
  mutation UpdateAttend(
    $input: UpdateAttendInput!
    $condition: ModelAttendConditionInput
  ) {
    updateAttend(input: $input, condition: $condition) {
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
export const deleteAttend = /* GraphQL */ `
  mutation DeleteAttend(
    $input: DeleteAttendInput!
    $condition: ModelAttendConditionInput
  ) {
    deleteAttend(input: $input, condition: $condition) {
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
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createEnroll = /* GraphQL */ `
  mutation CreateEnroll(
    $input: CreateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    createEnroll(input: $input, condition: $condition) {
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
export const updateEnroll = /* GraphQL */ `
  mutation UpdateEnroll(
    $input: UpdateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    updateEnroll(input: $input, condition: $condition) {
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
export const deleteEnroll = /* GraphQL */ `
  mutation DeleteEnroll(
    $input: DeleteEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    deleteEnroll(input: $input, condition: $condition) {
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
export const createUserCourse = /* GraphQL */ `
  mutation CreateUserCourse(
    $input: CreateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    createUserCourse(input: $input, condition: $condition) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserCourse = /* GraphQL */ `
  mutation UpdateUserCourse(
    $input: UpdateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    updateUserCourse(input: $input, condition: $condition) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserCourse = /* GraphQL */ `
  mutation DeleteUserCourse(
    $input: DeleteUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    deleteUserCourse(input: $input, condition: $condition) {
      id
      courseID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
