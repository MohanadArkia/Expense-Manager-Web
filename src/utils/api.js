const baseURL = "https://expensemanager-server.onrender.com";

export const createAddIncome = async (transaction) => {
  const url = "/createAddIncome";
  return await fetchApi(url, "POST", transaction);
};

export const createAddExpense = async (transaction) => {
  const url = "/createAddExpense";
  return await fetchApi(url, "POST", transaction);
};

export const getAllIncomes = async () => {
  const url = `/getAllIncomes`;
  return await fetchApi(url);
};

export const getAllExpenses = async () => {
  const url = `/getAllExpenses`;
  return await fetchApi(url);
};

export const getMonthlyExpense = async () => {
  const url = "/getMonthlyExpense";
  return await fetchApi(url);
};

export const createMonthlyExpense = async (transaction) => {
  const url = "/createMonthlyExpense";
  return await fetchApi(url, "POST", transaction);
};

export const createReminder = async (transaction) => {
  const url = "/createReminder";
  return await fetchApi(url, "POST", transaction);
};

export const getReminders = async () => {
  const url = "/getReminders";
  return await fetchApi(url);
};

export const createUser = async (userDetails) => {
  const url = "/createUser";
  return await fetchApi(url, "POST", userDetails);
};

export const login = async (userDetails) => {
  const url = "/login";
  return await fetchApi(url, "POST", userDetails);
};

export const createGoal = async (goalDetails) => {
  const url = "/createGoal";
  return await fetchApi(url, "POST", goalDetails);
};

export const getAllGoals = async () => {
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
