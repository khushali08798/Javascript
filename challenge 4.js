// Challenge 4: Browser Execution Planner

/**
 * Plans browser execution by filtering runnable and blocked browsers.
 *
 * @param {string[]} allBrowsers
 * @param {string[]} blockedBrowsers
 * @returns {{runnable: string[], blocked: string[], plan: string}}
 */
function planBrowserExecution(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
  const blocked = blockedBrowsers;
  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return { runnable, blocked, plan };
}

// Example input:
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const result = planBrowserExecution(allBrowsers, blockedBrowsers);
console.log(result);