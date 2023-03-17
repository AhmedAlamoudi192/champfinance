import scrapeIt from "scrape-it";

export async function scrape({ url }) {
  console.log("begin the request");
  let rows = [];
  const req1 = scrapeIt(url, {
    titles: " thead.cf .numeric",
    values: "tbody .numeric",
    labels: "tbody tr td:first-child",
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`);

    while (data.values.toString().includes("\t"))
      data.values = data.values.toString().replace("\t", "");

    while (data.values.toString().includes("\n"))
      data.values = data.values.toString().replace("\n", "");

    while (data.values.toString().includes("\r"))
      data.values = data.values.toString().replace("\r", " ");

    while (data.values.toString().includes("--"))
      data.values = data.values.toString().replace("--", "   -   -");

    while (data.values.toString().includes("   "))
      data.values = data.values.toString().replace("   ", "&");

    while (data.values.toString().includes("  "))
      data.values = data.values.toString().replace("  ", "&");

    while (data.values.toString().includes(","))
      data.values = data.values.toString().replace(",", "");

    data.values = data.values.split("&");

    data.values = data.values.filter((value) => value != "");
    data.values = data.values.map((value) => value.trim());

    data.titles = data.titles.replace("Balance Sheet", "");
    data.titles =
      data.titles.slice(0, 10) +
      "&" +
      data.titles.slice(10, 20) +
      "&" +
      data.titles.slice(20, 30) +
      "&" +
      data.titles.slice(30, 40);

    data.titles = data.titles.split("&");

    let allowedLables = [
      "Current Assets",
      "Inventory",
      "Investments",
      "Fixed Assets",
      "Other Assets",
      "Total Assets",
      "Current Liabilities",
      "Non-Current Liabilities",
      "Other Liabilities",
      "Shareholders Equity",
      "Total Liabilities and Shareholder Equity",
      "Minority Interests",
    ];
    for (let i = 0; i < allowedLables.length; i++) {
      if (!data.labels.includes(allowedLables[i]?.toString())) {
        allowedLables.splice(i, 1);
      }
    }
    data.labels = allowedLables;
    console.log(data.labels);

    let index = 0;
    data.labels.map((label) => {
      let row =
        label +
        "," +
        data.values[index] +
        "," +
        data.values[index + 1] +
        "," +
        data.values[index + 2] +
        "," +
        data.values[index + 3];
      index = index + 4;
      rows.push(row);
    });
  });

  let newUrl = url.replace("statementType=0", "statementType=2");

  const req2 = scrapeIt(newUrl, {
    titles: "thead.cf .numeric",
    values: "tbody .numeric",
    labels: "tbody tr td:first-child",
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`);

    while (data.values.toString().includes("\t"))
      data.values = data.values.toString().replace("\t", "");

    while (data.values.toString().includes("\n"))
      data.values = data.values.toString().replace("\n", "");

    while (data.values.toString().includes("\r"))
      data.values = data.values.toString().replace("\r", " ");

    while (data.values.toString().includes("--"))
      data.values = data.values.toString().replace("--", "   -   -");

    while (data.values.toString().includes("   "))
      data.values = data.values.toString().replace("   ", "&");

    while (data.values.toString().includes("  "))
      data.values = data.values.toString().replace("  ", "&");

    while (data.values.toString().includes(","))
      data.values = data.values.toString().replace(",", "");

    data.values = data.values.split("&");

    data.values = data.values.filter((value) => value != "");
    data.values = data.values.map((value) => value.trim());

    data.titles = data.titles.replace("Balance Sheet", "");
    data.titles =
      data.titles.slice(0, 10) +
      "&" +
      data.titles.slice(10, 20) +
      "&" +
      data.titles.slice(20, 30) +
      "&" +
      data.titles.slice(30, 40);

    data.titles = data.titles.split("&");

    let allowedLables = [
      "Net Income",
      "Depreciation",
      "Accounts Receivable",
      "Inventory",
      "Prepaid Expenses",
      "Accounts Payable",
      "Other Changes in Oper. Activity",
      "Purchases of Fixed Assets",
      "Other Changes in Investing Act.",
      "Increase in Debts",
      "Other Changes in Financing Act.",
      "Cash at Begining of Period",
      "Cash at End of Period",
    ];
    for (let i = 0; i < allowedLables.length; i++) {
      if (!data.labels.includes(allowedLables[i]?.toString())) {
        allowedLables.splice(i, 1);
      }
    }
    data.labels = allowedLables;
    console.log(data.labels);

    let index = 0;
    data.labels.map((label) => {
      let row =
        label +
        "," +
        data.values[index] +
        "," +
        data.values[index + 1] +
        "," +
        data.values[index + 2] +
        "," +
        data.values[index + 3];
      index = index + 4;
      rows.push(row);
    });
  });

  let newUrl2 = url.replace("statementType=0", "statementType=1");

  const req3 = scrapeIt(newUrl2, {
    titles: "thead.cf .numeric",
    values: "tbody .numeric",
    labels: "tbody tr td:first-child",
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`);

    while (data.values.toString().includes("\t"))
      data.values = data.values.toString().replace("\t", "");

    while (data.values.toString().includes("\n"))
      data.values = data.values.toString().replace("\n", "");

    while (data.values.toString().includes("\r"))
      data.values = data.values.toString().replace("\r", " ");

    while (data.values.toString().includes("--"))
      data.values = data.values.toString().replace("--", "   -   -");

    while (data.values.toString().includes("   "))
      data.values = data.values.toString().replace("   ", "&");

    while (data.values.toString().includes("  "))
      data.values = data.values.toString().replace("  ", "&");

    while (data.values.toString().includes(","))
      data.values = data.values.toString().replace(",", "");

    data.values = data.values.split("&");

    data.values = data.values.filter((value) => value != "");
    data.values = data.values.map((value) => value.trim());

    data.titles = data.titles.replace("Balance Sheet", "");
    data.titles =
      data.titles.slice(0, 10) +
      "&" +
      data.titles.slice(10, 20) +
      "&" +
      data.titles.slice(20, 30) +
      "&" +
      data.titles.slice(30, 40);

    data.titles = data.titles.split("&");

    let allowedLables = [
      "Sales",
      "Sales Cost",
      "Total Income",
      "Other Revenues",
      "Total Revenues",
      "Admin and Marketing Expenses",
      "Depreciation",
      "Total Expenses",
      "Net Income Before Zakat",
      "Zakat",
      "Net Income",
      "Balance First Period",
      "Reserves",
      "Balance End Period",
      "Cash Dividends",
      "Other Expenses",
      "Other Distributions",
    ];
    for (let i = 0; i < allowedLables.length; i++) {
      if (!data.labels.includes(allowedLables[i]?.toString())) {
        allowedLables.splice(i, 1);
      }
    }
    data.labels = allowedLables;

    let index = 0;
    data.labels.map((label) => {
      let row =
        label +
        "," +
        data.values[index] +
        "," +
        data.values[index + 1] +
        "," +
        data.values[index + 2] +
        "," +
        data.values[index + 3];
      index = index + 4;
      rows.push(row);
    });
  });

  return await Promise.all([req1, req2, req3]).then(() => {
    console.log(rows);
    return rows;
  });
}
