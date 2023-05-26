function tTest() {
  local tName=$1;

  echo "";
  echo "*****************************";
  echo "$tName";
  echo "*****************************";
  echo "";
}

tTest 'index.ts (TypeScript / tsx)'
npx tsx index.ts

tTest 'index.js (ESM / node)'
node index.js
