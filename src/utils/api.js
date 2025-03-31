const baseURL = "https://expensemanager-server.onrender.com";

export const CreateAddIncome = async (transaction) => {
  const url = "/createAddIncome";
  return await fetchApi(url, "POST", transaction);
};

export const CreateAddExpense = async (transaction) => {
  const url = "/createAddExpense";
  return await fetchApi(url, "POST", transaction);
};

export const GetAllIncomes = async () => {
  const url = `/getAllIncomes`;
  return await fetchApi(url);
};

export const GetAllExpenses = async () => {
  const url = `/getAllExpenses`;
  return await fetchApi(url);
};

export const GetMonthlyExpense = async () => {
  const url = "/getMonthlyExpense";
  return await fetchApi(url);
};

export const CreateMonthlyExpense = async (transaction) => {
  const url = "/createMonthlyExpense";
  return await fetchApi(url, "POST", transaction);
};

export const CreateReminder = async (transaction) => {
  const url = "/createReminder";
  return await fetchApi(url, "POST", transaction);
};

export const GetReminders = async () => {
  const url = "/getReminders";
  return await fetchApi(url);
};

export const CreateUser = async (userDetails) => {
  const url = "/createUser";
  return await fetchApi(url, "POST", userDetails);
};

export const Login = async (userDetails) => {
  const url = "/login";
  return await fetchApi(url, "POST", userDetails);
};

export const CreateGoal = async (goalDetails) => {
  const url = "/createGoal";
  return await fetchApi(url, "POST", goalDetails);
};

export const GetAllGoals = async () => {
  const url = "/getAllGoals";
  return await fetchApi(url);
};

const fetchApi = async (url, method, body) => {
  const fullUrl = baseURL + url;

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    const bodyStr = JSON.stringify(body);
    params.body = bodyStr;
  }
  params.method = method || "GET";

  return await fetch(fullUrl, params)
    .then((res) => res.json())
    .catch((e) => console.log("fetch error: ", e));
};
