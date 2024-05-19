<h1>สำรองเผื่อลืม 55555</h1>
<p>ก็จะพยายามไม่ลืมอ่ะนะ 55555</p>
<h1>ถ้าอยาก Setup เองก็ทำตามนี้</h1>
<ol>
    <li>ใช้ <code>yarn init -y</code></li>
    <li>ใช้ <code>yarn add -D @types/express @types/node typescript nodemon</code></li>
    <li>ใช้ <code>yarn add express dotenv</code></li>
    <li>ใช้ <code>npx tsc --init</code> สำหรับ Setup tsconfig.json</li>
    <li>เข้าไปเเก้ tsconfig.json ตรง <code>"outDir": "./dist"</code> เป็นตามนี้ </li>
    <li>เเละเข้าไปเเก้ package.json ตรง script run เป็น <code>"scripts": {
    "build": "npx tsc",
    "start": "yarn build && node ./dist/index.js",
    "dev": "nodemon ./index.ts"}</code></li>
</ol>