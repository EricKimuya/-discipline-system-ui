export const AUTH_ADMIN_KEY = "user";

export const STATUS_CODE_NOT_AUTHENTICATED = 401;
export const CONFIG = {
  env: (process.env.REACT_APP_APP_ENV || "local").toUpperCase(),
  is_production:
    (process.env.REACT_APP_APP_ENV || "local").toUpperCase() === "PRODUCTION",
  app: process.env.REACT_APP_APP_NAME || "Points",
  api_url: process.env.REACT_APP_API_URL,
};

export const TEACHERS_ROLES = {
  HEADTEACHER: {
    display: "HeadTeacher",
    value: 1,
  },
  DEPUTY: {
    display: "Deputy Principal",
    value: 2,
  },
  TEACHER: {
    display: "Teacher",
    value: 3,
  },
};
