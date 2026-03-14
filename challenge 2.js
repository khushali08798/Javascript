// Challenge 2: Build Test Users from Arrays

/**
 * Builds an array of user objects from parallel arrays of names and roles.
 *
 * @param {string[]} names
 * @param {string[]} roles
 * @returns {{username: string, email: string, role: string}[]}
 */
function buildTestUsers(names, roles) {
  const domain = "@playwrightbatch.com";

  return names.map((name, index) => {
    const role = roles[index] ?? "";
    const username = name.toLowerCase().replace(/\s+/g, "_");
    const email = `${username}${domain}`;

    return { username, email, role };
  });
}

// Example input:
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
process.stdout.write(JSON.stringify(users));
