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
  const url = "/getAllIncomes";
  return await fetchApi(url);
};

export const getAllExpenses = async () => {
  const url = "/getAllExpenses";
  return await fetchApi(url);
};

const fetchApi = async (url, method = "GET", body) => {
  const fullUrl = baseURL + url;
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(fullUrl, params);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};
