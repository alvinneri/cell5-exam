import request from "supertest";

const UNIT_TEST_TIMEOUT_MS = 10 * 50_000;
const URL = "http://localhost:9000";

describe("TEST /api/v1/auth ", () => {
  jest.setTimeout(UNIT_TEST_TIMEOUT_MS);

  const APPLICATION_JSON = "application/json";
  const userSignUp: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  } = {
    firstName: "Test_2",
    lastName: "User_2",
    email: "Test_9@mailinator.com",
    password: "password!43",
    confirmPassword: "password!43",
  };
  beforeAll(async function () {
    jest.setTimeout(UNIT_TEST_TIMEOUT_MS);
  });

  // create test for signup here
  test("Signup: It should satify the correct payload", async () => {
    jest.setTimeout(UNIT_TEST_TIMEOUT_MS);
    const response = await request(URL)
      .post("/api/v1/auth/signup")
      .send(userSignUp)
      .set("Accept", APPLICATION_JSON);
    const { data, message, success } = response.body;
    expect(message === "Signup successful").toBe(true);
    expect(success === true).toBe(true);
    expect(response.statusCode).toBe(201);
  });

  afterEach(async function () {
    // Closing the DB connection allows Jest to exit successfully.
    jest.setTimeout(UNIT_TEST_TIMEOUT_MS);
    await request(URL)
      .delete("/api/v1/auth/user")
      .send({ email: userSignUp.email })
      .set("Accept", APPLICATION_JSON);
    // await mongoose.connection.close();
  });
});
